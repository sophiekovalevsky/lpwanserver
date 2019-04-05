// Configuration access.
const config = require('../config')

// General libraries in use in this module.
const appLogger = require('../lib/appLogger.js')
// Used in getting data for the reportingProtocols
const NetworkProtocolDataAccess = require('../networkProtocols/networkProtocolDataAccess.js')
const reportingProtocol = require('../reportingProtocols/postHandler')

var modelAPI
var running = new Map()

//* *****************************************************************************
// The Application interface.
//* *****************************************************************************
// Class constructor.
//
// Loads the implementation for the application interface based on the passed
// subdirectory name.  The implementation file applications.js is to be found in
// that subdirectory of the models/dao directory (Data Access Object).
//
// app    - The express application, which the startApplication and
//          stopApplication methods may modify to add and remove endpoints
//          used by remote networks to pass in application data.
//
// server - The modelAPI, giving access to the other data needed to start
//          and stop apps.
//
function Application (app, server) {
  this.impl = require('./dao/' +
                             config.get('impl_directory') +
                             '/applications.js')

  modelAPI = server
}

// Retrieves a subset of the applications in the system given the options.
//
// Options include limits on the number of applications returned, the offset to
// the first application returned (together giving a paging capability), a
// search string on application name, a companyId, and a reportingProtocolId
Application.prototype.retrieveApplications = function (options) {
  let me = this
  return new Promise(async function (resolve, reject) {
    try {
      let recs = await me.impl.retrieveApplications(options)
      // Add in the running flag.
      for (let i = 0; i < recs.records.length; ++i) {
        let rec = recs.records[ i ]
        rec[ 'running' ] = running.has(rec.id)
      }
      resolve(recs)
    }
    catch (err) {
      reject(err)
    }
  })
}

// Retrieve an application record by id.
//
// id - the record id of the application.
//
// Returns a promise that executes the retrieval.
Application.prototype.retrieveApplication = function (id) {
  let me = this
  return new Promise(async function (resolve, reject) {
    try {
      let rec = await me.impl.retrieveApplication(id)
      rec[ 'running' ] = running.has(rec.id)
      resolve(rec)
    }
    catch (err) {
      reject(err)
    }
  })
}

// Create the application record.
//
// name                - the name of the application
// description         - a description for the application
// companyId           - the id of the Company this application belongs to
// reportingProtocolId - The protocol used to report data to the application
// baseUrl             - The base URL to use for reporting the data to the
//                       application using the reporting protocol
//
// Returns the promise that will execute the create.
Application.prototype.createApplication = function (name, description, companyId, reportingProtocolId, baseUrl) {
  return this.impl.createApplication(name, description, companyId, reportingProtocolId, baseUrl)
}

// Update the application record.
//
// application - the updated record.  Note that the id must be unchanged from
//               retrieval to guarantee the same record is updated.
//
// Returns a promise that executes the update.
Application.prototype.updateApplication = function (record) {
  // Throw away any reference to the running transient field that may have
  // been returned on a query.
  delete record[ 'running' ]
  return this.impl.updateApplication(record)
}

// Delete the application record.
//
// id - the id of the application record to delete.
//
// Returns a promise that performs the delete.
Application.prototype.deleteApplication = function (id) {
  let me = this
  return new Promise(async function (resolve, reject) {
    // Delete my devices and applicationNetworkTypeLinks first.
    try {
      // Delete devices
      let devs = await modelAPI.devices.retrieveDevices({ applicationId: id })
      let recs = devs.records
      for (let i = 0; i < recs.length; ++i) {
        await modelAPI.devices.deleteDevice(recs[ i ].id)
      }
    }
    catch (err) {
      appLogger.log("Error deleting application's devices: ",
        err)
    }
    try {
      // Delete applicationNetworkTypeLinks
      let antls = await modelAPI.applicationNetworkTypeLinks.retrieveApplicationNetworkTypeLinks({ applicationId: id })
      let recs = antls.records
      for (let i = 0; i < recs.length; ++i) {
        await modelAPI.applicationNetworkTypeLinks.deleteApplicationNetworkTypeLink(recs[ i ].id)
      }
    }
    catch (err) {
      appLogger.log("Error deleting application's networkTypeLinks: ",
        err)
    }

    try {
      // Kill the application if it's running.
      if (running.has(id)) {
        await me.stopApplication(id)
      }
      await me.impl.deleteApplication(id)
      resolve()
    }
    catch (err) {
      reject(err)
    }
  })
}

