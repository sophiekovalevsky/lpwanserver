var { logger } = require('../log')
var restServer
var modelAPI

exports.initialize = function (app, server) {
  restServer = server
  modelAPI = server.modelAPI

  /*********************************************************************
     * ReportingProtocols API.
     ********************************************************************
    /**
     * Gets the reportingProtocols available
     *
     * @api {get} /api/reportingProtocols Get Reporting Protocols
     * @apiGroup Reporting Protocols
     * @apiDescription Returns an array of the Reporting Protocols that
     *      match the options.
     * @apiPermission All logged-in users.
     * @apiHeader {String} Authorization The Create Session's returned token
     *      prepended with "Bearer "
     * @apiSuccess {Object[]} object An array of Reporting Protocol
     *      records.
     * @apiSuccess {String} object.id The Reporting Protocol's Id
     * @apiSuccess {String} object.name The name of the Reporting Protocol
     * @apiSuccess {String} object.protocolHandler The Reporting
     *      Protocol code that communicates with an Application vendor's server.
     * @apiVersion 1.2.1
     */
  app.get('/api/reportingProtocols', [restServer.isLoggedIn], function (req, res) {
    modelAPI.reportingProtocols.list({}, { includeTotal: true }).then(function ([ records, totalCount ]) {
      restServer.respondJson(res, null, { records, totalCount })
    })
      .catch(function (err) {
        logger.error('Error getting reportingProtocols: ', err)
        restServer.respond(res, err)
      })
  })

  /**
     * @apiDescription Gets the Reporting Protocol record with the specified id.
     *
     * @api {get} /api/reportingProtocols/:id Get Reporting Protocol
     * @apiGroup Reporting Protocols
     * @apiPermission Any logged-in user.
     * @apiHeader {String} Authorization The Create Session's returned token
     *      prepended with "Bearer "
     * @apiParam (URL Parameters) {String} id The Reporting Protocol's id
     * @apiSuccess {Object} object
     * @apiSuccess {String} object.id The Reporting Protocol's Id
     * @apiSuccess {String} object.name The name of the Reporting Protocol
     * @apiSuccess {String} object.protocolHandler The Reporting Protocol
     *      code that communicates with an Application vendor's server.
     * @apiVersion 1.2.1
     */
  app.get('/api/reportingProtocols/:id', [restServer.isLoggedIn], function (req, res) {
    modelAPI.reportingProtocols.load(req.params.id).then(function (rp) {
      restServer.respondJson(res, null, rp)
    })
      .catch(function (err) {
        logger.error('Error getting reportingProtocol ' + req.params.id + ': ', err)
        restServer.respond(res, err)
      })
  })

  /**
     * @apiDescription Creates a new Reporting Protocols record.
     *
     * @api {post} /api/reportingProtocols Create Reporting Protocol
     * @apiGroup Reporting Protocols
     * @apiPermission System Admin
     * @apiHeader {String} Authorization The Create Session's returned token
     *      prepended with "Bearer "
     * @apiParam (Request Body) {String} name The Reporting Protocol's name
     * @apiParam (Request Body) {String} protocolHandler The Reporting Protocol
     *      code that communicates with an Application vendor's server.
     * @apiExample {json} Example body:
     *      {
     *          "name": "POST",
     *          "protocolHandler": "Post.js"
     *      }
     * @apiSuccess {String} id The new Network Protocol's id.
     * @apiVersion 1.2.1
     */
  app.post('/api/reportingProtocols', [restServer.isLoggedIn,
    restServer.fetchCompany,
    restServer.isAdminCompany],
  function (req, res) {
    var rec = req.body
    // You can't specify an id.
    if (rec.id) {
      restServer.respond(res, 400, "Cannot specify the networkProtocol's id in create")
      return
    }

    // Verify that required fields exist.
    if (!rec.name || !rec.protocolHandler) {
      restServer.respond(res, 400, 'Missing required data')
      return
    }

    // Do the add.
    modelAPI.reportingProtocols.create(
      rec.name,
      rec.protocolHandler).then(function (rec) {
      var send = {}
      send.id = rec.id
      restServer.respondJson(res, 200, send)
    })
      .catch(function (err) {
        restServer.respond(res, err)
      })
  })

  /**
     * @apiDescription Updates the Reporting Protocol record with the specified
     *      id.
     *
     * @api {put} /api/reportingProtocols/:id Update Reporting Protocol
     * @apiGroup Reporting Protocols
     * @apiPermission System Admin
     * @apiHeader {String} Authorization The Create Session's returned token
     *      prepended with "Bearer "
     * @apiParam (URL Parameters) {String} id The Reporting Protocol's id
     * @apiParam (Request Body) {String} [name] The Reporting Protocol's name
     * @apiParam (Request Body) {String} [protocolHandler] The Reporting
     *      Protocol code that communicates with an Application vendor's server.
     * @apiExample {json} Example body:
     *      {
     *          "name": "POST",
     *          "protocolHandler": "Post.js"
     *      }
     * @apiVersion 1.2.1
     */
  app.put('/api/reportingProtocols/:id', [restServer.isLoggedIn,
    restServer.fetchCompany,
    restServer.isAdminCompany],
  function (req, res) {
    var data = { id: req.params.id }
    // We'll start by getting the company, as a read is much less expensive than
    // a write, and then we'll be able to tell if anything really changed before
    // we even try to write.
    modelAPI.reportingProtocols.load(data.id).then(function (rp) {
      // Fields that may exist in the request body that can change.  Make
      // sure they actually differ, though.
      var changed = 0
      if ((req.body.name) &&
                 (req.body.name !== rp.name)) {
        data.name = req.body.name
        ++changed
      }
      if (req.body.protocolHandler) {
        if (req.body.protocolHandler !== rp.protocolHandler) {
          data.protocolHandler = req.body.protocolHandler
          ++changed
        }
      }

      // Ready.  DO we have anything to actually change?
      if (changed === 0) {
        // No changes.  But returning 304 apparently causes Apache to strip
        // CORS info, causing the browser to throw a fit.  So just say,
        // "Yeah, we did that.  Really.  Trust us."
        restServer.respond(res, 204)
      }
      else {
        // Do the update.
        modelAPI.reportingProtocols.update(data).then(function () {
          restServer.respond(res, 204)
        })
          .catch(function (err) {
            restServer.respond(res, err)
          })
      }
    })
      .catch(function (err) {
        logger.error('Error getting reportingProtocol ' + data.id + ': ', err)
        restServer.respond(res, err)
      })
  })

  /**
     * @apiDescription Deletes the Reporting Protocol record with the specified
     *      id.
     *
     * @api {delete} /api/reportingProtocols/:id Delete Reporting Protocol
     * @apiGroup Reporting Protocols
     * @apiPermission System Admin
     * @apiHeader {String} Authorization The Create Session's returned token
     *      prepended with "Bearer "
     * @apiParam (URL Parameters) {String} id The Reporting Protocol's id
     * @apiVersion 1.2.1
     */
  app.delete('/api/reportingProtocols/:id', [restServer.isLoggedIn,
    restServer.fetchCompany,
    restServer.isAdminCompany],
  function (req, res) {
    let { id } = req.params
    modelAPI.reportingProtocols.remove(id).then(function () {
      restServer.respond(res, 204)
    })
      .catch(function (err) {
        logger.error('Error deleting reportingProtocol ' + id + ': ', err)
        restServer.respond(res, err)
      })
  })

  /**
   * @apiDescription Gets the Reporting Protocol Handlers available.
   *
   * @api {get} /api/reportingProtocolHandlers/ Get Reporting Handlers
   * @apiGroup Reporting Protocols
   * @apiPermission Any logged-in user.
   * @apiHeader {String} Authorization The Create Session's returned token
   *      prepended with "Bearer "
   * @apiSuccess {Array} array of protocol handlers available.
   * @apiVersion 1.2.1
   */
  app.get('/api/reportingProtocolHandlers/', [restServer.isLoggedIn],
    async function (req, res) {
      const [ records ] = await modelAPI.reportingProtocols.list()
      const handlerList = records
        .map(x => x.protocolHandler)
        .map(x => ({ id: x, name: x }))
      restServer.respondJson(res, null, handlerList)
    })
}
