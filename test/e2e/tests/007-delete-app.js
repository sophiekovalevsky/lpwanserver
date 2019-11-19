let chai = require('chai')
let chaiHttp = require('chai-http')
const { createApp } = require('../../../app/rest-server/app')
let setup = require('../setup.js')
let Data = require('../../data')
const { assertEqualProps } = require('../../lib/helpers')
const Chirpstack1 = require('../../networks/chirpstack-v1')
const Chirpstack2 = require('../../networks/chirpstack-v2')
const Loriot = require('../../networks/loriot')
const { prisma } = require('../../../app/generated/prisma-client')

var should = chai.should()
chai.use(chaiHttp)
let server

const describeLoriot = process.env.LORIOT_ENABLED === 'true' ? describe : describe.skip.bind(describe)

let adminToken = ''
let remoteApp1 = ''
let remoteApp2 = ''
let remoteAppLoriot = ''
let remoteDeviceProfileId = ''
let remoteDeviceProfileId2 = ''

describe('E2E Test for Deleting an Application Use Case #191', () => {
  let reportingProtocolId
  let networkTypeId
  let testData

  before(async () => {
    const app = await createApp()
    server = chai.request(app).keepOpen()
    const reportingProtocols = await prisma.reportingProtocols({ first: 1 })
    reportingProtocolId = reportingProtocols[0].id
    const nwkTypes = await prisma.networkTypes({ first: 1 })
    networkTypeId = nwkTypes[0].id
    await setup.start()

    testData = {
      ...Data.applicationTemplates.default({
        name: 'DLAP',
        networkTypeId,
        reportingProtocolId
      }),
      ...Data.deviceTemplates.weatherNode({
        name: 'DLAP001',
        networkTypeId,
        devEUI: '0080000000000701'
      })
    }
  })

  describe('Verify Login and Administration of Users Works', () => {
    it('Admin Login to LPWan Server', (done) => {
      server
        .post('/api/sessions')
        .send({'username': 'admin', 'password': 'password'})
        .end(function (err, res) {
          if (err) done(err)
          res.should.have.status(200)
          adminToken = res.text
          done()
        })
    })
  })
  describe('Create Application', () => {
    it('should return 200 on admin', function (done) {
      server
        .post('/api/applications')
        .set('Authorization', 'Bearer ' + adminToken)
        .set('Content-Type', 'application/json')
        .send(testData.app)
        .end(function (err, res) {
          res.should.have.status(201)
          let ret = JSON.parse(res.text)
          testData.app.id = ret.id
          testData.device.applicationId = ret.id
          testData.appNTL.applicationId = ret.id
          done()
        })
    })
    it('should return 200 on get', function (done) {
      server
        .get('/api/applications/' + testData.app.id)
        .set('Authorization', 'Bearer ' + adminToken)
        .set('Content-Type', 'application/json')
        .send()
        .end(function (err, res) {
          res.should.have.status(200)
          let appObj = JSON.parse(res.text)

          Object.keys(testData.app).forEach(prop => {
            appObj[prop].should.equal(testData.app[prop])
          })

          done()
        })
    })
    it('Create Network Type Links for Application', function (done) {
      server
        .post('/api/application-network-type-links')
        .set('Authorization', 'Bearer ' + adminToken)
        .set('Content-Type', 'application/json')
        .send(testData.appNTL)
        .end(function (err, res) {
          res.should.have.status(201)
          let ret = JSON.parse(res.text)
          testData.appNTL.id = ret.id
          done()
        })
    })
    it('should return 200 on get', function (done) {
      server
        .get('/api/application-network-type-links/' + testData.appNTL.id)
        .set('Authorization', 'Bearer ' + adminToken)
        .set('Content-Type', 'application/json')
        .send()
        .end(function (err, res) {
          res.should.have.status(200)
          let appObj = JSON.parse(res.text)
          done()
        })
    })
  })
  describe('Create Device Profile for Application', () => {
    it('Create Device Profile', function (done) {
      server
        .post('/api/device-profiles')
        .set('Authorization', 'Bearer ' + adminToken)
        .set('Content-Type', 'application/json')
        .send(testData.deviceProfile)
        .end(function (err, res) {
          res.should.have.status(201)
          let ret = JSON.parse(res.text)
          testData.deviceProfile.id = ret.id
          testData.deviceNTL.deviceProfileId = ret.id
          done()
        })
    })
    it('should return 200 on get', function (done) {
      server
        .get('/api/device-profiles/' + testData.deviceProfile.id)
        .set('Authorization', 'Bearer ' + adminToken)
        .set('Content-Type', 'application/json')
        .send()
        .end(function (err, res) {
          res.should.have.status(200)
          assertEqualProps(
            ['name', 'description', 'networkTypeId'],
            JSON.parse(res.text),
            testData.deviceProfile
          )
          done()
        })
    })
  })
  describe('Create Device for Application', () => {
    it('POST Device', function (done) {
      server
        .post('/api/devices')
        .set('Authorization', 'Bearer ' + adminToken)
        .set('Content-Type', 'application/json')
        .send(testData.device)
        .end(function (err, res) {
          res.should.have.status(201)
          let ret = JSON.parse(res.text)
          testData.device.id = ret.id
          testData.deviceNTL.deviceId = ret.id
          done()
        })
    })

    it('should return 200 on get', function (done) {
      server
        .get('/api/devices/' + testData.device.id)
        .set('Authorization', 'Bearer ' + adminToken)
        .set('Content-Type', 'application/json')
        .send()
        .end(function (err, res) {
          res.should.have.status(200)
          let devObj = JSON.parse(res.text)
          assertEqualProps(
            ['name', 'description', 'deviceModel'],
            devObj,
            testData.device
          )
          done()
        })
    })
    it('Create Device NTL', function (done) {
      server
        .post('/api/device-network-type-links')
        .set('Authorization', 'Bearer ' + adminToken)
        .set('Content-Type', 'application/json')
        .send(testData.deviceNTL)
        .end(function (err, res) {
          res.should.have.status(201)
          var dnlObj = JSON.parse(res.text)
          testData.deviceNTL.id = dnlObj.id
          done()
        })
    })

    it('should return 200 on get', function (done) {
      server
        .get('/api/device-network-type-links/' + testData.deviceNTL.id)
        .set('Authorization', 'Bearer ' + adminToken)
        .set('Content-Type', 'application/json')
        .send()
        .end(function (err, res) {
          res.should.have.status(200)
          var dnlObj = JSON.parse(res.text)
          assertEqualProps(
            ['deviceId', 'networkTypeId', 'deviceProfileId'],
            dnlObj,
            testData.deviceNTL
          )
          done()
        })
    })
  })
  describe('Verify ChirpStack V1 has application', function () {
    it('Verify the ChirpStack V1 Application Exists', async () => {
      const { result } = await Chirpstack1.client.listApplications(Chirpstack1.network, { limit: 100 })
      const app = result.find(x => x.name === testData.app.name)
      should.exist(app)
      remoteApp1 = app.id
    })
    it('Verify the ChirpStack V1 Application Exists', async () => {
      const app = await Chirpstack1.client.loadApplication(Chirpstack1.network, remoteApp1)
      app.should.have.property('id')
      app.should.have.property('name')
      app.should.have.property('description')
      app.should.have.property('organizationID')
      app.should.have.property('serviceProfileID')
      app.should.have.property('payloadCodec')
      app.should.have.property('payloadEncoderScript')
      app.should.have.property('payloadDecoderScript')
      app.name.should.equal(testData.app.name)
    })
    it('Verify the ChirpStack V1 Device Profile Exists', async () => {
      const { result } = await Chirpstack1.client.listDeviceProfiles(Chirpstack1.network, { limit: 100 })
      const dp = result.find(x => x.name === testData.deviceProfile.name)
      should.exist(dp)
      remoteDeviceProfileId = dp.id
    })
    it('Verify the ChirpStack V1 Device Profile Exists', async () => {
      const dp = await Chirpstack1.client.loadDeviceProfile(Chirpstack1.network, remoteDeviceProfileId)
      dp.should.have.property('name')
      dp.name.should.equal(testData.deviceProfile.name)
      dp.should.have.property('organizationID')
      dp.should.have.property('networkServerID')
      dp.should.have.property('createdAt')
      dp.should.have.property('updatedAt')
      dp.should.have.property('macVersion')
      dp.should.have.property('regParamsRevision')
      dp.macVersion.should.equal(testData.deviceProfile.networkSettings.macVersion)
      dp.regParamsRevision.should.equal(testData.deviceProfile.networkSettings.regParamsRevision)
    })
    it('Verify the ChirpStack V1 Device Exists', async () => {
      const device = await Chirpstack1.client.loadDevice(Chirpstack1.network, testData.deviceNTL.networkSettings.devEUI)
      device.should.have.property('name')
      device.should.have.property('devEUI')
      device.should.have.property('applicationID')
      device.should.have.property('description')
      device.should.have.property('deviceProfileID')
      device.should.have.property('deviceStatusBattery')
      device.should.have.property('deviceStatusMargin')
      device.should.have.property('lastSeenAt')
      device.should.have.property('skipFCntCheck')
      device.name.should.equal(testData.device.name)
      device.devEUI.should.equal(testData.deviceNTL.networkSettings.devEUI)
      device.deviceProfileID.should.equal(remoteDeviceProfileId)
    })
  })
  describe('Verify ChirpStack V2 has application', function () {
    it('Verify the ChirpStack V2 Application Exists', async () => {
      const { result } = await Chirpstack2.client.listApplications(Chirpstack2.network, { limit: 100 })
      const app = result.find(x => x.name === testData.app.name)
      should.exist(app)
      remoteApp2 = app.id
    })
    it('Verify the ChirpStack V2 Application Exists', async () => {
      const app = await Chirpstack2.client.loadApplication(Chirpstack2.network, remoteApp2)
      app.should.have.property('id')
      app.should.have.property('name')
      app.should.have.property('description')
      app.should.have.property('organizationID')
      app.should.have.property('serviceProfileID')
      app.should.have.property('payloadCodec')
      app.should.have.property('payloadEncoderScript')
      app.should.have.property('payloadDecoderScript')
      app.name.should.equal(testData.app.name)
    })
    it('Verify the ChirpStack V2 Device Profile Exists', async () => {
      const { result } = await Chirpstack2.client.listDeviceProfiles(Chirpstack2.network, { limit: 100 })
      const dp = result.find(x => x.name === testData.deviceProfile.name)
      should.exist(dp)
      remoteDeviceProfileId2 = dp.id
    })
    it('Verify the ChirpStack V2 Device Profile Exists', async () => {
      const dp = await Chirpstack2.client.loadDeviceProfile(Chirpstack2.network, remoteDeviceProfileId2)
      dp.should.have.property('name')
      dp.name.should.equal(testData.deviceProfile.name)
      dp.should.have.property('organizationID')
      dp.should.have.property('networkServerID')
      dp.should.have.property('macVersion')
      dp.should.have.property('regParamsRevision')
      dp.macVersion.should.equal(testData.deviceProfile.networkSettings.macVersion)
      dp.regParamsRevision.should.equal(testData.deviceProfile.networkSettings.regParamsRevision)
    })
    it('Verify the ChirpStack V2 Device Exists', async () => {
      const device = await Chirpstack2.client.loadDevice(Chirpstack2.network, testData.deviceNTL.networkSettings.devEUI)
      device.should.have.property('name')
      device.should.have.property('devEUI')
      device.should.have.property('applicationID')
      device.should.have.property('description')
      device.should.have.property('deviceProfileID')
      device.should.have.property('skipFCntCheck')
      device.should.have.property('deviceStatusBattery')
      device.should.have.property('deviceStatusMargin')
      device.should.have.property('lastSeenAt')
      device.name.should.equal(testData.device.name)
      device.devEUI.should.equal(testData.deviceNTL.networkSettings.devEUI)
      device.deviceProfileID.should.equal(remoteDeviceProfileId2)
    })
  })
  describeLoriot('Verify Loriot has application', function () {
    it('Verify the Loriot Application Exists', async () => {
      const { result } = await Loriot.client.listApplications(Loriot.network, { limit: 100 })
      const app = result.find(x => x.name === testData.app.name)
      should.exist(app)
      remoteAppLoriot = app.id
    })
    it('Verify the Loriot Application Exists', async () => {
      const app = await Loriot.client.loadApplication(Loriot.network, remoteAppLoriot)
      app.should.have.property('_id')
      app.should.have.property('name')
      app.name.should.equal(testData.app.name)
    })
    it('Verify the ChirpStack V2 Device Exists', async () => {
      const device = await Loriot.client.loadDevice(Loriot.network, testData.deviceNTL.networkSettings.devEUI)
      device.should.have.property('title')
      device.should.have.property('deveui')
      device.should.have.property('description')
      device.title.should.equal(testData.device.name)
      device.deveui.should.equal(testData.deviceNTL.networkSettings.devEUI)
    })
  })
  describe('Remove Device from Application', () => {
    it('Delete Device NTL', function (done) {
      server
        .delete(`/api/device-network-type-links/${testData.deviceNTL.id}`)
        .set('Authorization', 'Bearer ' + adminToken)
        .send()
        .end(function (err, res) {
          res.should.have.status(204)
          done()
        })
    })
    it('should return 404 on get', function (done) {
      server
        .get(`/api/device-network-type-links/${testData.deviceNTL.id}`)
        .set('Authorization', 'Bearer ' + adminToken)
        .send()
        .end(function (err, res) {
          res.should.have.status(404)
          done()
        })
    })
    it('Delete Device', function (done) {
      server
        .delete(`/api/devices/${testData.device.id}`)
        .set('Authorization', 'Bearer ' + adminToken)
        .send()
        .end(function (err, res) {
          res.should.have.status(204)
          done()
        })
    })
    it('should return 404 on get', function (done) {
      server
        .get(`/api/devices/${testData.device.id}`)
        .set('Authorization', 'Bearer ' + adminToken)
        .send()
        .end(function (err, res) {
          res.should.have.status(404)
          done()
        })
    })
    it('Delete Device Profile', function (done) {
      server
        .delete('/api/device-profiles/' + testData.deviceProfile.id)
        .set('Authorization', 'Bearer ' + adminToken)
        .send()
        .end(function (err, res) {
          res.should.have.status(204)
          done()
        })
    })
    it('should return 404 on get', function (done) {
      server
        .get('/api/device-profiles/' + testData.deviceProfile.id)
        .set('Authorization', 'Bearer ' + adminToken)
        .send()
        .end(function (err, res) {
          res.should.have.status(404)
          done()
        })
    })
  })
  describe('Verify Device Removed from ChirpStack Networks', () => {
    it('Verify the ChirpStack V1 Device Does Not Exist', async () => {
      try {
        await Chirpstack1.client.loadDevice(Chirpstack1.network, testData.deviceNTL.networkSettings.devEUI)
      }
      catch (err) {
        err.statusCode.should.equal(404)
      }
    })
    it('Verify the ChirpStack V1 Device Profile Does Not Exist', async () => {
      try {
        await Chirpstack1.client.loadDeviceProfile(Chirpstack1.network, remoteDeviceProfileId)
      }
      catch (err) {
        err.statusCode.should.equal(404)
      }
    })
    it('Verify the ChirpStack V2 Device Does Not Exist', async () => {
      try {
        await Chirpstack2.client.loadDevice(Chirpstack2.network, testData.deviceNTL.networkSettings.devEUI)
      }
      catch (err) {
        err.statusCode.should.equal(404)
      }
    })
    it('Verify the ChirpStack V2 Device Profile Does Not Exist', async () => {
      try {
        await Chirpstack2.client.loadDeviceProfile(Chirpstack2.network, remoteDeviceProfileId2)
      }
      catch (err) {
        err.statusCode.should.equal(404)
      }
    })
  })
  describeLoriot('Verify Device Removed from Loriot', () => {
    it('Verify the Loriot Device Does Not Exist', async () => {
      try {
        await Loriot.client.loadDevice(Loriot.network, testData.deviceNTL.networkSettings.devEUI)
      }
      catch (err) {
        err.statusCode.should.equal(404)
      }
    })
  })
  describe('Delete Application', () => {
    it('Delete Network Type Links for Application', function (done) {
      server
        .delete('/api/application-network-type-links/' + testData.appNTL.id)
        .set('Authorization', 'Bearer ' + adminToken)
        .send()
        .end(function (err, res) {
          res.should.have.status(204)
          done()
        })
    })
    it('should return 404 on get', function (done) {
      server
        .get('/api/application-network-type-links/' + testData.appNTL.id)
        .set('Authorization', 'Bearer ' + adminToken)
        .send()
        .end(function (err, res) {
          res.should.have.status(404)
          done()
        })
    })
    it('should return 204 on delete', function (done) {
      server
        .delete('/api/applications/' + testData.app.id)
        .set('Authorization', 'Bearer ' + adminToken)
        .send()
        .end(function (err, res) {
          res.should.have.status(204)
          done()
        })
    })
    it('should return 404 on get', function (done) {
      server
        .get('/api/applications/' + testData.app.id)
        .set('Authorization', 'Bearer ' + adminToken)
        .send()
        .end(function (err, res) {
          res.should.have.status(404)
          done()
        })
    })
  })
  describe('Verify Application Removed from ChirpStack Networks', () => {
    it('Verify the ChirpStack V1 Application Does Not Exist', async () => {
      try {
        await Chirpstack1.client.loadApplication(Chirpstack1.network, remoteApp1)
      }
      catch (err) {
        err.statusCode.should.equal(404)
      }
    })
    it('Verify the ChirpStack V2 Application Does Not Exist', async () => {
      try {
        await Chirpstack2.client.loadApplication(Chirpstack2.network, remoteApp2)
      }
      catch (err) {
        err.statusCode.should.equal(404)
      }
    })
  })
  describeLoriot('Verify Application Removed from Loriot', () => {
    it('Verify the Loriot Application Does Not Exist', async () => {
      try {
        await Loriot.client.loadApplication(Loriot.network, remoteAppLoriot)
      }
      catch (err) {
        err.statusCode.should.equal(404)
      }
    })
  })
})