//* *****************************************************************************
// The Application control interface.
//* *****************************************************************************
// Start processing data for the application.
//
// id             - the id of the application to start processing for.
// nodeExpressApp - The node app so we can set up a URL to get data.
//
// Returns a promise that performs the start.
Application.prototype.startApplication = async function (id) {
  // let me = this
  // return new Promise(async function (resolve, reject) {
  //   let appLinks = await modelAPI.applicationNetworkTypeLinks.retrieveApplicationNetworkTypeLinks({ 'applicationId': id })
  //   let allLogs = []
  //   let allPromises = []
  //   appLinks.records.forEach(async function (appLink) {
  //     allPromises.push(modelAPI.networkTypeAPI.startApplication(appLink.networkTypeId, id))
  //   })
  //   try {
  //     // Generates an array of arrays of logs.
  //     let logs = await Promise.all(allPromises)
  //     logs.forEach((onePromiseLogs) => {
  //       onePromiseLogs.forEach((log) => {
  //         allLogs.push(log)
  //       })
  //     })
  //   }
  //   catch (err) {
  //     allLogs.push('Failed to start application on at least one network')
  //   }
  //
  //   let rec = {}
  //   rec.remoteAccessLogs = allLogs
  //
  //   // Keep track of running applications (transient property)
  //   running.set(id, true)
  //
  //   resolve(rec)
  // })
  running.set(id, true)
  return ({})
}

// Stop processing data for the application.
//
// id - the id of the application to stop processing for.
//
// Returns a promise that performs the stop.
Application.prototype.stopApplication = async function (id) {
  // let me = this
  // return new Promise(async function (resolve, reject) {
  //   let appLinks = await modelAPI.applicationNetworkTypeLinks.retrieveApplicationNetworkTypeLinks({ 'applicationId': id })
  //   let allLogs = {}
  //   let allPromises = []
  //   appLinks.records.forEach(async function (appLink) {
  //     allPromises.push(modelAPI.networkTypeAPI.stopApplication(appLink.networkTypeId, id))
  //   })
  //   try {
  //     // Generates an array of logs.
  //     let logs = await Promise.all(allPromises)
  //     for (let logSet = 0; logSet < logs.length; ++logSet) {
  //       for (let networkId in logs[ logSet ]) {
  //         let networkLogs = logs[ logSet ][ networkId ]
  //         if (!allLogs[ networkId ]) {
  //           // Not there yet.  OK to assign.  And yeah, this
  //           // is a reference, but we won't be using the entries
  //           // after this.
  //           allLogs[ networkId ] = networkLogs
  //         }
  //         else {
  //           // Add in the logs from this network.
  //           for (let j = 0; j < networkLogs[ networkId ].logs.length; ++j) {
  //             allLogs[ networkId ].logs.push(networkLogs[ networkId ].logs[ j ])
  //           }
  //         }
  //       }
  //     }
  //   }
  //   catch (err) {
  //     allLogs.push('Failed to stop application on at least one network')
  //   }
  //
  //   let rec = {}
  //   rec.remoteAccessLogs = allLogs

  // Remove from running applications
  running.set(id, false)
}

// Pass data to the reporting protocol as a test.
//
// applicationId - the id of the application to forward data for.
// data          - the data to be passed.
//
// Returns a promise that performs the test.
Application.prototype.testApplication = function (applicationId, data) {
  let me = this
  return new Promise(async function (resolve, reject) {
    try {
      let app = await me.impl.retrieveApplication(applicationId)
      let response = await reportingProtocol.report(data, app.baseUrl, app.name)
      resolve(response.statusCode)
    }
    catch (err) {
      appLogger.log('Failed test, error = ' + err)
      reject(err)
    }
  })
}

// Pass data to the reporting protocol coming from the network.
//
// applicationId - the id of the application to forward data for.
// networkId     - the id of the network the data is coming from.
// data          - the data to be passed.
//
// Returns a promise that performs the pass.
Application.prototype.passDataToApplication = async function passDataToApplication (applicationId, networkId, data) {
  let network = await modelAPI.networks.retrieveNetwork(networkId)
  let proto = await modelAPI.networkProtocolAPI.getProtocol(network)
  let dataAPI = new NetworkProtocolDataAccess(modelAPI, 'ReportingProtocol')
  await proto.api.passDataToApplication(network, applicationId, data, dataAPI)
  return 204
}
// Start all of the applications we have - intended for system bringup.
//
// Returns a promise that performs the start.
Application.prototype.startApplications = function () {
  let me = this
  return new Promise(async function (resolve, reject) {
    try {
      // Start all applications.
      let recs = await me.retrieveApplications({})
      for (let i = 0; i < recs.records.length; ++i) {
        me.startApplication(recs.records[ i ].id)
      }
      resolve()
    }
    catch (err) {
      appLogger.log('Failed to start applications: ' + err)
      reject(err)
    }
  })
}

module.exports = Application
