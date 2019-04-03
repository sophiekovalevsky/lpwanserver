// Configuration access.
const cry = require('cry' + 'pto')

// Logging
const appLogger = require('../lib/appLogger.js')

// Breaking it up makes it harder to search via grep...
const al = 'a' + 'es-' + '25' + '6-' + 'c' + 'tr'

let modelAPI

const delimiter = '-'

//* *****************************************************************************
// The NetworkProtocol Data Access object.
//
// Allows NetworkProtocols to access data for the current company, application,
// device, etc., so that we don't end up pre-loading data the protocol doesn't
// need.  Also, caches data so that repeated hits on the database can be
// avoided.  This object is expected to be short-lived, allowing the cache to
// expire between operations.
//* *****************************************************************************
// Class constructor.
//
// Sets up the structure for access to the database implementation and keeps
// track of the "global" function for the lifespan of this object for logging.
//
// models   - The modelAPI, giving access to the data access apis.
// fdesc    - The function description for logging, outlining why the data is
//            being accessed.
//
module.exports = class NetworkProtocolDataAccess {
  constructor (models, fdesc = 'Unspecified function') {
    modelAPI = models
    this.fdesc = fdesc
    this.cache = {}
    this.logs = {}
  }
  // One of the few non-caching methods in this object, gets the networks for the
  // network type ID.  It is expected that this will be called once by a method
  // that creates this object, but it'll be common code across many operations.
  async getNetworksOfType (networkTypeId) {
    return appLogger.logOnThrow(
      () => modelAPI.networks.retrieveNetworks({ 'networkTypeId': networkTypeId }),
      err => `${this.funcDesc}: Failed to load networks of type ${networkTypeId}: ${err}`
    )
  }
  async cacheFirst (path, request, errMessage) {
    // Cache was causing errors.  Disabling.
    // Next cache implementation should be Redis or Memcache at the model level.
    return appLogger.logOnThrow(
      request,
      err => `${this.funcDesc}: ${errMessage}: ${err}`
    )
  }
  getCompanyById (id) {
    return this.cacheFirst(
      ['companies', `${id}`],
      () => modelAPI.companies.retrieveCompany(id),
      `Failed to load company ${id}`
    )
  }
  getApplicationById (id) {
    return this.cacheFirst(
      ['applications', `${id}`],
      () => modelAPI.applications.retrieveApplication(id),
      `Failed to load application ${id}`
    )
  }
  async getReportingAPIByApplicationId (appId) {
    // reporting protocols cached by reportingProtocolAPIs
    try {
      let application = await this.getApplicationById(appId)
      return modelAPI.reportingProtocolAPIs.getProtocol(application)
    }
    catch (err) {
      this._log(`${this.funcDesc}: Failed to load application ${appId} or it's reporting protocol`)
      throw err
    }
  }
  getDeviceById (id) {
    return this.cacheFirst(
      ['devices', `${id}`],
      () => modelAPI.devices.retrieveDevice(id),
      `Failed to load device ${id}`
    )
  }
  async getDeviceProfileById (id) {
    return this.cacheFirst(
      ['deviceProfiles', `${id}`],
      () => modelAPI.deviceProfiles.retrieveDeviceProfile(id),
      `Failed to load device profile ${id}`
    )
  }
  async getCompanyByApplicationId (appId) {
    let app = await this.getApplicationById(appId)
    return this.getCompanyById(app.company.id)
  }
  async getCompanyByDeviceId (devId) {
    let dev = await this.getDeviceById(devId)
    return this.getCompanyByApplicationId(dev.application.id)
  }
  async getCompanyByDeviceProfileId (devProId) {
    let devPro = await this.getDeviceProfileById(devProId)
    return this.getCompanyById(devPro.company.id)
  }
  async getApplicationByDeviceId (devId) {
    let dev = await this.getDeviceById(devId)
    return this.getApplicationById(dev.application.id)
  }
  async getDeviceProfileByDeviceIdNetworkTypeId (devId, ntId) {
    let dnt = await this.getDeviceNetworkType(devId, ntId)
    return this.getDeviceProfileById(dnt.deviceProfile.id)
  }
  async getCompanyNetworkType (companyId, networkTypeId) {
    const request = async () => {
      const { records } = await modelAPI.companyNetworkTypeLinks.retrieveCompanyNetworkTypeLinks({ companyId, networkTypeId })
      return records[0]
    }
    return this.cacheFirst(
      ['companyNetworkTypeLinks', `${companyId}:${networkTypeId}`],
      request,
      `Failed to load CompanyNetworkTypeLink for company ${companyId} and networkType ${networkTypeId}`
    )
  }
  async getApplicationNetworkType (applicationId, networkTypeId) {
    const request = async () => {
      const { records } = await modelAPI.applicationNetworkTypeLinks.retrieveApplicationNetworkTypeLinks({ applicationId, networkTypeId })
      return records[0]
    }
    return this.cacheFirst(
      ['applicationNetworkTypeLinks', `${applicationId}:${networkTypeId}`],
      request,
      `Failed to load ApplicationNetworkTypeLink for application ${applicationId} and networkType ${networkTypeId}`
    )
  }
  async getDeviceNetworkType (deviceId, networkTypeId) {
    const request = async () => {
      const { records } = await modelAPI.deviceNetworkTypeLinks.retrieveDeviceNetworkTypeLinks({ deviceId, networkTypeId })
      appLogger.log(`GET_DEVICE_NETWORK_TYPE: ${JSON.stringify(records)}`)
      return records[0]
    }
    return this.cacheFirst(
      ['applicationNetworkTypeLinks', `${deviceId}:${networkTypeId}`],
      request,
      `Failed to load DeviceNetworkTypeLink for device ${deviceId} and networkType ${networkTypeId}`
    )
  }
  async getDevicesForDeviceProfile (deviceProfileId) {
    const request = async () => {
      let devs = await modelAPI.devices.retrieveDevices({ 'deviceProfileId': deviceProfileId })
      // Put devices in cache (cache is disabled)
      // devs.forEach(x => R.assocPath(['devices', `${x.id}`], x, this.cache))
      return devs.map(x => x.id)
    }
    const devIds = await this.cacheFirst(
      ['devicesInProfile', deviceProfileId],
      request,
      `Failed to load devices for DeviceProfile ${deviceProfileId}`
    )
    return Promise.all(devIds.map(id => this.getDeviceById(id)))
  }
  initLog (networkType, network) {
    const key = !network ? 0 : network.id
    this.logs[key] = {
      logs: [],
      networkTypeName: networkType.name,
      networkName: !network ? `All networks of type ${networkType.name}` : network.name
    }
  }
  addLog (network, message) {
    // Message objects are not a good thing.  Try a couple of common ones, then
    // resort to stringify
    if (typeof message === 'object') {
      message = formatObjectMessage(message)
    }
    const key = network ? network.id : 0
    this.logs[key].logs.push(message)
  }
  getLogs () {
    // Filter out networks that have no logs
    return Object.keys(this.logs).reduce((acc, id) => {
      if (this.logs[id].logs.length) acc[id] = this.logs[id]
      return acc
    }, {})
  }
  async getProtocolDataForKey (networkId, networkProtocolId, key) {
    const rec = await modelAPI.protocolData.retrieveProtocolData(networkId, networkProtocolId, key)
    return rec.dataValue
  }
  async putProtocolDataForKey (networkId, networkProtocolId, key, data) {
    try {
      // Try a create first.
      await modelAPI.protocolData.createProtocolData(networkId, networkProtocolId, key, data)
    }
    catch (err) {
      // Nope?  Get and update!  (Need to get to get the record id.)
      const rec = await modelAPI.protocolData.retrieveProtocolData(networkId, networkProtocolId, key)
      await modelAPI.protocolData.updateProtocolData({ id: rec.id, dataValue: data })
    }
  }
  deleteProtocolDataForKey (networkId, networkProtocolId, keyStartsWith) {
    return modelAPI.protocolData.clearProtocolData(networkId, networkProtocolId, keyStartsWith)
  }
  getProtocolDataWithData (networkId, keyLike, data) {
    return modelAPI.protocolData.reverseLookupProtocolData(networkId, keyLike, data)
  }
  access (network, data, k) {
    let parts = data.split(delimiter)
    let vec = Buffer.from(parts[ 0 ], 'base64')
    let dec = cry.createDecipheriv(al, Buffer.from(k, 'base64'), vec)
    let res = dec.update(parts[ 1 ], 'base64', 'utf8')
    res += dec.final('utf8')
    return JSON.parse(res)
  }
  hide (network, dataObject, k) {
    let vec = cry.randomBytes(16)
    let cfr = cry.createCipheriv(al, Buffer.from(k, 'base64'), vec)
    let en = cfr.update(JSON.stringify(dataObject), 'utf8', 'base64')
    en += cfr.final('base64')
    return vec.toString('base64') + delimiter + en
  }
  genKey () {
    return cry.randomBytes(32).toString('base64')
  }
  genPass () {
    return cry.randomBytes(12).toString('base64')
  }
}

function formatObjectMessage (msg) {
  if (!msg.syscall) return JSON.stringify(msg)
  switch (msg.code) {
    case 'ECONNREFUSED': return 'Cannot connect to remote network server'
    case 'ETIMEDOUT': return 'Remote server timed out on request'
    default: return `${msg.syscall} returned ${msg.code}`
  }
}
