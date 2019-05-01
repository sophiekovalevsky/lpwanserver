const Client = require('../../../rest/networkProtocols/handlers/LoraOpenSource/v2/client')
const client = new Client()

module.exports = {
  account: {
    username: 'admin',
    password: 'admin'
  },
  session: {},
  network: {
    baseUrl: 'https://lora_appserver:8080/api'
  },
  networkServer: {
    name: 'LoraOS2',
    server: 'loraserver:8000'
  },
  organization: {
    name: 'cablelabs',
    displayName: 'CableLabs',
    canHaveGateways: false
  },
  serviceProfile: {
    name: 'defaultForLPWANServer'
  },
  deviceProfile: {
    name: 'BobMouseTrapDeviceProfileLv2',
    macVersion: '1.0.0'
  },
  application: {
    name: 'BobMouseTrapLv2',
    description: 'CableLabs Test Application',
  },
  device: {
    name: 'BobMouseTrapDeviceLv2',
    description: 'Test Device for E2E',
    devEUI: '3344556677889900'
  },
  deviceActivation: {
    "aFCntDown": 0,
    "appSKey": "290535e48e5e767d9810903db0e50298",
    "devAddr": "f9bdf0ab",
    "devEUI": "3344556677889900",
    "fCntUp": 0,
    "fNwkSIntKey": "0e0f3622c801729c1dd2d644bd477244",
    "nFCntDown": 0,
    "nwkSEncKey": "0e0f3622c801729c1dd2d644bd477244",
    "sNwkSIntKey": "0e0f3622c801729c1dd2d644bd477244"
  },
  _setNetworkServerId (id) {
    this.networkServer.id = id
    this.serviceProfile.networkServerID = id
    this.deviceProfile.networkServerID = id
  },
  _setOrgId (id) {
    this.organization.id = id
    this.serviceProfile.organizationID = id
    this.deviceProfile.organizationID = id
    this.application.organizationID = id
  },
  _setServiceProfileId (id) {
    this.serviceProfile.id = id
    this.application.serviceProfileID = id
  },
  _setDeviceProfileId (id) {
    this.deviceProfile.id = id
    this.device.deviceProfileID = id
  },
  _setApplicationId (id) {
    this.application.id = id
    this.device.applicationID = id
  },
  async setup () {
    let res
    // Create Session
    this.session.connection = await client.login(this.network, this.account)
    // Create Network Server
    res = await client.createNetworkServer(this.session, this.network, this.networkServer)
    this._setNetworkServerId(res.id)
    // Create Org
    res = await client.createOrganization(this.session, this.network, this.organization)
    this._setOrgId(res.id)
    // Create Service Profile
    res = await client.createServiceProfile(this.session, this.network, this.serviceProfile)
    this._setServiceProfileId(res.id)
    // Create Device Profile
    res = await client.createDeviceProfile(this.session, this.network, this.deviceProfile)
    this._setDeviceProfileId(res.id)
    // Create App
    res = await client.createApplication(this.session, this.network, this.application)
    this._setApplicationId(res.id)
    // Create Device
    await client.createDevice(this.session, this.network, this.application.id, this.device)
    // Activate Device
    await client.activateDevice(this.session, this.network, this.device.devEUI, this.deviceActivation)
  }
}