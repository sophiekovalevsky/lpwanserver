define({ "api": [
  {
    "description": "<p>Deletes the applicationNetworkTypeLinks record with the specified id.  Also deletes the Application on the remote Networks of the Network Type.</p>",
    "type": "delete",
    "url": "/api/applicationNetworkTypeLinks/:id",
    "title": "Delete Application Network Type Link",
    "group": "Application_Network_Type_Links",
    "permission": [
      {
        "name": "System Admin or the Company Admin for the company that the\n     Application belongs to."
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>The Create Session's returned token prepended with &quot;Bearer &quot;</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "URL Parameters": [
          {
            "group": "URL Parameters",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>The Application Network Type Link's id</p>"
          }
        ]
      }
    },
    "version": "1.2.1",
    "filename": "../lpwanserver/rest/restApplicationNetworkTypeLinks.js",
    "groupTitle": "Application_Network_Type_Links",
    "name": "DeleteApiApplicationnetworktypelinksId"
  },
  {
    "type": "get",
    "url": "/api/applicationNetworkTypeLinks",
    "title": "Get Application Network Type Links",
    "group": "Application_Network_Type_Links",
    "description": "<p>Returns an array of the Application Network Type Links that match the options.</p>",
    "permission": [
      {
        "name": "All, but only System Admins can see entries from other\n     companies."
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>The Create Session's returned token prepended with &quot;Bearer &quot;</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Query Parameters": [
          {
            "group": "Query Parameters",
            "type": "Number",
            "optional": true,
            "field": "limit",
            "description": "<p>The maximum number of records to return.  Use with offset to manage paging.  0 is the same as unspecified, returning all users that match other query parameters.</p>"
          },
          {
            "group": "Query Parameters",
            "type": "Number",
            "optional": true,
            "field": "offset",
            "description": "<p>The offset into the returned database query set.  Use with limit to manage paging.  0 is the same as unspecified, returning the list from the beginning.</p>"
          },
          {
            "group": "Query Parameters",
            "type": "String",
            "optional": true,
            "field": "companyId",
            "description": "<p>Limit the records to those whose application are part of the Company.</p>"
          },
          {
            "group": "Query Parameters",
            "type": "String",
            "optional": true,
            "field": "applicationId",
            "description": "<p>Limit the records to those that have the applicationId specified.</p>"
          },
          {
            "group": "Query Parameters",
            "type": "String",
            "optional": true,
            "field": "networkTypeId",
            "description": "<p>Limit the records to those that have the networkTypeId specified.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "object",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "object.totalCount",
            "description": "<p>The total number of records that would have been returned if offset and limit were not specified. This allows for calculation of number of &quot;pages&quot; of data.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "object.records",
            "description": "<p>An array of Application Network Type Links records.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "object.records.id",
            "description": "<p>The Application Network Type Link's Id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "object.records.applicationId",
            "description": "<p>The Application the record is linking to the Network Type.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "object.records.networkTypeId",
            "description": "<p>The Network Type that the Application is being linked to.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "object.records.networkSettings",
            "description": "<p>The settings in a JSON string that correspond to the Network Type.</p>"
          }
        ]
      }
    },
    "version": "1.2.1",
    "filename": "../lpwanserver/rest/restApplicationNetworkTypeLinks.js",
    "groupTitle": "Application_Network_Type_Links",
    "name": "GetApiApplicationnetworktypelinks"
  },
  {
    "description": "<p>Gets the applicationNetworkTypeLink record with the specified id.</p>",
    "type": "get",
    "url": "/api/applicationNetworkTypeLinks/:id",
    "title": "Get Application Network Type Link",
    "group": "Application_Network_Type_Links",
    "permission": [
      {
        "name": "Any, but only System Admin can retrieve a Application\n     Network Type Link other than one belonging to their own Company."
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>The Create Session's returned token prepended with &quot;Bearer &quot;</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "URL Parameters": [
          {
            "group": "URL Parameters",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>The Application Network Type Link's id</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "object",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "object.id",
            "description": "<p>The Application Network Type Link's Id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "object.applicationId",
            "description": "<p>The Application the record is linking to the Network Type.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "object.networkTypeId",
            "description": "<p>The Network Type that the Application is being linked to.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "object.networkSettings",
            "description": "<p>The settings in a JSON string that correspond to the Network Type.</p>"
          }
        ]
      }
    },
    "version": "1.2.1",
    "filename": "../lpwanserver/rest/restApplicationNetworkTypeLinks.js",
    "groupTitle": "Application_Network_Type_Links",
    "name": "GetApiApplicationnetworktypelinksId"
  },
  {
    "description": "<p>Creates a new applicationNetworkTypeLink record.  Also creates the Application on the remote Networks of the Network Type.</p>",
    "type": "post",
    "url": "/api/applicationNetworktypeLinks",
    "title": "Create Application Network Type Link",
    "group": "Application_Network_Type_Links",
    "permission": [
      {
        "name": "System Admin, or the Company Admin that the Application\n     belongs to."
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>The Create Session's returned token prepended with &quot;Bearer &quot;</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Request Body": [
          {
            "group": "Request Body",
            "type": "String",
            "optional": false,
            "field": "applicationId",
            "description": "<p>The Application the record is linking to the Network Type.</p>"
          },
          {
            "group": "Request Body",
            "type": "String",
            "optional": false,
            "field": "networkTypeId",
            "description": "<p>The Network Type that the Application is being linked to.</p>"
          },
          {
            "group": "Request Body",
            "type": "Object",
            "optional": false,
            "field": "networkSettings",
            "description": "<p>The settings in a JSON string that correspond to the Network Type.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example body:",
        "content": "{\n    \"applicationId\": 1,\n    \"networkTypeId\": 4,\n    \"networkSettings\": { ... },\n}",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>The new Application Network Type Link's id.</p>"
          }
        ]
      }
    },
    "version": "1.2.1",
    "filename": "../lpwanserver/rest/restApplicationNetworkTypeLinks.js",
    "groupTitle": "Application_Network_Type_Links",
    "name": "PostApiApplicationnetworktypelinks"
  },
  {
    "description": "<p>Updates the applicationNetworkTypeLink record with the specified id.  Also pushes changes to the remote Networks of the Network Type.</p>",
    "type": "put",
    "url": "/api/applicationNetworkTypeLinks/:id",
    "title": "Update Application Network Type Link",
    "group": "Application_Network_Type_Links",
    "permission": [
      {
        "name": "System Admin or a Company Admin for a Company the\n     Application belongs to."
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>The Create Session's returned token prepended with &quot;Bearer &quot;</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "URL Parameters": [
          {
            "group": "URL Parameters",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>The Application Network Type Link's id</p>"
          }
        ],
        "Request Body": [
          {
            "group": "Request Body",
            "type": "Object",
            "optional": true,
            "field": "networkSettings",
            "description": "<p>The settings in a JSON string that correspond to the Network Type.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example body:",
        "content": "{\n    \"networkSettings\": { ... },\n}",
        "type": "json"
      }
    ],
    "version": "1.2.1",
    "filename": "../lpwanserver/rest/restApplicationNetworkTypeLinks.js",
    "groupTitle": "Application_Network_Type_Links",
    "name": "PutApiApplicationnetworktypelinksId"
  },
  {
    "description": "<p>Deletes the application record with the specified id.</p>",
    "type": "delete",
    "url": "/api/applications/:id",
    "title": "Delete Application",
    "group": "Applications",
    "permission": [
      {
        "name": "System Admin, or Company Admin for this company."
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>The Create Session's returned token prepended with &quot;Bearer &quot;</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "URL Parameters": [
          {
            "group": "URL Parameters",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>The Application's id</p>"
          }
        ]
      }
    },
    "version": "1.2.1",
    "filename": "../lpwanserver/rest/restApplications.js",
    "groupTitle": "Applications",
    "name": "DeleteApiApplicationsId"
  },
  {
    "type": "get",
    "url": "/api/applications",
    "title": "Get Applications",
    "group": "Applications",
    "description": "<p>Returns an array of the Applications that match the options.</p>",
    "permission": [
      {
        "name": "System Admin accesses all Applications, others access\n      only their own Company's Applications."
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>The Create Session's returned token prepended with &quot;Bearer &quot;</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Query Parameters": [
          {
            "group": "Query Parameters",
            "type": "Number",
            "optional": true,
            "field": "limit",
            "description": "<p>The maximum number of records to return.  Use with offset to manage paging.  0 is the same as unspecified, returning all users that match other query parameters.</p>"
          },
          {
            "group": "Query Parameters",
            "type": "Number",
            "optional": true,
            "field": "offset",
            "description": "<p>The offset into the returned database query set.  Use with limit to manage paging.  0 is the same as unspecified, returning the list from the beginning.</p>"
          },
          {
            "group": "Query Parameters",
            "type": "String",
            "optional": true,
            "field": "search",
            "description": "<p>Search the Applications based on name matches to the passed string.  In the string, use &quot;%&quot; to match 0 or more characters and &quot;_&quot; to match exactly one.  For example, to match names starting with &quot;D&quot;, use the string &quot;D%&quot;.</p>"
          },
          {
            "group": "Query Parameters",
            "type": "String",
            "optional": true,
            "field": "companyId",
            "description": "<p>Limit the Applications to those belonging to the Company.</p>"
          },
          {
            "group": "Query Parameters",
            "type": "String",
            "optional": true,
            "field": "reportingProtocolId",
            "description": "<p>Limit the Applications to those that use the Reporting Protocol.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "object",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "object.totalCount",
            "description": "<p>The total number of records that would have been returned if offset and limit were not specified. This allows for calculation of number of &quot;pages&quot; of data.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "object.records",
            "description": "<p>An array of Application records.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "object.records.id",
            "description": "<p>The Application's Id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "object.records.name",
            "description": "<p>The Application's name</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "object.records.description",
            "description": "<p>The Application's description</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "object.records.companyId",
            "description": "<p>The Id of the Company that the Application belongs to.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "object.records.baseUrl",
            "description": "<p>The base URL used by the Reporting Protocol</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "object.records.reportingProtocolId",
            "description": "<p>The Id of the Reporting Protocol used by the Application.</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "object.records.running",
            "description": "<p>If the Application is currently sending data received from the Networks to the baseUrl via the Reporting Protocol.</p>"
          }
        ]
      }
    },
    "version": "1.2.1",
    "filename": "../lpwanserver/rest/restApplications.js",
    "groupTitle": "Applications",
    "name": "GetApiApplications"
  },
  {
    "description": "<p>Gets the Application record with the specified id.</p>",
    "type": "get",
    "url": "/api/applications/:id",
    "title": "Get Application",
    "group": "Applications",
    "permission": [
      {
        "name": "Any, but only System Admin can retrieve an Application\n     that is not owned by their Company."
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>The Create Session's returned token prepended with &quot;Bearer &quot;</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "URL Parameters": [
          {
            "group": "URL Parameters",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>The Application's id</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "object",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "object.id",
            "description": "<p>The Application's Id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "object.name",
            "description": "<p>The Application's name</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "object.description",
            "description": "<p>The Application's description</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "object.companyId",
            "description": "<p>The Id of the Company that the Application belongs to.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "object.baseUrl",
            "description": "<p>The base URL used by the Reporting Protocol</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "object.reportingProtocolId",
            "description": "<p>The Id of the Reporting Protocol used by the Application.</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "object.running",
            "description": "<p>If the Application is currently sending data received from the Networks to the baseUrl via the Reporting Protocol.</p>"
          }
        ]
      }
    },
    "version": "1.2.1",
    "filename": "../lpwanserver/rest/restApplications.js",
    "groupTitle": "Applications",
    "name": "GetApiApplicationsId"
  },
  {
    "description": "<p>Creates a new application record.</p>",
    "type": "post",
    "url": "/api/applications",
    "title": "Create Application",
    "group": "Applications",
    "permission": [
      {
        "name": "System Admin or Company Admin"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>The Create Session's returned token prepended with &quot;Bearer &quot;</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Request Body": [
          {
            "group": "Request Body",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>The Application's name</p>"
          },
          {
            "group": "Request Body",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>The Application's description</p>"
          },
          {
            "group": "Request Body",
            "type": "String",
            "optional": false,
            "field": "companyId",
            "description": "<p>The Id of the Company that the Application blongs to.  For a Company Admin user, this can only be the Id of their own Company.</p>"
          },
          {
            "group": "Request Body",
            "type": "String",
            "optional": false,
            "field": "baseURL",
            "description": "<p>The URL that the Reporting Protocol sends the data to.  This may have additional paths added, depending on the Reporting Protocol.</p>"
          },
          {
            "group": "Request Body",
            "type": "String",
            "optional": false,
            "field": "reportingProtocolId",
            "description": "<p>The Id of the Reporting Protocol the Application will use to pass Device data back to the Application Vendor.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example body:",
        "content": "{\n    \"name\": \"GPS Pet Tracker\",\n    \"description\": \"Pet finder with occasional reporting\",\n    \"companyId\": J59j3Ddteoi8,\n    \"baseUrl\": \"https://IoTStuff.com/incomingData/GPSPetTracker\"\n    \"reportingProtocolId\": 6s3oi3j90ed9j\n}",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>The new Application's id.</p>"
          }
        ]
      }
    },
    "version": "1.2.1",
    "filename": "../lpwanserver/rest/restApplications.js",
    "groupTitle": "Applications",
    "name": "PostApiApplications"
  },
  {
    "description": "<p>Upload a CSV file with devEUIs</p>",
    "type": "post",
    "url": "/api/applications/:id/bulk-device-import",
    "title": "Import Devices",
    "group": "Applications",
    "permission": [
      {
        "name": "System Admin, or Company Admin for this company."
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>The Create Session's returned token prepended with &quot;Bearer &quot;</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Request Body": [
          {
            "group": "Request Body",
            "type": "String",
            "optional": true,
            "field": "deviceProfileId",
            "description": "<p>The ID of the device profile for the devices being imported.</p>"
          },
          {
            "group": "Request Body",
            "type": "Object[]",
            "optional": true,
            "field": "devices",
            "description": "<p>List of device import data. devEUI required.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example body:",
        "content": "{\n    \"deviceProfileId\": \"gh4s56l0fewo0\"\n    \"devices\": [\n      {\n        \"name\": \"GPS Pet Tracker\",\n        \"description\": \"Pet finder with occasional reporting\",\n        \"devEUI\": 33:DD:99:FF:22:11:CC:BB\n      }\n    ]\n}",
        "type": "json"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n[\n  { status: 'OK', deviceId: 'deviceId', devEUI, row: 0 },\n  { status: 'ERROR', error: 'reason', devEUI, row: 1 }\n]",
          "type": "json"
        }
      ]
    },
    "version": "1.2.1",
    "filename": "../lpwanserver/rest/restApplications.js",
    "groupTitle": "Applications",
    "name": "PostApiApplicationsIdBulkDeviceImport"
  },
  {
    "description": "<p>Starts serving the data from the Networks to the Application server (baseUrl) using the Reporting Protocol for the Application.</p>",
    "type": "post",
    "url": "/api/applications/:id/start",
    "title": "Start Application",
    "group": "Applications",
    "permission": [
      {
        "name": "System Admin, or Company Admin for this company."
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>The Create Session's returned token prepended with &quot;Bearer &quot;</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "URL Parameters": [
          {
            "group": "URL Parameters",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>The Application's id</p>"
          }
        ]
      }
    },
    "version": "1.2.1",
    "filename": "../lpwanserver/rest/restApplications.js",
    "groupTitle": "Applications",
    "name": "PostApiApplicationsIdStart"
  },
  {
    "description": "<p>Stops serving the data from the Networks to the Application server (baseUrl).</p>",
    "type": "post",
    "url": "/api/applications/:id/stop",
    "title": "Stop Application",
    "group": "Applications",
    "permission": [
      {
        "name": "System Admin, or Company Admin for this company."
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>The Create Session's returned token prepended with &quot;Bearer &quot;</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "URL Parameters": [
          {
            "group": "URL Parameters",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>The Application's id</p>"
          }
        ]
      }
    },
    "version": "1.2.1",
    "filename": "../lpwanserver/rest/restApplications.js",
    "groupTitle": "Applications",
    "name": "PostApiApplicationsIdStop"
  },
  {
    "description": "<p>Handle an uplink from a device on a network</p>",
    "type": "post",
    "url": "/api/ingest/:applicationId/:networkId",
    "title": "Uplink Message",
    "group": "Applications",
    "permission": [
      {
        "name": "Not protected"
      }
    ],
    "parameter": {
      "fields": {
        "URL Parameters": [
          {
            "group": "URL Parameters",
            "type": "String",
            "optional": false,
            "field": "applicationId",
            "description": "<p>The Application's ID</p>"
          },
          {
            "group": "URL Parameters",
            "type": "String",
            "optional": false,
            "field": "networkId",
            "description": "<p>The Application's ID</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example body:",
        "content": "{\n    any: any\n}",
        "type": "json"
      }
    ],
    "version": "1.2.1",
    "filename": "../lpwanserver/rest/restApplications.js",
    "groupTitle": "Applications",
    "name": "PostApiIngestApplicationidNetworkid"
  },
  {
    "description": "<p>Updates the application record with the specified id.</p>",
    "type": "put",
    "url": "/api/applications/:id",
    "title": "Update Application",
    "group": "Applications",
    "permission": [
      {
        "name": "System Admin, or Company Admin for this Company."
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>The Create Session's returned token prepended with &quot;Bearer &quot;</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "URL Parameters": [
          {
            "group": "URL Parameters",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>The Application's id</p>"
          }
        ],
        "Request Body": [
          {
            "group": "Request Body",
            "type": "String",
            "optional": true,
            "field": "name",
            "description": "<p>The Application's name</p>"
          },
          {
            "group": "Request Body",
            "type": "String",
            "optional": true,
            "field": "description",
            "description": "<p>The Application's description</p>"
          },
          {
            "group": "Request Body",
            "type": "String",
            "optional": true,
            "field": "companyId",
            "description": "<p>The Id of the Company that the Application blongs to.  For a Company Admin user, this can only be the Id of their own Company.</p>"
          },
          {
            "group": "Request Body",
            "type": "String",
            "optional": true,
            "field": "baseURL",
            "description": "<p>The URL that the Reporting Protocol sends the data to.  This may have additional paths added, depending on the Reporting Protocol.</p>"
          },
          {
            "group": "Request Body",
            "type": "String",
            "optional": true,
            "field": "reportingProtocolId",
            "description": "<p>The Id of the Reporting Protocol the Application will use to pass Device data back to the Application Vendor.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example body:",
        "content": "{\n    \"name\": \"GPS Pet Tracker\",\n    \"description\": \"Pet finder with occasional reporting\"\n    \"companyId\": J59j3Ddteoi8,\n    \"baseUrl\": \"https://IoTStuff.com/incomingData/GPSPetTracker\"\n    \"reportingProtocolId\": 6s3oi3j90ed9j\n}",
        "type": "json"
      }
    ],
    "version": "1.2.1",
    "filename": "../lpwanserver/rest/restApplications.js",
    "groupTitle": "Applications",
    "name": "PutApiApplicationsId"
  },
  {
    "description": "<p>Deletes the company record with the specified id.</p>",
    "type": "delete",
    "url": "/api/companies/:id",
    "title": "Delete Company",
    "group": "Companies",
    "permission": [
      {
        "name": "System Admin"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>The Create Session's returned token prepended with &quot;Bearer &quot;</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "URL Parameters": [
          {
            "group": "URL Parameters",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>The Company's id</p>"
          }
        ]
      }
    },
    "version": "1.2.1",
    "filename": "../lpwanserver/rest/restCompanies.js",
    "groupTitle": "Companies",
    "name": "DeleteApiCompaniesId"
  },
  {
    "type": "get",
    "url": "/api/companies",
    "title": "Get Companies",
    "group": "Companies",
    "description": "<p>Returns an array of the Companies that match the options. Note that Company Admin users can only access their own Company.</p>",
    "permission": [
      {
        "name": "System Admin, or Company Admin (limits returned data to\n      user's own company)"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>The Create Session's returned token prepended with &quot;Bearer &quot;</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Query Parameters": [
          {
            "group": "Query Parameters",
            "type": "Number",
            "optional": true,
            "field": "limit",
            "description": "<p>The maximum number of records to return.  Use with offset to manage paging.  0 is the same as unspecified, returning all users that match other query parameters.</p>"
          },
          {
            "group": "Query Parameters",
            "type": "Number",
            "optional": true,
            "field": "offset",
            "description": "<p>The offset into the returned database query set.  Use with limit to manage paging.  0 is the same as unspecified, returning the list from the beginning.</p>"
          },
          {
            "group": "Query Parameters",
            "type": "String",
            "optional": true,
            "field": "search",
            "description": "<p>Search the Companies based on name matches to the passed string.  In the string, use &quot;%&quot; to match 0 or more characters and &quot;_&quot; to match exactly one.  For example, to match names starting with &quot;D&quot;, use the string &quot;D%&quot;.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "object",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "object.totalCount",
            "description": "<p>The total number of records that would have been returned if offset and limit were not specified. This allows for calculation of number of &quot;pages&quot; of data.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "object.records",
            "description": "<p>An array of Company records.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "object.records.id",
            "description": "<p>The Company's Id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "object.records.name",
            "description": "<p>The Company's name</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "object.records.type",
            "description": "<p>&quot;admin&quot; or &quot;vendor&quot;</p>"
          }
        ]
      }
    },
    "version": "1.2.1",
    "filename": "../lpwanserver/rest/restCompanies.js",
    "groupTitle": "Companies",
    "name": "GetApiCompanies"
  },
  {
    "description": "<p>Gets the company record with the specified id.</p>",
    "type": "get",
    "url": "/api/companies/:id",
    "title": "Get Company",
    "group": "Companies",
    "permission": [
      {
        "name": "Any, but only System Admin can retrieve a Company other\n     than their own."
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>The Create Session's returned token prepended with &quot;Bearer &quot;</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "URL Parameters": [
          {
            "group": "URL Parameters",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>The Company's id</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "object",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "object.id",
            "description": "<p>The Company's Id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "object.name",
            "description": "<p>The Company's name</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "object.type",
            "description": "<p>&quot;admin&quot; or &quot;vendor&quot;</p>"
          }
        ]
      }
    },
    "version": "1.2.1",
    "filename": "../lpwanserver/rest/restCompanies.js",
    "groupTitle": "Companies",
    "name": "GetApiCompaniesId"
  },
  {
    "description": "<p>Creates a new company record.</p>",
    "type": "post",
    "url": "/api/companies",
    "title": "Create Company",
    "group": "Companies",
    "permission": [
      {
        "name": "System Admin"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>The Create Session's returned token prepended with &quot;Bearer &quot;</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Request Body": [
          {
            "group": "Request Body",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>The Company's name</p>"
          },
          {
            "group": "Request Body",
            "type": "String",
            "allowedValues": [
              "\"Admin\"",
              "\"Vendor\""
            ],
            "optional": false,
            "field": "type",
            "description": "<p>The Company's type</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example body:",
        "content": "{\n    \"name\": \"IoT Stuff, Inc.\",\n    \"type\": \"vendor\"\n}",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>The new Company's id.</p>"
          }
        ]
      }
    },
    "version": "1.2.1",
    "filename": "../lpwanserver/rest/restCompanies.js",
    "groupTitle": "Companies",
    "name": "PostApiCompanies"
  },
  {
    "description": "<p>Updates the company record with the specified id.</p>",
    "type": "put",
    "url": "/api/companies/:id",
    "title": "Update Company",
    "group": "Companies",
    "permission": [
      {
        "name": "System Admin, or Company Admin for this company."
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>The Create Session's returned token prepended with &quot;Bearer &quot;</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "URL Parameters": [
          {
            "group": "URL Parameters",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>The Company's id</p>"
          }
        ],
        "Request Body": [
          {
            "group": "Request Body",
            "type": "String",
            "optional": true,
            "field": "name",
            "description": "<p>The Company's name</p>"
          },
          {
            "group": "Request Body",
            "type": "String",
            "allowedValues": [
              "\"Admin\"",
              "\"Vendor\""
            ],
            "optional": true,
            "field": "type",
            "description": "<p>The Company's type</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example body:",
        "content": "{\n    \"name\": \"IoT Stuff, Inc.\",\n    \"type\": \"vendor\"\n}",
        "type": "json"
      }
    ],
    "version": "1.2.1",
    "filename": "../lpwanserver/rest/restCompanies.js",
    "groupTitle": "Companies",
    "name": "PutApiCompaniesId"
  },
  {
    "description": "<p>Deletes the companyNetworkTypeLinks record with the specified id.  Also deletes the Company on the remote Networks of the Network Type.</p>",
    "type": "delete",
    "url": "/api/companyNetworkTypeLinks/:id",
    "title": "Delete Company Network Type Link",
    "group": "Company_Network_Type_Links",
    "permission": [
      {
        "name": "System Admin"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>The Create Session's returned token prepended with &quot;Bearer &quot;</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "URL Parameters": [
          {
            "group": "URL Parameters",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>The Company Network Type Link's id</p>"
          }
        ]
      }
    },
    "version": "1.2.1",
    "filename": "../lpwanserver/rest/restCompanyNetworkTypeLinks.js",
    "groupTitle": "Company_Network_Type_Links",
    "name": "DeleteApiCompanynetworktypelinksId"
  },
  {
    "type": "get",
    "url": "/api/companyNetworkTypeLinks",
    "title": "Get Company Network Type Links",
    "group": "Company_Network_Type_Links",
    "description": "<p>Returns an array of the Company Network Type Links that match the options.</p>",
    "permission": [
      {
        "name": "All, but only System Admins can see entries from other\n     companies."
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>The Create Session's returned token prepended with &quot;Bearer &quot;</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Query Parameters": [
          {
            "group": "Query Parameters",
            "type": "Number",
            "optional": true,
            "field": "limit",
            "description": "<p>The maximum number of records to return.  Use with offset to manage paging.  0 is the same as unspecified, returning all users that match other query parameters.</p>"
          },
          {
            "group": "Query Parameters",
            "type": "Number",
            "optional": true,
            "field": "offset",
            "description": "<p>The offset into the returned database query set.  Use with limit to manage paging.  0 is the same as unspecified, returning the list from the beginning.</p>"
          },
          {
            "group": "Query Parameters",
            "type": "String",
            "optional": true,
            "field": "companyId",
            "description": "<p>Limit the records to those that have the companyId specified.</p>"
          },
          {
            "group": "Query Parameters",
            "type": "String",
            "optional": true,
            "field": "networkTypeId",
            "description": "<p>Limit the records to those that have the networkTypeId specified.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "object",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "object.totalCount",
            "description": "<p>The total number of records that would have been returned if offset and limit were not specified. This allows for calculation of number of &quot;pages&quot; of data.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "object.records",
            "description": "<p>An array of Company Network Type Links records.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "object.records.id",
            "description": "<p>The Company Network Type Link's Id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "object.records.companyId",
            "description": "<p>The Company the record is linking to the Network Type.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "object.records.networkTypeId",
            "description": "<p>The Network Type that the Company is being linked to.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "object.records.networkSettings",
            "description": "<p>The settings in a JSON string that correspond to the Network Type.</p>"
          }
        ]
      }
    },
    "version": "1.2.1",
    "filename": "../lpwanserver/rest/restCompanyNetworkTypeLinks.js",
    "groupTitle": "Company_Network_Type_Links",
    "name": "GetApiCompanynetworktypelinks"
  },
  {
    "description": "<p>Gets the companyNetworkTypeLink record with the specified id.</p>",
    "type": "get",
    "url": "/api/companyNetworkTypeLinks/:id",
    "title": "Get Company Network Type Link",
    "group": "Company_Network_Type_Links",
    "permission": [
      {
        "name": "Any, but only System Admin can retrieve a Company Network\n     Type Link other than one belonging to their own company."
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>The Create Session's returned token prepended with &quot;Bearer &quot;</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "URL Parameters": [
          {
            "group": "URL Parameters",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>The Company Network Type Link's id</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "object",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "object.id",
            "description": "<p>The Company Network Type Link's Id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "object.companyId",
            "description": "<p>The Company the record is linking to the Network Type.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "object.networkTypeId",
            "description": "<p>The Network Type that the Company is being linked to.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "object.networkSettings",
            "description": "<p>The settings in a JSON string that correspond to the Network Type.</p>"
          }
        ]
      }
    },
    "version": "1.2.1",
    "filename": "../lpwanserver/rest/restCompanyNetworkTypeLinks.js",
    "groupTitle": "Company_Network_Type_Links",
    "name": "GetApiCompanynetworktypelinksId"
  },
  {
    "description": "<p>Creates a new companyNetworkTypeLink record.  Also creates the Company on the remote Networks of the Network Type.</p>",
    "type": "post",
    "url": "/api/companyNetworkTypeLinks",
    "title": "Create Company Network Type Link",
    "group": "Company_Network_Type_Links",
    "permission": [
      {
        "name": "System Admin"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>The Create Session's returned token prepended with &quot;Bearer &quot;</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Request Body": [
          {
            "group": "Request Body",
            "type": "String",
            "optional": false,
            "field": "companyId",
            "description": "<p>The Company the record is linking to the Network Type.</p>"
          },
          {
            "group": "Request Body",
            "type": "String",
            "optional": false,
            "field": "networkTypeId",
            "description": "<p>The Network Type that the Company is being linked to.</p>"
          },
          {
            "group": "Request Body",
            "type": "String",
            "optional": false,
            "field": "networkSettings",
            "description": "<p>The settings in a JSON string that correspond to the Network Type.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example body:",
        "content": "{\n    \"companyId\": 2,\n    \"networkTypeId\": 4,\n    \"networkSettings\": \"{ ... }\",\n}",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>The new Company Network Type Link's id.</p>"
          }
        ]
      }
    },
    "version": "1.2.1",
    "filename": "../lpwanserver/rest/restCompanyNetworkTypeLinks.js",
    "groupTitle": "Company_Network_Type_Links",
    "name": "PostApiCompanynetworktypelinks"
  },
  {
    "description": "<p>Updates the companyNetworkTypeLink record with the specified id.  Also pushes the updates to the remote Networks of the Network Type.</p>",
    "type": "put",
    "url": "/api/companyNetworkTypeLinks/:id",
    "title": "Update Company Network Type Link",
    "group": "Company_Network_Type_Links",
    "permission": [
      {
        "name": "System Admin"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>The Create Session's returned token prepended with &quot;Bearer &quot;</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "URL Parameters": [
          {
            "group": "URL Parameters",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>The Company Network Type Link's id</p>"
          }
        ],
        "Request Body": [
          {
            "group": "Request Body",
            "type": "String",
            "optional": true,
            "field": "networkSettings",
            "description": "<p>The settings in a JSON string that correspond to the Network Type.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example body:",
        "content": "{\n    \"networkSettings\": \"{ ... }\",\n}",
        "type": "json"
      }
    ],
    "version": "1.2.1",
    "filename": "../lpwanserver/rest/restCompanyNetworkTypeLinks.js",
    "groupTitle": "Company_Network_Type_Links",
    "name": "PutApiCompanynetworktypelinksId"
  },
  {
    "description": "<p>Deletes the Device Network Type Links record with the specified id.  Also deletes the Device from remote Networks of the Network Type.</p>",
    "type": "delete",
    "url": "/api/deviceNetworkTypeLinks/:id",
    "title": "Delete Device Network Type Link",
    "group": "Device_Network_Type_Links",
    "permission": [
      {
        "name": "System Admin"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>The Create Session's returned token prepended with &quot;Bearer &quot;</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "URL Parameters": [
          {
            "group": "URL Parameters",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>The Device Network Type Link's id</p>"
          }
        ]
      }
    },
    "version": "1.2.1",
    "filename": "../lpwanserver/rest/restDeviceNetworkTypeLinks.js",
    "groupTitle": "Device_Network_Type_Links",
    "name": "DeleteApiDevicenetworktypelinksId"
  },
  {
    "type": "get",
    "url": "/api/deviceNetworkTypeLinks",
    "title": "Get Device Network Type Links",
    "group": "Device_Network_Type_Links",
    "description": "<p>Returns an array of the Device Network Type Links that match the options.</p>",
    "permission": [
      {
        "name": "All, but only System Admins can see entries from other\n     companies."
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>The Create Session's returned token prepended with &quot;Bearer &quot;</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Query Parameters": [
          {
            "group": "Query Parameters",
            "type": "Number",
            "optional": true,
            "field": "limit",
            "description": "<p>The maximum number of records to return.  Use with offset to manage paging.  0 is the same as unspecified, returning all users that match other query parameters.</p>"
          },
          {
            "group": "Query Parameters",
            "type": "Number",
            "optional": true,
            "field": "offset",
            "description": "<p>The offset into the returned database query set.  Use with limit to manage paging.  0 is the same as unspecified, returning the list from the beginning.</p>"
          },
          {
            "group": "Query Parameters",
            "type": "String",
            "optional": true,
            "field": "deviceId",
            "description": "<p>Limit the records to those that have the deviceId specified.</p>"
          },
          {
            "group": "Query Parameters",
            "type": "String",
            "optional": true,
            "field": "applicationId",
            "description": "<p>Limit the records to those that have the applicationId specified.</p>"
          },
          {
            "group": "Query Parameters",
            "type": "String",
            "optional": true,
            "field": "networkTypeId",
            "description": "<p>Limit the records to those that have the networkTypeId specified.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "object",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "object.totalCount",
            "description": "<p>The total number of records that would have been returned if offset and limit were not specified. This allows for calculation of number of &quot;pages&quot; of data.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "object.records",
            "description": "<p>An array of Device Network Type Links records.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "object.records.id",
            "description": "<p>The Device Network Type Link's Id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "object.records.deviceId",
            "description": "<p>The Device the record is linking to the Network Type.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "object.records.networkTypeId",
            "description": "<p>The Network Type that the Device is being linked to.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "object.records.networkSettings",
            "description": "<p>The settings in a JSON string that correspond to the Network Type.</p>"
          }
        ]
      }
    },
    "version": "1.2.1",
    "filename": "../lpwanserver/rest/restDeviceNetworkTypeLinks.js",
    "groupTitle": "Device_Network_Type_Links",
    "name": "GetApiDevicenetworktypelinks"
  },
  {
    "description": "<p>Gets the Devic Network Type Link record with the specified id.</p>",
    "type": "get",
    "url": "/api/deviceNetworkTypeLinks/:id",
    "title": "Get Device Network Type Link",
    "group": "Device_Network_Type_Links",
    "permission": [
      {
        "name": "Any, but only System Admin can retrieve a Device Network\n     Type Link other than one belonging to their own company."
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>The Create Session's returned token prepended with &quot;Bearer &quot;</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "URL Parameters": [
          {
            "group": "URL Parameters",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>The Device Network Type Link's id</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "object",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "object.id",
            "description": "<p>The Device Network Type Link's Id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "object.deviceId",
            "description": "<p>The Device the record is linking to the Network Type.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "object.networkTypeId",
            "description": "<p>The Network Type that the Device is being linked to.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "object.networkSettings",
            "description": "<p>The settings in a JSON string that correspond to the Network Type.</p>"
          }
        ]
      }
    },
    "version": "1.2.1",
    "filename": "../lpwanserver/rest/restDeviceNetworkTypeLinks.js",
    "groupTitle": "Device_Network_Type_Links",
    "name": "GetApiDevicenetworktypelinksId"
  },
  {
    "description": "<p>Creates a new Device Network Type Link record.  Also creates the device on remote Networks of the Network Type.</p>",
    "type": "post",
    "url": "/api/deviceNetworkTypeLinks",
    "title": "Create Device Network Type Link",
    "group": "Device_Network_Type_Links",
    "permission": [
      {
        "name": "System Admin"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>The Create Session's returned token prepended with &quot;Bearer &quot;</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Request Body": [
          {
            "group": "Request Body",
            "type": "String",
            "optional": false,
            "field": "deviceId",
            "description": "<p>The Device the record is linking to the Network Type.</p>"
          },
          {
            "group": "Request Body",
            "type": "String",
            "optional": false,
            "field": "networkTypeId",
            "description": "<p>The Network Type that the Device is being linked to.</p>"
          },
          {
            "group": "Request Body",
            "type": "String",
            "optional": false,
            "field": "networkSettings",
            "description": "<p>The settings in a JSON string that correspond to the Network Type.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example body:",
        "content": "{\n    \"deviceId\": 2,\n    \"networkTypeId\": 4,\n    \"networkSettings\": \"{ ... }\",\n}",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>The new Device Network Type Link's id.</p>"
          }
        ]
      }
    },
    "version": "1.2.1",
    "filename": "../lpwanserver/rest/restDeviceNetworkTypeLinks.js",
    "groupTitle": "Device_Network_Type_Links",
    "name": "PostApiDevicenetworktypelinks"
  },
  {
    "description": "<p>Pushes the Device Network Type Links record with the specified id.</p>",
    "type": "post",
    "url": "/api/deviceNetworkTypeLinks/:id/push",
    "title": "Push Device Network Type Link",
    "group": "Device_Network_Type_Links",
    "permission": [
      {
        "name": "System Admin or Company Admin for the Device's Company."
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>The Create Session's returned token prepended with &quot;Bearer &quot;</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "URL Parameters": [
          {
            "group": "URL Parameters",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>The Device Network Type Link's id</p>"
          }
        ]
      }
    },
    "version": "1.2.1",
    "filename": "../lpwanserver/rest/restDeviceNetworkTypeLinks.js",
    "groupTitle": "Device_Network_Type_Links",
    "name": "PostApiDevicenetworktypelinksIdPush"
  },
  {
    "description": "<p>Updates the Device Network Type Link record with the specified id.  Also pushes changes to remote Networks of the Network Type.</p>",
    "type": "put",
    "url": "/api/deviceNetworkTypeLinks/:id",
    "title": "Update Device Network Type Link",
    "group": "Device_Network_Type_Links",
    "permission": [
      {
        "name": "System Admin"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>The Create Session's returned token prepended with &quot;Bearer &quot;</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "URL Parameters": [
          {
            "group": "URL Parameters",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>The Device Network Type Link's id</p>"
          }
        ],
        "Request Body": [
          {
            "group": "Request Body",
            "type": "String",
            "optional": true,
            "field": "networkSettings",
            "description": "<p>The settings in a JSON string that correspond to the Network Type.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example body:",
        "content": "{\n    \"networkSettings\": \"{ ... }\",\n}",
        "type": "json"
      }
    ],
    "version": "1.2.1",
    "filename": "../lpwanserver/rest/restDeviceNetworkTypeLinks.js",
    "groupTitle": "Device_Network_Type_Links",
    "name": "PutApiDevicenetworktypelinksId"
  },
  {
    "description": "<p>Deletes the Device Profile record with the specified id. Also deletes the Device Profile from remote Networks of the Network Type, where the concept of a Device Profile is supported.</p>",
    "type": "delete",
    "url": "/api/deviceProfiles/:id",
    "title": "Delete Device Profile",
    "group": "Device_Profiles",
    "permission": [
      {
        "name": "System Admin, or Company Admin for this company."
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>The Create Session's returned token prepended with &quot;Bearer &quot;</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "URL Parameters": [
          {
            "group": "URL Parameters",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>The Device Profile's id</p>"
          }
        ]
      }
    },
    "version": "1.2.1",
    "filename": "../lpwanserver/rest/restDeviceProfiles.js",
    "groupTitle": "Device_Profiles",
    "name": "DeleteApiDeviceprofilesId"
  },
  {
    "description": "<p>Gets the Device Profile record with the specified id.</p>",
    "type": "get",
    "url": "/api/deviceProfile/:id",
    "title": "Get Device Profile",
    "group": "Device_Profiles",
    "permission": [
      {
        "name": "Any, but only System Admin can retrieve a Device Profile\n     that is not owned by their Company."
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>The Create Session's returned token prepended with &quot;Bearer &quot;</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "URL Parameters": [
          {
            "group": "URL Parameters",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>The Device Profile's id</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "object",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "object.id",
            "description": "<p>The Device Profile's Id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "object.name",
            "description": "<p>The Device Profile's name</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "object.description",
            "description": "<p>The Device Profile's description</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "object.companyId",
            "description": "<p>The Id of the Company that the Device Profile belongs to.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "object.networkTypeId",
            "description": "<p>The Network Type that this Device Profile works with.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "object.networkSettings",
            "description": "<p>The JSON data structure that has the settings for the Network Type.  This is expected to match the Network Protocol's expected data used to set up the device on the remote Network(s).</p>"
          }
        ]
      }
    },
    "version": "1.2.1",
    "filename": "../lpwanserver/rest/restDeviceProfiles.js",
    "groupTitle": "Device_Profiles",
    "name": "GetApiDeviceprofileId"
  },
  {
    "type": "get",
    "url": "/api/deviceProfiles",
    "title": "Get Device Profiles",
    "group": "Device_Profiles",
    "description": "<p>Returns an array of the Device Profiles that match the options.</p>",
    "permission": [
      {
        "name": "System Admin accesses all Device Profiles, others access\n      only their own Company's Device Profiles."
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>The Create Session's returned token prepended with &quot;Bearer &quot;</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Query Parameters": [
          {
            "group": "Query Parameters",
            "type": "Number",
            "optional": true,
            "field": "limit",
            "description": "<p>The maximum number of records to return.  Use with offset to manage paging.  0 is the same as unspecified, returning all users that match other query parameters.</p>"
          },
          {
            "group": "Query Parameters",
            "type": "Number",
            "optional": true,
            "field": "offset",
            "description": "<p>The offset into the returned database query set.  Use with limit to manage paging.  0 is the same as unspecified, returning the list from the beginning.</p>"
          },
          {
            "group": "Query Parameters",
            "type": "String",
            "optional": true,
            "field": "search",
            "description": "<p>Search the Device Profiles based on name matches to the passed string.  In the string, use &quot;%&quot; to match 0 or more characters and &quot;_&quot; to match exactly one.  For example, to match names starting with &quot;D&quot;, use the string &quot;D%&quot;.</p>"
          },
          {
            "group": "Query Parameters",
            "type": "String",
            "optional": true,
            "field": "companyId",
            "description": "<p>Limit the Device Profiles to those belonging to the Company.</p>"
          },
          {
            "group": "Query Parameters",
            "type": "String",
            "optional": true,
            "field": "networkTypeId",
            "description": "<p>Limit the Device Profiles to those that are for the Network Type.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "object",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "object.totalCount",
            "description": "<p>The total number of records that would have been returned if offset and limit were not specified. This allows for calculation of number of &quot;pages&quot; of data.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "object.records",
            "description": "<p>An array of Device Profile records.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "object.records.id",
            "description": "<p>The Device Profile's Id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "object.records.name",
            "description": "<p>The Device Profile's name</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "object.records.description",
            "description": "<p>The Device Profile's description</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "object.records.companyId",
            "description": "<p>The Id of the Company that the Device Profile belongs to.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "object.records.networkTypeId",
            "description": "<p>The Network Type that this Device Profile works with.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "object.records.networkSettings",
            "description": "<p>The JSON data structure that has the settings for the Network Type.  This is expected to match the Network Protocol's expected data used to set up the device on the remote Network(s).</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "../lpwanserver/rest/restDeviceProfiles.js",
    "groupTitle": "Device_Profiles",
    "name": "GetApiDeviceprofiles"
  },
  {
    "description": "<p>Creates a new Device Profile record.  Also creates a Device Profile on remote Networks of the Network Type, where supported.</p>",
    "type": "post",
    "url": "/api/deviceProfiles",
    "title": "Create Device Profile",
    "group": "Device_Profiles",
    "permission": [
      {
        "name": "System Admin, or Company Admin that can only create a\n        Device Profile for their own company."
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>The Create Session's returned token prepended with &quot;Bearer &quot;</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Request Body": [
          {
            "group": "Request Body",
            "type": "String",
            "optional": false,
            "field": "object.name",
            "description": "<p>The Device Profile's name</p>"
          },
          {
            "group": "Request Body",
            "type": "String",
            "optional": false,
            "field": "object.description",
            "description": "<p>The Device Profile's description</p>"
          },
          {
            "group": "Request Body",
            "type": "String",
            "optional": false,
            "field": "object.companyId",
            "description": "<p>The Id of the Company that the Device Profile belongs to.</p>"
          },
          {
            "group": "Request Body",
            "type": "String",
            "optional": false,
            "field": "object.networkTypeId",
            "description": "<p>The Network Type that this Device Profile works with.</p>"
          },
          {
            "group": "Request Body",
            "type": "Object",
            "optional": false,
            "field": "object.networkSettings",
            "description": "<p>The JSON data structure that has the settings for the Network Type.  This is expected to match the Network Protocol's expected data used to set up the device on the remote Network(s).</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example body:",
        "content": "{\n    \"name\": \"GPS Tracker\",\n    \"description\": \"GPS device for remote reporting\",\n    \"companyId\": J59j3Ddteoi8,\n    \"networkTypeId\": 1,\n    \"networkSettings\": {...}\n}",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>The new Device Profile's id.</p>"
          }
        ]
      }
    },
    "version": "1.2.1",
    "filename": "../lpwanserver/rest/restDeviceProfiles.js",
    "groupTitle": "Device_Profiles",
    "name": "PostApiDeviceprofiles"
  },
  {
    "description": "<p>Pushes the Device Profile record with the specified id.</p>",
    "type": "post",
    "url": "/api/deviceProfiles/:id/push",
    "title": "Push Device Profile",
    "group": "Device_Profiles",
    "permission": [
      {
        "name": "System Admin, or Company Admin for this company."
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>The Create Session's returned token prepended with &quot;Bearer &quot;</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "URL Parameters": [
          {
            "group": "URL Parameters",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>The Device Profile's id</p>"
          }
        ]
      }
    },
    "version": "1.2.1",
    "filename": "../lpwanserver/rest/restDeviceProfiles.js",
    "groupTitle": "Device_Profiles",
    "name": "PostApiDeviceprofilesIdPush"
  },
  {
    "description": "<p>Updates the Device Profile record with the specified id. Also pushes updates to remote Networks of the Network Type that support the concept of Device Profiles.</p>",
    "type": "put",
    "url": "/api/deviceProfiles/:id",
    "title": "Update Device Profile",
    "group": "Device_Profiles",
    "permission": [
      {
        "name": "System Admin, or Company Admin for this Company."
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>The Create Session's returned token prepended with &quot;Bearer &quot;</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Request Body": [
          {
            "group": "Request Body",
            "type": "String",
            "optional": true,
            "field": "name",
            "description": "<p>The Device Profile's name</p>"
          },
          {
            "group": "Request Body",
            "type": "String",
            "optional": true,
            "field": "description",
            "description": "<p>The Device Profile's description</p>"
          },
          {
            "group": "Request Body",
            "type": "String",
            "optional": true,
            "field": "companyId",
            "description": "<p>The Id of the Company that the Device Profile belongs to.</p>"
          },
          {
            "group": "Request Body",
            "type": "String",
            "optional": true,
            "field": "networkTypeId",
            "description": "<p>The Network Type that this Device Profile works with.</p>"
          },
          {
            "group": "Request Body",
            "type": "Object",
            "optional": true,
            "field": "networkSettings",
            "description": "<p>The JSON data structure that has the settings for the Network Type.  This is expected to match the Network Protocol's expected data used to set up the device on the remote Network(s).</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example body:",
        "content": "{\n    \"name\": \"GPS Tracker\",\n    \"description\": \"GPS tracker with remote reporting\",\n    \"companyId\": J59j3Ddteoi8,\n    \"networkTypeId\": 1,\n    \"networkSettings\": {...}\n}",
        "type": "json"
      }
    ],
    "version": "1.2.1",
    "filename": "../lpwanserver/rest/restDeviceProfiles.js",
    "groupTitle": "Device_Profiles",
    "name": "PutApiDeviceprofilesId"
  },
  {
    "description": "<p>Deletes the device record with the specified id.</p>",
    "type": "delete",
    "url": "/api/devices/:id",
    "title": "Delete Devices",
    "group": "Devices",
    "permission": [
      {
        "name": "System Admin or Company Admin for the Device's Company"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>The Create Session's returned token prepended with &quot;Bearer &quot;</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "URL Parameters": [
          {
            "group": "URL Parameters",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>The Device's id</p>"
          }
        ]
      }
    },
    "version": "1.2.1",
    "filename": "../lpwanserver/rest/restDevices.js",
    "groupTitle": "Devices",
    "name": "DeleteApiDevicesId"
  },
  {
    "type": "get",
    "url": "/api/devices",
    "title": "Get Devices",
    "group": "Devices",
    "description": "<p>Returns an array of the Devices that match the options.</p>",
    "permission": [
      {
        "name": "System Admin, or Company Admin (limits returned data to\n      user's own Company's Devices)"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>The Create Session's returned token prepended with &quot;Bearer &quot;</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Query Parameters": [
          {
            "group": "Query Parameters",
            "type": "Number",
            "optional": true,
            "field": "limit",
            "description": "<p>The maximum number of records to return.  Use with offset to manage paging.  0 is the same as unspecified, returning all users that match other query parameters.</p>"
          },
          {
            "group": "Query Parameters",
            "type": "Number",
            "optional": true,
            "field": "offset",
            "description": "<p>The offset into the returned database query set.  Use with limit to manage paging.  0 is the same as unspecified, returning the list from the beginning.</p>"
          },
          {
            "group": "Query Parameters",
            "type": "String",
            "optional": true,
            "field": "search",
            "description": "<p>Search the Devices based on name matches to the passed string.  In the string, use &quot;%&quot; to match 0 or more characters and &quot;_&quot; to match exactly one.  For example, to match names starting with &quot;D&quot;, use the string &quot;D%&quot;.</p>"
          },
          {
            "group": "Query Parameters",
            "type": "String",
            "optional": true,
            "field": "companyId",
            "description": "<p>Limit the Devices to those belonging to the Company.</p>"
          },
          {
            "group": "Query Parameters",
            "type": "String",
            "optional": true,
            "field": "applicationId",
            "description": "<p>Limit the Devices to those belonging to the Application.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "object",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "object.totalCount",
            "description": "<p>The total number of records that would have been returned if offset and limit were not specified. This allows for calculation of number of &quot;pages&quot; of data.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "object.records",
            "description": "<p>An array of Device records.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "object.records.id",
            "description": "<p>The Device's Id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "object.records.name",
            "description": "<p>The Device's name</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "object.records.description",
            "description": "<p>The Device's description</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "object.records.deviceModel",
            "description": "<p>The Device's Model information</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "object.records.applicationId",
            "description": "<p>The Id of the Application that this Device belongs to.</p>"
          }
        ]
      }
    },
    "version": "1.2.1",
    "filename": "../lpwanserver/rest/restDevices.js",
    "groupTitle": "Devices",
    "name": "GetApiDevices"
  },
  {
    "description": "<p>Gets the device record with the specified id.</p>",
    "type": "get",
    "url": "/api/devices/:id",
    "title": "Get Device",
    "group": "Devices",
    "permission": [
      {
        "name": "Any, but only System Admin can retrieve a device for a\n     company other than their own."
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>The Create Session's returned token prepended with &quot;Bearer &quot;</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "URL Parameters": [
          {
            "group": "URL Parameters",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>The Device's id</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "object",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "object.records.id",
            "description": "<p>The Device's Id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "object.records.name",
            "description": "<p>The Device's name</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "object.records.description",
            "description": "<p>The Device's description</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "object.records.deviceModel",
            "description": "<p>The Device's Model information</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "object.records.applicationId",
            "description": "<p>The Id of the Application that this Device belongs to.</p>"
          }
        ]
      }
    },
    "version": "1.2.1",
    "filename": "../lpwanserver/rest/restDevices.js",
    "groupTitle": "Devices",
    "name": "GetApiDevicesId"
  },
  {
    "description": "<p>Get downlinks for an IP device</p>",
    "type": "get",
    "url": "/api/ip-device-downlinks",
    "title": "Get IP Device Downlinks",
    "group": "Devices",
    "permission": [
      {
        "name": "TLS Client Certificate, with devEUI in Subject.CN"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "prefer",
            "description": "<p>Request a time in seconds for server to hold request open, waiting for downlinks. e.g. prefer: wait=30</p>"
          }
        ]
      }
    },
    "version": "1.2.1",
    "filename": "../lpwanserver/rest/restDevices.js",
    "groupTitle": "Devices",
    "name": "GetApiIpDeviceDownlinks"
  },
  {
    "description": "<p>Creates a new device record.</p>",
    "type": "post",
    "url": "/api/companies",
    "title": "Create Device",
    "group": "Devices",
    "permission": [
      {
        "name": "System Admin or a Company Admin from the same Company\n     as the Device."
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>The Create Session's returned token prepended with &quot;Bearer &quot;</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Request Body": [
          {
            "group": "Request Body",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>The Device's name</p>"
          },
          {
            "group": "Request Body",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>The Device's description</p>"
          },
          {
            "group": "Request Body",
            "type": "String",
            "optional": false,
            "field": "deviceModel",
            "description": "<p>The Device's Model information</p>"
          },
          {
            "group": "Request Body",
            "type": "String",
            "optional": false,
            "field": "applicationId",
            "description": "<p>The Id of the Application that this Device belongs to.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example body:",
        "content": "{\n    \"name\": \"GPS for Fido\",\n    \"description\": \"GPS for Fido, he keeps running away\",\n    \"deviceModel\": \"Bark 1\",\n    \"applicationId\": 1\n}",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>The new Device's id.</p>"
          }
        ]
      }
    },
    "version": "1.2.1",
    "filename": "../lpwanserver/rest/restDevices.js",
    "groupTitle": "Devices",
    "name": "PostApiCompanies"
  },
  {
    "description": "<p>Send a downlink to a device</p>",
    "type": "post",
    "url": "/api/devices/:id/downlinks",
    "title": "Send Downlink",
    "group": "Devices",
    "permission": [
      {
        "name": "System Admin or Company Admin for the Device's Company"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>The Create Session's returned token prepended with &quot;Bearer &quot;</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "URL Parameters": [
          {
            "group": "URL Parameters",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>The Device's id</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example body:",
        "content": "{\n    fCnt: 2,\n    fPort: 1,\n    jsonData: { ... }\n}",
        "type": "json"
      }
    ],
    "version": "1.2.1",
    "filename": "../lpwanserver/rest/restDevices.js",
    "groupTitle": "Devices",
    "name": "PostApiDevicesIdDownlinks"
  },
  {
    "description": "<p>Create an uplink to be sent to the application server.</p>",
    "type": "post",
    "url": "/api/ip-device-uplinks",
    "title": "Create IP Device Uplink",
    "group": "Devices",
    "permission": [
      {
        "name": "TLS Client Certificate, with devEUI in Subject.CN"
      }
    ],
    "examples": [
      {
        "title": "Example body:",
        "content": "{\n    any: 'any'\n}",
        "type": "json"
      }
    ],
    "version": "1.2.1",
    "filename": "../lpwanserver/rest/restDevices.js",
    "groupTitle": "Devices",
    "name": "PostApiIpDeviceUplinks"
  },
  {
    "description": "<p>Updates the device record with the specified id.</p>",
    "type": "put",
    "url": "/api/devices/:id",
    "title": "Update Device",
    "group": "Devices",
    "permission": [
      {
        "name": "System Admin, or Company Admin for this Device's Company."
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>The Create Session's returned token prepended with &quot;Bearer &quot;</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "URL Parameters": [
          {
            "group": "URL Parameters",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>The Device's id</p>"
          }
        ],
        "Request Body": [
          {
            "group": "Request Body",
            "type": "String",
            "optional": true,
            "field": "name",
            "description": "<p>The Device's name</p>"
          },
          {
            "group": "Request Body",
            "type": "String",
            "optional": true,
            "field": "description",
            "description": "<p>The Device's description</p>"
          },
          {
            "group": "Request Body",
            "type": "String",
            "optional": true,
            "field": "applicationId",
            "description": "<p>The Id of the Application that the Device blongs to.  For a Company Admin user, this Appplication must belong to their own Company.</p>"
          },
          {
            "group": "Request Body",
            "type": "String",
            "optional": true,
            "field": "deviceModel",
            "description": "<p>The Device's Model information</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example body:",
        "content": "{\n    \"name\": \"GPS for Fido\",\n    \"description\": \"GPS for Fido, he keeps running away!\",\n    \"deviceModel\": \"Bark 1\",\n    \"applicationId\": 1\n}",
        "type": "json"
      }
    ],
    "version": "1.2.1",
    "filename": "../lpwanserver/rest/restDevices.js",
    "groupTitle": "Devices",
    "name": "PutApiDevicesId"
  },
  {
    "description": "<p>Deletes the Network Protocol record with the specified id.</p>",
    "type": "delete",
    "url": "/api/networkProtocols/:id",
    "title": "Delete Network Protocol",
    "group": "Network_Protocols",
    "permission": [
      {
        "name": "System AdminnetworkProtocolHandlers"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>The Create Session's returned token prepended with &quot;Bearer &quot;</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "URL Parameters": [
          {
            "group": "URL Parameters",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>The Network Protocol's id</p>"
          }
        ]
      }
    },
    "version": "1.2.1",
    "filename": "../lpwanserver/rest/restNetworkProtocols.js",
    "groupTitle": "Network_Protocols",
    "name": "DeleteApiNetworkprotocolsId"
  },
  {
    "type": "get",
    "url": "/api/networkProtocols",
    "title": "Get Network Protocols",
    "group": "Network_Protocols",
    "description": "<p>Returns an array of the Network Protocols that match the options.</p>",
    "permission": [
      {
        "name": "All logged-in users."
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>The Create Session's returned token prepended with &quot;Bearer &quot;</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Query Parameters": [
          {
            "group": "Query Parameters",
            "type": "Number",
            "optional": true,
            "field": "limit",
            "description": "<p>The maximum number of records to return.  Use with offset to manage paging.  0 is the same as unspecified, returning all users that match other query parameters.</p>"
          },
          {
            "group": "Query Parameters",
            "type": "Number",
            "optional": true,
            "field": "offset",
            "description": "<p>The offset into the returned database query set.  Use with limit to manage paging.  0 is the same as unspecified, returning the list from the beginning.</p>"
          },
          {
            "group": "Query Parameters",
            "type": "String",
            "optional": true,
            "field": "search",
            "description": "<p>Search the Network Protocols based on name matches to the passed string.  In the string, use &quot;%&quot; to match 0 or more characters and &quot;_&quot; to match exactly one.  For example, to match names starting with &quot;D&quot;, use the string &quot;D%&quot;.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "object",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "object.totalCount",
            "description": "<p>The total number of records that would have been returned if offset and limit were not specified. This allows for calculation of number of &quot;pages&quot; of data.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "object.records",
            "description": "<p>An array of Network Protocols records.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "object.records.id",
            "description": "<p>The Network Protocol's Id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "object.records.name",
            "description": "<p>The name of the Network Protocol</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "object.records.protocolHandler",
            "description": "<p>The Network Protocol node code that communicates with a remote Network.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "object.records.networkTypeId",
            "description": "<p>The id of the Network Type that the Network Protocol uses for data input.</p>"
          }
        ]
      }
    },
    "version": "1.2.1",
    "filename": "../lpwanserver/rest/restNetworkProtocols.js",
    "groupTitle": "Network_Protocols",
    "name": "GetApiNetworkprotocols"
  },
  {
    "description": "<p>Gets the Network Protocol record with the specified id.</p>",
    "type": "get",
    "url": "/api/networkProtocols/:id",
    "title": "Get Network Protocol",
    "group": "Network_Protocols",
    "permission": [
      {
        "name": "Any logged-in user."
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>The Create Session's returned token prepended with &quot;Bearer &quot;</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "URL Parameters": [
          {
            "group": "URL Parameters",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>The Network Protocol's id</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "object",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "object.id",
            "description": "<p>The Network Protocol's Id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "object.name",
            "description": "<p>The name of the Network Protocol</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "object.protocolHandler",
            "description": "<p>The Network Protocol node code that communicates with a remote Network.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "object.networkTypeId",
            "description": "<p>The id of the Network Type that the Network Protocol uses for data input.</p>"
          }
        ]
      }
    },
    "version": "1.2.1",
    "filename": "../lpwanserver/rest/restNetworkProtocols.js",
    "groupTitle": "Network_Protocols",
    "name": "GetApiNetworkprotocolsId"
  },
  {
    "description": "<p>Gets the Network Protocol Handlers avalible.</p>",
    "type": "get",
    "url": "/api/networkProtocolsHandlers/",
    "title": "Get Network Protocol",
    "group": "Network_Protocols",
    "permission": [
      {
        "name": "Any logged-in user."
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>The Create Session's returned token prepended with &quot;Bearer &quot;</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "array",
            "description": "<p>of protocol handlers available.</p>"
          }
        ]
      }
    },
    "version": "1.2.1",
    "filename": "../lpwanserver/rest/restNetworkProtocols.js",
    "groupTitle": "Network_Protocols",
    "name": "GetApiNetworkprotocolshandlers"
  },
  {
    "description": "<p>Creates a new Network Protocols record.</p>",
    "type": "post",
    "url": "/api/networkProtocols",
    "title": "Create Network Protocol",
    "group": "Network_Protocols",
    "permission": [
      {
        "name": "System Admin"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>The Create Session's returned token prepended with &quot;Bearer &quot;</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Request Body": [
          {
            "group": "Request Body",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>The Network Protocol's name</p>"
          },
          {
            "group": "Request Body",
            "type": "String",
            "optional": false,
            "field": "protocolHandler",
            "description": "<p>The Network Protocol node code that communicates with a remote Network.</p>"
          },
          {
            "group": "Request Body",
            "type": "String",
            "optional": false,
            "field": "networkTypeId",
            "description": "<p>The Id of the Network Type that the Network Protocol accepts as input.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example body:",
        "content": "{\n    \"name\": \"LoRa Server\",\n    \"protocolHandler\": \"LoRaOpenSource.js\"\n    \"networkTypeId\": 1\n}",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>The new Network Protocol's id.</p>"
          }
        ]
      }
    },
    "version": "1.2.1",
    "filename": "../lpwanserver/rest/restNetworkProtocols.js",
    "groupTitle": "Network_Protocols",
    "name": "PostApiNetworkprotocols"
  },
  {
    "description": "<p>Updates the Network Protocol record with the specified id.</p>",
    "type": "put",
    "url": "/api/networkProtocols/:id",
    "title": "Update Network Protocol",
    "group": "Network_Protocols",
    "permission": [
      {
        "name": "System Admin"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>The Create Session's returned token prepended with &quot;Bearer &quot;</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "URL Parameters": [
          {
            "group": "URL Parameters",
            "type": "String",
            "optional": false,
            "field": "networkProtocolHandlersid",
            "description": "<p>The Network Protocol's id</p>"
          }
        ],
        "Request Body": [
          {
            "group": "Request Body",
            "type": "String",
            "optional": true,
            "field": "name",
            "description": "<p>The Network Protocol's name</p>"
          },
          {
            "group": "Request Body",
            "type": "String",
            "optional": true,
            "field": "protocolHandler",
            "description": "<p>The Network Protocol node code that communicates with a remote Network.</p>"
          },
          {
            "group": "Request Body",
            "type": "String",
            "optional": true,
            "field": "networkTypeId",
            "description": "<p>The Id of the Network Type that the Network Protocol accepts as input.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example body:",
        "content": "{\n    \"name\": \"LoRa Server\",\n    \"protocolHandler\": \"LoRaOpenSource.js\",\n    \"networkTypeId\": 1\n}",
        "type": "json"
      }
    ],
    "version": "1.2.1",
    "filename": "../lpwanserver/rest/restNetworkProtocols.js",
    "groupTitle": "Network_Protocols",
    "name": "PutApiNetworkprotocolsId"
  },
  {
    "description": "<p>Deletes the Network Provider record with the specified id.</p>",
    "type": "delete",
    "url": "/api/networkProviders/:id",
    "title": "Delete Network Provider",
    "group": "Network_Providers",
    "permission": [
      {
        "name": "System Admin"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>The Create Session's returned token prepended with &quot;Bearer &quot;</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "URL Parameters": [
          {
            "group": "URL Parameters",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>The Network Provider's id</p>"
          }
        ]
      }
    },
    "version": "1.2.1",
    "filename": "../lpwanserver/rest/restNetworkProviders.js",
    "groupTitle": "Network_Providers",
    "name": "DeleteApiNetworkprovidersId"
  },
  {
    "type": "get",
    "url": "/api/networkProviders",
    "title": "Get Network Providers",
    "group": "Network_Providers",
    "description": "<p>Returns an array of the Network Providers that match the options.</p>",
    "permission": [
      {
        "name": "All logged-in users."
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>The Create Session's returned token prepended with &quot;Bearer &quot;</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Query Parameters": [
          {
            "group": "Query Parameters",
            "type": "Number",
            "optional": true,
            "field": "limit",
            "description": "<p>The maximum number of records to return.  Use with offset to manage paging.  0 is the same as unspecified, returning all users that match other query parameters.</p>"
          },
          {
            "group": "Query Parameters",
            "type": "Number",
            "optional": true,
            "field": "offset",
            "description": "<p>The offset into the returned database query set.  Use with limit to manage paging.  0 is the same as unspecified, returning the list from the beginning.</p>"
          },
          {
            "group": "Query Parameters",
            "type": "String",
            "optional": true,
            "field": "search",
            "description": "<p>Search the Network Providers based on name matches to the passed string.  In the string, use &quot;%&quot; to match 0 or more characters and &quot;_&quot; to match exactly one.  For example, to match names starting with &quot;D&quot;, use the string &quot;D%&quot;.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "object",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "object.totalCount",
            "description": "<p>The total number of records that would have been returned if offset and limit were not specified. This allows for calculation of number of &quot;pages&quot; of data.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "object.records",
            "description": "<p>An array of Network Providers records.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "object.records.id",
            "description": "<p>The Network Provider's Id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "object.records.name",
            "description": "<p>The name of the Network Provider</p>"
          }
        ]
      }
    },
    "version": "1.2.1",
    "filename": "../lpwanserver/rest/restNetworkProviders.js",
    "groupTitle": "Network_Providers",
    "name": "GetApiNetworkproviders"
  },
  {
    "description": "<p>Gets the Network Provider record with the specified id.</p>",
    "type": "get",
    "url": "/api/networkProviders/:id",
    "title": "Get Network Provider",
    "group": "Network_Providers",
    "permission": [
      {
        "name": "Any logged-in user."
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>The Create Session's returned token prepended with &quot;Bearer &quot;</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "URL Parameters": [
          {
            "group": "URL Parameters",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>The Network Provider's id</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "object",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "object.id",
            "description": "<p>The Network Provider's Id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "object.name",
            "description": "<p>The name of the Network Provider</p>"
          }
        ]
      }
    },
    "version": "1.2.1",
    "filename": "../lpwanserver/rest/restNetworkProviders.js",
    "groupTitle": "Network_Providers",
    "name": "GetApiNetworkprovidersId"
  },
  {
    "description": "<p>Creates a new networkProviders record.</p>",
    "type": "post",
    "url": "/api/networkProviders",
    "title": "Create Network Provider",
    "group": "Network_Providers",
    "permission": [
      {
        "name": "System Admin"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>The Create Session's returned token prepended with &quot;Bearer &quot;</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Request Body": [
          {
            "group": "Request Body",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>The Network Provider's name</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example body:",
        "content": "{\n    \"name\": \"Kyrio\"\n}",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>The new Network Provider's id.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "../lpwanserver/rest/restNetworkProviders.js",
    "groupTitle": "Network_Providers",
    "name": "PostApiNetworkproviders"
  },
  {
    "description": "<p>Updates the Network Provider record with the specified id.</p>",
    "type": "put",
    "url": "/api/networkProviders/:id",
    "title": "Update Network Provider",
    "group": "Network_Providers",
    "permission": [
      {
        "name": "System Admin"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>The Create Session's returned token prepended with &quot;Bearer &quot;</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "URL Parameters": [
          {
            "group": "URL Parameters",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>The Network Provider's id</p>"
          }
        ],
        "Request Body": [
          {
            "group": "Request Body",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>The Network Provider's name</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example body:",
        "content": "{\n    \"name\": \"CableLabs\"\n}",
        "type": "json"
      }
    ],
    "version": "1.2.1",
    "filename": "../lpwanserver/rest/restNetworkProviders.js",
    "groupTitle": "Network_Providers",
    "name": "PutApiNetworkprovidersId"
  },
  {
    "description": "<p>Deletes the Network Type record with the specified id.</p>",
    "type": "delete",
    "url": "/api/networkTypes/:id",
    "title": "Delete Network Type",
    "group": "Network_Types",
    "permission": [
      {
        "name": "System Admin"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>The Create Session's returned token prepended with &quot;Bearer &quot;</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "URL Parameters": [
          {
            "group": "URL Parameters",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>The Network Type's id</p>"
          }
        ]
      }
    },
    "version": "1.2.1",
    "filename": "../lpwanserver/rest/restNetworkTypes.js",
    "groupTitle": "Network_Types",
    "name": "DeleteApiNetworktypesId"
  },
  {
    "type": "get",
    "url": "/api/networkTypes",
    "title": "Get Network Types",
    "group": "Network_Types",
    "description": "<p>Returns an array of the Network Types that match the options.</p>",
    "permission": [
      {
        "name": "All logged-in users."
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>The Create Session's returned token prepended with &quot;Bearer &quot;</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Query Parameters": [
          {
            "group": "Query Parameters",
            "type": "Number",
            "optional": true,
            "field": "limit",
            "description": "<p>The maximum number of records to return.  Use with offset to manage paging.  0 is the same as unspecified, returning all users that match other query parameters.</p>"
          },
          {
            "group": "Query Parameters",
            "type": "Number",
            "optional": true,
            "field": "offset",
            "description": "<p>The offset into the returned database query set.  Use with limit to manage paging.  0 is the same as unspecified, returning the list from the beginning.</p>"
          },
          {
            "group": "Query Parameters",
            "type": "String",
            "optional": true,
            "field": "search",
            "description": "<p>Search the Network Types based on name matches to the passed string.  In the string, use &quot;%&quot; to match 0 or more characters and &quot;_&quot; to match exactly one.  For example, to match names starting with &quot;D&quot;, use the string &quot;D%&quot;.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "object",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "object.totalCount",
            "description": "<p>The total number of records that would have been returned if offset and limit were not specified. This allows for calculation of number of &quot;pages&quot; of data.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "object.records",
            "description": "<p>An array of Network Types records.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "object.records.id",
            "description": "<p>The Network Type's Id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "object.records.name",
            "description": "<p>The name of the Network Type</p>"
          }
        ]
      }
    },
    "version": "1.2.1",
    "filename": "../lpwanserver/rest/restNetworkTypes.js",
    "groupTitle": "Network_Types",
    "name": "GetApiNetworktypes"
  },
  {
    "description": "<p>Gets the Network Type record with the specified id.</p>",
    "type": "get",
    "url": "/api/networkTypes/:id",
    "title": "Get Network Type",
    "group": "Network_Types",
    "permission": [
      {
        "name": "Any logged-in user."
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>The Create Session's returned token prepended with &quot;Bearer &quot;</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "URL Parameters": [
          {
            "group": "URL Parameters",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>The Network Type's id</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "object",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "object.id",
            "description": "<p>The Network Type's Id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "object.name",
            "description": "<p>The name of the Network Type</p>"
          }
        ]
      }
    },
    "version": "1.2.1",
    "filename": "../lpwanserver/rest/restNetworkTypes.js",
    "groupTitle": "Network_Types",
    "name": "GetApiNetworktypesId"
  },
  {
    "description": "<p>Creates a new networkTypes record.</p>",
    "type": "post",
    "url": "/api/networkTypes",
    "title": "Create Network Type",
    "group": "Network_Types",
    "permission": [
      {
        "name": "System Admin"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>The Create Session's returned token prepended with &quot;Bearer &quot;</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Request Body": [
          {
            "group": "Request Body",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>The Network Type's name</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example body:",
        "content": "{\n    \"name\": \"NB-IoT\"\n}",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>The new Network Type's id.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "../lpwanserver/rest/restNetworkTypes.js",
    "groupTitle": "Network_Types",
    "name": "PostApiNetworktypes"
  },
  {
    "description": "<p>Updates the Network Type record with the specified id.</p>",
    "type": "put",
    "url": "/api/networkTypes/:id",
    "title": "Update Network Type",
    "group": "Network_Types",
    "permission": [
      {
        "name": "System Admin"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>The Create Session's returned token prepended with &quot;Bearer &quot;</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "URL Parameters": [
          {
            "group": "URL Parameters",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>The Network Type's id</p>"
          }
        ],
        "Request Body": [
          {
            "group": "Request Body",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>The Network Type's name</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example body:",
        "content": "{\n    \"name\": \"NB-IoT\"\n}",
        "type": "json"
      }
    ],
    "version": "1.2.1",
    "filename": "../lpwanserver/rest/restNetworkTypes.js",
    "groupTitle": "Network_Types",
    "name": "PutApiNetworktypesId"
  },
  {
    "description": "<p>Deletes the Network record with the specified id.</p>",
    "type": "delete",
    "url": "/api/networks/:id",
    "title": "Delete Network",
    "group": "Networks",
    "permission": [
      {
        "name": "System Admin"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>The Create Session's returned token prepended with &quot;Bearer &quot;</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "URL Parameters": [
          {
            "group": "URL Parameters",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>The Network's id</p>"
          }
        ]
      }
    },
    "version": "1.2.1",
    "filename": "../lpwanserver/rest/restNetworks.js",
    "groupTitle": "Networks",
    "name": "DeleteApiNetworksId"
  },
  {
    "type": "get",
    "url": "/api/networks",
    "title": "Get Networks",
    "group": "Networks",
    "description": "<p>Returns an array of the Networks that match the options.</p>",
    "permission": [
      {
        "name": "Any logged-in user, but only System Admins receive the\n     networkSecurity field(s)."
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>The Create Session's returned token prepended with &quot;Bearer &quot;</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Query Parameters": [
          {
            "group": "Query Parameters",
            "type": "Number",
            "optional": true,
            "field": "limit",
            "description": "<p>The maximum number of records to return.  Use with offset to manage paging.  0 is the same as unspecified, returning all users that match other query parameters.</p>"
          },
          {
            "group": "Query Parameters",
            "type": "Number",
            "optional": true,
            "field": "offset",
            "description": "<p>The offset into the returned database query set.  Use with limit to manage paging.  0 is the same as unspecified, returning the list from the beginning.</p>"
          },
          {
            "group": "Query Parameters",
            "type": "String",
            "optional": true,
            "field": "search",
            "description": "<p>Search the Networks based on name matches to the passed string.  In the string, use &quot;%&quot; to match 0 or more characters and &quot;_&quot; to match exactly one.  For example, to match names starting with &quot;D&quot;, use the string &quot;D%&quot;.</p>"
          },
          {
            "group": "Query Parameters",
            "type": "String",
            "optional": true,
            "field": "networkProviderId",
            "description": "<p>Limit the Networks to those being provided by the Network Provider.</p>"
          },
          {
            "group": "Query Parameters",
            "type": "String",
            "optional": true,
            "field": "networkTypeId",
            "description": "<p>Limit the Networks to those that support the Network Type.</p>"
          },
          {
            "group": "Query Parameters",
            "type": "String",
            "optional": true,
            "field": "networkProtocolId",
            "description": "<p>Limit the Networks to those that use the Network Protocol.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "object",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "object.totalCount",
            "description": "<p>The total number of records that would have been returned if offset and limit were not specified. This allows for calculation of number of &quot;pages&quot; of data.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "object.records",
            "description": "<p>An array of Network records.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "object.records.id",
            "description": "<p>The Network's Id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "object.records.name",
            "description": "<p>The Network's name</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "object.records.networkProviderId",
            "description": "<p>The Id of the Network Provider that provides the Network.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "object.records.networkTypeId",
            "description": "<p>The Id of the Network Type that the Network uses.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "object.records.networkProtocolId",
            "description": "<p>The Id of the Network Protocol that the Network uses.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "object.records.baseUrl",
            "description": "<p>The base URL used by the Network Protocol to reach the Network's API server.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "object.records.securityData",
            "description": "<p>The data used to grant secure access to the Network's server API.  (Only returned to System Admins.)</p>"
          }
        ]
      }
    },
    "version": "1.2.1",
    "filename": "../lpwanserver/rest/restNetworks.js",
    "groupTitle": "Networks",
    "name": "GetApiNetworks"
  },
  {
    "description": "<p>Gets the Network record with the specified id.</p>",
    "type": "get",
    "url": "/api/networks/:id",
    "title": "Get Network",
    "group": "Networks",
    "permission": [
      {
        "name": "Any logged-in user, but only System Admins receive the\n     networkSecurity field."
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>The Create Session's returned token prepended with &quot;Bearer &quot;</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "URL Parameters": [
          {
            "group": "URL Parameters",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>The Network's id</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "object",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "object.id",
            "description": "<p>The Network's Id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "object.name",
            "description": "<p>The Network's name</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "object.networkProviderId",
            "description": "<p>The Id of the Network Provider that provides the Network.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "object.networkTypeId",
            "description": "<p>The Id of the Network Type that the Network uses.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "object.networkProtocolId",
            "description": "<p>The Id of the Network Protocol that the Network uses.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "object.baseUrl",
            "description": "<p>The base URL used by the Network Protocol to reach the Network's API server.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "object.securityData",
            "description": "<p>The data used to grant secure access to the Network's server API. (Only returned to System Admins.)</p>"
          }
        ]
      }
    },
    "version": "1.2.1",
    "filename": "../lpwanserver/rest/restNetworks.js",
    "groupTitle": "Networks",
    "name": "GetApiNetworksId"
  },
  {
    "description": "<p>Creates a new Network record.</p>",
    "type": "post",
    "url": "/api/networks",
    "title": "Create Network",
    "group": "Networks",
    "permission": [
      {
        "name": "System Admin."
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>The Create Session's returned token prepended with &quot;Bearer &quot;</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Request Body": [
          {
            "group": "Request Body",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>The Network's name</p>"
          },
          {
            "group": "Request Body",
            "type": "String",
            "optional": false,
            "field": "networkProviderId",
            "description": "<p>The Id of the Network Provider that provides the Network.</p>"
          },
          {
            "group": "Request Body",
            "type": "String",
            "optional": false,
            "field": "networkTypeId",
            "description": "<p>The Id of the Network Type that the Network uses.</p>"
          },
          {
            "group": "Request Body",
            "type": "String",
            "optional": false,
            "field": "networkProtocolId",
            "description": "<p>The Id of the Network Protocol that the Network uses.</p>"
          },
          {
            "group": "Request Body",
            "type": "String",
            "optional": false,
            "field": "baseUrl",
            "description": "<p>The base URL used by the Network Protocol to reach the Network's API server.</p>"
          },
          {
            "group": "Request Body",
            "type": "Object",
            "optional": false,
            "field": "securityData",
            "description": "<p>The data used to grant secure access to the Network's server API.  This data is defined by the Network Type.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example body:",
        "content": "{\n    \"name\": \"Kyrio LoRa Server\",\n    \"networkProviderId\": 1,\n    \"networkTypeId\": 1,\n    \"networkProtocolId\": 2,\n    \"baseUrl\": \"https://lora.kyrio.com/api\"\n    \"securityData\": {\n                        \"username\": \"admin\",\n                        \"password\": \"somesecretpassword\"\n                    }\n}",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>The new Network's id.</p>"
          }
        ]
      }
    },
    "version": "1.2.1",
    "filename": "../lpwanserver/rest/restNetworks.js",
    "groupTitle": "Networks",
    "name": "PostApiNetworks"
  },
  {
    "description": "<p>Updates the Network record with the specified id.</p>",
    "type": "put",
    "url": "/api/networks/:id",
    "title": "Update Network",
    "group": "Networks",
    "permission": [
      {
        "name": "System Admin"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>The Create Session's returned token prepended with &quot;Bearer &quot;</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "URL Parameters": [
          {
            "group": "URL Parameters",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>The Network's id</p>"
          }
        ],
        "Request Body": [
          {
            "group": "Request Body",
            "type": "String",
            "optional": true,
            "field": "name",
            "description": "<p>The Network's name</p>"
          },
          {
            "group": "Request Body",
            "type": "String",
            "optional": true,
            "field": "networkProviderId",
            "description": "<p>The Id of the Network Provider that provides the Network.</p>"
          },
          {
            "group": "Request Body",
            "type": "String",
            "optional": true,
            "field": "networkTypeId",
            "description": "<p>The Id of the Network Type that the Network uses.</p>"
          },
          {
            "group": "Request Body",
            "type": "String",
            "optional": true,
            "field": "networkProtocolId",
            "description": "<p>The Id of the Network Protocol that the Network uses.</p>"
          },
          {
            "group": "Request Body",
            "type": "String",
            "optional": true,
            "field": "baseUrl",
            "description": "<p>The base URL used by the Network Protocol to reach the Network's API server.</p>"
          },
          {
            "group": "Request Body",
            "type": "Object",
            "optional": true,
            "field": "securityData",
            "description": "<p>The data used to grant secure access to the Network's server API.  This data is defined by the Network Type.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example body:",
        "content": "{\n    \"name\": \"Kyrio LoRa Server\",\n    \"networkProviderId\": 1,\n    \"networkTypeId\": 1,\n    \"networkProtocolId\": 2,\n    \"baseUrl\": \"https://lora.kyrio.com/api\"\n    \"securityData\": {\n                        \"username\": \"admin\",\n                        \"password\": \"somesecretpassword\"\n                    }\n}",
        "type": "json"
      }
    ],
    "version": "0.0.0",
    "filename": "../lpwanserver/rest/restNetworks.js",
    "groupTitle": "Networks",
    "name": "PutApiNetworksId"
  },
  {
    "description": "<p>Deletes the Password Policy record with the specified id.</p>",
    "type": "delete",
    "url": "/api/passwordPolicies/:id",
    "title": "Delete Password Policy",
    "group": "Password_Policies",
    "permission": [
      {
        "name": "System Admin, or Company Admin for the Password Policy's\n    company."
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>The Create Session's returned token prepended with &quot;Bearer &quot;</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "URL Parameters": [
          {
            "group": "URL Parameters",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>The Password Policy's id</p>"
          }
        ]
      }
    },
    "version": "1.2.1",
    "filename": "../lpwanserver/rest/restPasswordPolicies.js",
    "groupTitle": "Password_Policies",
    "name": "DeleteApiPasswordpoliciesId"
  },
  {
    "description": "<p>Gets the password policy records for the company.  All returned records' ruleRegExp fields must &quot;match&quot; an entered password for it to be considered valid for the company.</p>",
    "type": "get",
    "url": "/api/passwordPolicies/company/:companyId",
    "title": "Get Company Password Policies",
    "group": "Password_Policies",
    "permission": [
      {
        "name": "Any logged-in user."
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>The Create Session's returned token prepended with &quot;Bearer &quot;</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "URL Parameters": [
          {
            "group": "URL Parameters",
            "type": "String",
            "optional": false,
            "field": "companyId",
            "description": "<p>The Company's id for which to retrieve the Password Policies.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "object",
            "description": "<p>An array of Password Policy records.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "object.id",
            "description": "<p>The Password Policy's Id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "object.ruleText",
            "description": "<p>The Password Policy's description, intended for display to the end user.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "object.ruleRegExp",
            "description": "<p>The Password Policy's Javascript regular expression, which must &quot;match&quot; the entered password for it to be considered valid.</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": true,
            "field": "object.global",
            "description": "<p>True indicates a system-wide rule, which can only be changed by a System Admin.</p>"
          }
        ]
      }
    },
    "version": "1.2.1",
    "filename": "../lpwanserver/rest/restPasswordPolicies.js",
    "groupTitle": "Password_Policies",
    "name": "GetApiPasswordpoliciesCompanyCompanyid"
  },
  {
    "description": "<p>Gets the Password Policy record with the specified id.</p>",
    "type": "get",
    "url": "/api/passwordPolicies/:id",
    "title": "Get Password Policy",
    "group": "Password_Policies",
    "permission": [
      {
        "name": "Any logged-in user can get their own company's Password\n    Policies or global Password Policies.  System Admin can get any\n    Password Policy."
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>The Create Session's returned token prepended with &quot;Bearer &quot;</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "URL Parameters": [
          {
            "group": "URL Parameters",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>The Password Policy's id.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>The Password Policy's Id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "ruleText",
            "description": "<p>The Password Policy's description, intended for display to the end user.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "ruleRegExp",
            "description": "<p>The Password Policy's Javascript regular expression, which must &quot;match&quot; the entered password for it to be considered valid.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "companyId",
            "description": "<p>The company who owns this Password Policy or null if a global policy.</p>"
          }
        ]
      }
    },
    "version": "1.2.1",
    "filename": "../lpwanserver/rest/restPasswordPolicies.js",
    "groupTitle": "Password_Policies",
    "name": "GetApiPasswordpoliciesId"
  },
  {
    "description": "<p>Creates a new Password Policy record.</p>",
    "type": "post",
    "url": "/api/passwordPolicies",
    "title": "Create Password Policy",
    "group": "Password_Policies",
    "permission": [
      {
        "name": "System Admin can create a Password Policy for any Company\n     or a global Password Policy (no companyId).  A Company Admin can\n     create Password Policies for their own company only."
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>The Create Session's returned token prepended with &quot;Bearer &quot;</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Request Body": [
          {
            "group": "Request Body",
            "type": "String",
            "optional": false,
            "field": "ruleText",
            "description": "<p>The Password Policy's description, intended for display to the end user.</p>"
          },
          {
            "group": "Request Body",
            "type": "String",
            "optional": false,
            "field": "ruleRegExp",
            "description": "<p>The Password Policy's Javascript regular expression, which must &quot;match&quot; the entered password for it to be considered valid.</p>"
          },
          {
            "group": "Request Body",
            "type": "String",
            "optional": true,
            "field": "companyId",
            "description": "<p>The id of the company that this Password Policy belongs to.  If not supplied, for a System Admin, defaults to null (global rule for all users/companies).  For Company Admin, defaults to the user's companyId.  If specified by a Company Admin, it MUST match their own company.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example body:",
        "content": "{\n    \"ruleText\": \"Must contain a digit\",\n    \"ruleRegexp\": \"[0-9]\",\n    \"companyId\": 3\n}",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>The new Password Policy's id.</p>"
          }
        ]
      }
    },
    "version": "1.2.1",
    "filename": "../lpwanserver/rest/restPasswordPolicies.js",
    "groupTitle": "Password_Policies",
    "name": "PostApiPasswordpolicies"
  },
  {
    "description": "<p>Updates the Password Policy record with the specified id.</p>",
    "type": "put",
    "url": "/api/passwordPolicies/:id",
    "title": "Update Password Policy",
    "group": "Password_Policies",
    "permission": [
      {
        "name": "System Admin, or Company Admin for the Password Policy's *       Company."
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>The Create Session's returned token prepended with &quot;Bearer &quot;</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "URL Parameters": [
          {
            "group": "URL Parameters",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>The Password Policy's id</p>"
          }
        ],
        "Request Body": [
          {
            "group": "Request Body",
            "type": "String",
            "optional": true,
            "field": "ruleText",
            "description": "<p>The Password Policy's description, intended for display to the end user.</p>"
          },
          {
            "group": "Request Body",
            "type": "String",
            "optional": true,
            "field": "ruleRegExp",
            "description": "<p>The Password Policy's Javascript regular expression, which must &quot;match&quot; the entered password for it to be considered valid.</p>"
          },
          {
            "group": "Request Body",
            "type": "String",
            "optional": true,
            "field": "companyId",
            "description": "<p>The id of the company that this Password Policy belongs to.  Can only be specified by a System Admin.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example body:",
        "content": "{\n    \"ruleText\": \"Must contain a digit\",\n    \"ruleRegexp\": \"[0-9]\"\n}",
        "type": "json"
      }
    ],
    "version": "1.2.1",
    "filename": "../lpwanserver/rest/restPasswordPolicies.js",
    "groupTitle": "Password_Policies",
    "name": "PutApiPasswordpoliciesId"
  },
  {
    "description": "<p>Deletes the Reporting Protocol record with the specified id.</p>",
    "type": "delete",
    "url": "/api/reportingProtocols/:id",
    "title": "Delete Reporting Protocol",
    "group": "Reporting_Protocols",
    "permission": [
      {
        "name": "System Admin"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>The Create Session's returned token prepended with &quot;Bearer &quot;</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "URL Parameters": [
          {
            "group": "URL Parameters",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>The Reporting Protocol's id</p>"
          }
        ]
      }
    },
    "version": "1.2.1",
    "filename": "../lpwanserver/rest/restReportingProtocols.js",
    "groupTitle": "Reporting_Protocols",
    "name": "DeleteApiReportingprotocolsId"
  },
  {
    "description": "<p>Gets the Reporting Protocol Handlers available.</p>",
    "type": "get",
    "url": "/api/reportingProtocolHandlers/",
    "title": "Get Reporting Handlers",
    "group": "Reporting_Protocols",
    "permission": [
      {
        "name": "Any logged-in user."
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>The Create Session's returned token prepended with &quot;Bearer &quot;</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "array",
            "description": "<p>of protocol handlers available.</p>"
          }
        ]
      }
    },
    "version": "1.2.1",
    "filename": "../lpwanserver/rest/restReportingProtocols.js",
    "groupTitle": "Reporting_Protocols",
    "name": "GetApiReportingprotocolhandlers"
  },
  {
    "type": "get",
    "url": "/api/reportingProtocols",
    "title": "Get Reporting Protocols",
    "group": "Reporting_Protocols",
    "description": "<p>Returns an array of the Reporting Protocols that match the options.</p>",
    "permission": [
      {
        "name": "All logged-in users."
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>The Create Session's returned token prepended with &quot;Bearer &quot;</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "object",
            "description": "<p>An array of Reporting Protocol records.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "object.id",
            "description": "<p>The Reporting Protocol's Id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "object.name",
            "description": "<p>The name of the Reporting Protocol</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "object.protocolHandler",
            "description": "<p>The Reporting Protocol code that communicates with an Application vendor's server.</p>"
          }
        ]
      }
    },
    "version": "1.2.1",
    "filename": "../lpwanserver/rest/restReportingProtocols.js",
    "groupTitle": "Reporting_Protocols",
    "name": "GetApiReportingprotocols"
  },
  {
    "description": "<p>Gets the Reporting Protocol record with the specified id.</p>",
    "type": "get",
    "url": "/api/reportingProtocols/:id",
    "title": "Get Reporting Protocol",
    "group": "Reporting_Protocols",
    "permission": [
      {
        "name": "Any logged-in user."
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>The Create Session's returned token prepended with &quot;Bearer &quot;</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "URL Parameters": [
          {
            "group": "URL Parameters",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>The Reporting Protocol's id</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "object",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "object.id",
            "description": "<p>The Reporting Protocol's Id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "object.name",
            "description": "<p>The name of the Reporting Protocol</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "object.protocolHandler",
            "description": "<p>The Reporting Protocol code that communicates with an Application vendor's server.</p>"
          }
        ]
      }
    },
    "version": "1.2.1",
    "filename": "../lpwanserver/rest/restReportingProtocols.js",
    "groupTitle": "Reporting_Protocols",
    "name": "GetApiReportingprotocolsId"
  },
  {
    "description": "<p>Creates a new Reporting Protocols record.</p>",
    "type": "post",
    "url": "/api/reportingProtocols",
    "title": "Create Reporting Protocol",
    "group": "Reporting_Protocols",
    "permission": [
      {
        "name": "System Admin"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>The Create Session's returned token prepended with &quot;Bearer &quot;</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Request Body": [
          {
            "group": "Request Body",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>The Reporting Protocol's name</p>"
          },
          {
            "group": "Request Body",
            "type": "String",
            "optional": false,
            "field": "protocolHandler",
            "description": "<p>The Reporting Protocol code that communicates with an Application vendor's server.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example body:",
        "content": "{\n    \"name\": \"POST\",\n    \"protocolHandler\": \"Post.js\"\n}",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>The new Network Protocol's id.</p>"
          }
        ]
      }
    },
    "version": "1.2.1",
    "filename": "../lpwanserver/rest/restReportingProtocols.js",
    "groupTitle": "Reporting_Protocols",
    "name": "PostApiReportingprotocols"
  },
  {
    "description": "<p>Updates the Reporting Protocol record with the specified id.</p>",
    "type": "put",
    "url": "/api/reportingProtocols/:id",
    "title": "Update Reporting Protocol",
    "group": "Reporting_Protocols",
    "permission": [
      {
        "name": "System Admin"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>The Create Session's returned token prepended with &quot;Bearer &quot;</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "URL Parameters": [
          {
            "group": "URL Parameters",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>The Reporting Protocol's id</p>"
          }
        ],
        "Request Body": [
          {
            "group": "Request Body",
            "type": "String",
            "optional": true,
            "field": "name",
            "description": "<p>The Reporting Protocol's name</p>"
          },
          {
            "group": "Request Body",
            "type": "String",
            "optional": true,
            "field": "protocolHandler",
            "description": "<p>The Reporting Protocol code that communicates with an Application vendor's server.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example body:",
        "content": "{\n    \"name\": \"POST\",\n    \"protocolHandler\": \"Post.js\"\n}",
        "type": "json"
      }
    ],
    "version": "1.2.1",
    "filename": "../lpwanserver/rest/restReportingProtocols.js",
    "groupTitle": "Reporting_Protocols",
    "name": "PutApiReportingprotocolsId"
  },
  {
    "type": "delete",
    "url": "/api/sessions",
    "title": "Delete Session",
    "group": "Sessions",
    "description": "<p>Deletes the session.</p>",
    "version": "1.2.1",
    "filename": "../lpwanserver/rest/restSessions.js",
    "groupTitle": "Sessions",
    "name": "DeleteApiSessions"
  },
  {
    "type": "post",
    "url": "/api/sessions",
    "title": "Create Session",
    "group": "Sessions",
    "description": "<p>Returns a JWT token in the response body that the caller is to put into the Authorize header, prepended  with &quot;Bearer &quot;, for any authorized access to other REST interfaces.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "login_username",
            "description": "<p>The user's username</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "login_password",
            "description": "<p>The user's password</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example body:",
        "content": "{\n    \"login_username\": \"admin\",\n    \"login_password\": \"secretshhh\"\n}",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "string",
            "optional": false,
            "field": "token",
            "description": "<p>The JWT token for the user.</p>"
          }
        ]
      }
    },
    "version": "1.2.1",
    "filename": "../lpwanserver/rest/restSessions.js",
    "groupTitle": "Sessions",
    "name": "PostApiSessions"
  },
  {
    "description": "<p>Deletes the User record with the specified id.</p>",
    "type": "delete",
    "url": "/api/applications/:id",
    "title": "Delete User",
    "group": "Users",
    "permission": [
      {
        "name": "System Admin, or Company Admin for this company, though\n     the caller cannot delete their own record."
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>The Create Session's returned token prepended with &quot;Bearer &quot;</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "URL Parameters": [
          {
            "group": "URL Parameters",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>The User's id</p>"
          }
        ]
      }
    },
    "version": "1.2.1",
    "filename": "../lpwanserver/rest/restUsers.js",
    "groupTitle": "Users",
    "name": "DeleteApiApplicationsId"
  },
  {
    "type": "get",
    "url": "/api/users",
    "title": "Get Users",
    "group": "Users",
    "description": "<p>Returns an array of the Users that match the options.</p>",
    "permission": [
      {
        "name": "System Admin accesses all Users, Company Admin access\n      only their own Company's Users."
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>The Create Session's returned token prepended with &quot;Bearer &quot;</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Query Parameters": [
          {
            "group": "Query Parameters",
            "type": "String",
            "optional": true,
            "field": "limit",
            "description": "<p>The maximum number of records to return.  Use with offset to manage paging.  0 is the same as unspecified, returning all users that match other query parameters.</p>"
          },
          {
            "group": "Query Parameters",
            "type": "String",
            "optional": true,
            "field": "offset",
            "description": "<p>The offset into the returned database query set.  Use with limit to manage paging.  0 is the same as unspecified, returning the list from the beginning.</p>"
          },
          {
            "group": "Query Parameters",
            "type": "String",
            "optional": true,
            "field": "search",
            "description": "<p>Search the Users based on username matches to the passed string.  In the string, use &quot;%&quot; to match 0 or more characters and &quot;_&quot; to match exactly one.  For example, to match names starting with &quot;D&quot;, use the string &quot;D%&quot;.</p>"
          },
          {
            "group": "Query Parameters",
            "type": "String",
            "optional": true,
            "field": "companyId",
            "description": "<p>Limit the Users to those belonging to the Company.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "object",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "object.totalCount",
            "description": "<p>The total number of records that would have been returned if offset and limit were not specified. This allows for calculation of number of &quot;pages&quot; of data.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "object.records",
            "description": "<p>An array of User records.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "object.records.id",
            "description": "<p>The User's Id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "object.records.username",
            "description": "<p>The User's username</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "object.records.email",
            "description": "<p>The User's email</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "object.records.emailVerified",
            "description": "<p>Is the user's email verified?</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "allowedValues": [
              "admin",
              "user"
            ],
            "optional": false,
            "field": "object.records.role",
            "description": "<p>The User's role in the system.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "object.records.companyId",
            "description": "<p>The Id of the Company that the User belongs to.</p>"
          }
        ]
      }
    },
    "version": "1.2.1",
    "filename": "../lpwanserver/rest/restUsers.js",
    "groupTitle": "Users",
    "name": "GetApiUsers"
  },
  {
    "description": "<p>Gets the User record with the specified id.</p>",
    "type": "get",
    "url": "/api/users/:id",
    "title": "Get User",
    "group": "Users",
    "permission": [
      {
        "name": "Any logged-in user.  System Admin's"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>The Create Session's returned token prepended with &quot;Bearer &quot;</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "URL Parameters": [
          {
            "group": "URL Parameters",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>The User's id</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "object",
            "description": "<p>The User record</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "object.id",
            "description": "<p>The User's Id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "object.username",
            "description": "<p>The User's username</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "object.email",
            "description": "<p>The User's email</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "object.emailVerified",
            "description": "<p>Is the user's email verified?</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "allowedValues": [
              "admin",
              "user"
            ],
            "optional": false,
            "field": "object.role",
            "description": "<p>The User's role in the system.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "object.companyId",
            "description": "<p>The Id of the Company that the User belongs to.</p>"
          }
        ]
      }
    },
    "version": "1.2.1",
    "filename": "../lpwanserver/rest/restUsers.js",
    "groupTitle": "Users",
    "name": "GetApiUsersId"
  },
  {
    "description": "<p>Gets the User record for the logged-in user based on the Authorization header.</p>",
    "type": "get",
    "url": "/api/users/me",
    "title": "Get User \"Me\"",
    "group": "Users",
    "permission": [
      {
        "name": "Any logged-in user."
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>The Create Session's returned token prepended with &quot;Bearer &quot;</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "object",
            "description": "<p>The User record</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "object.id",
            "description": "<p>The User's Id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "object.username",
            "description": "<p>The User's username</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "object.email",
            "description": "<p>The User's email</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "object.emailVerified",
            "description": "<p>Is the user's email verified?</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "allowedValues": [
              "admin",
              "user"
            ],
            "optional": false,
            "field": "object.role",
            "description": "<p>The User's role in the system.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "object.companyId",
            "description": "<p>The Id of the Company that the User belongs to.</p>"
          }
        ]
      }
    },
    "version": "1.2.1",
    "filename": "../lpwanserver/rest/restUsers.js",
    "groupTitle": "Users",
    "name": "GetApiUsersMe"
  },
  {
    "description": "<p>Creates a new User record.</p>",
    "type": "post",
    "url": "/api/users",
    "title": "Create User",
    "group": "Users",
    "permission": [
      {
        "name": "System Admin, or Company Admin can create new Users for\n     their own Company."
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>The Create Session's returned token prepended with &quot;Bearer &quot;</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Request Body": [
          {
            "group": "Request Body",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>The User's username</p>"
          },
          {
            "group": "Request Body",
            "type": "String",
            "optional": true,
            "field": "email",
            "description": "<p>The User's email (required for Admin users)</p>"
          },
          {
            "group": "Request Body",
            "type": "String",
            "allowedValues": [
              "admin",
              "user"
            ],
            "optional": false,
            "field": "role",
            "description": "<p>The User's role in the system.</p>"
          },
          {
            "group": "Request Body",
            "type": "String",
            "optional": false,
            "field": "companyId",
            "description": "<p>The Id of the Company that the User belongs to.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example body:",
        "content": "{\n    \"username\": \"jetson\",\n    \"email\": \"g.jetson@spacelysprockets.com\",\n    \"role\": \"user\",\n    \"companyId\": 3\n}",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>The new User's id.</p>"
          }
        ]
      }
    },
    "version": "1.2.1",
    "filename": "../lpwanserver/rest/restUsers.js",
    "groupTitle": "Users",
    "name": "PostApiUsers"
  },
  {
    "description": "<p>Updates the User record with the specified id.</p>",
    "type": "put",
    "url": "/api/users/:id",
    "title": "Update User",
    "group": "Users",
    "permission": [
      {
        "name": "System Admin, or Company Admin for this Company (cannot\n     change companyId), or any logged-in User on their own record (cannot\n     change companyId or role)."
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>The Create Session's returned token prepended with &quot;Bearer &quot;</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "URL Parameters": [
          {
            "group": "URL Parameters",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>The User's id</p>"
          }
        ],
        "Request Body": [
          {
            "group": "Request Body",
            "type": "String",
            "optional": true,
            "field": "username",
            "description": "<p>The User's username</p>"
          },
          {
            "group": "Request Body",
            "type": "String",
            "optional": true,
            "field": "email",
            "description": "<p>The User's email</p>"
          },
          {
            "group": "Request Body",
            "type": "String",
            "allowedValues": [
              "admin",
              "user"
            ],
            "optional": true,
            "field": "role",
            "description": "<p>The User's role in the system. (System or Company Admin only)</p>"
          },
          {
            "group": "Request Body",
            "type": "String",
            "optional": true,
            "field": "companyId",
            "description": "<p>The Id of the Company that the User belongs to. (System Admin only)</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example body:",
        "content": "{\n    \"username\": \"jetson\",\n    \"email\": \"g.jetson@cogswellcogs.com\",\n    \"role\": \"user\",\n    \"companyId\": 4\n}",
        "type": "json"
      }
    ],
    "version": "1.2.1",
    "filename": "../lpwanserver/rest/restUsers.js",
    "groupTitle": "Users",
    "name": "PutApiUsersId"
  },
  {
    "description": "<p>Verifies/rejects a user's email change</p>",
    "type": "put",
    "url": "/api/users/verifyEmail/:uuid",
    "title": "Verify User Email",
    "group": "Users",
    "permission": [
      {
        "name": "Any"
      }
    ],
    "parameter": {
      "fields": {
        "URL Parameters": [
          {
            "group": "URL Parameters",
            "type": "UUID",
            "optional": false,
            "field": "uuid",
            "description": "<p>The UUID supplied via email to the email address.</p>"
          }
        ],
        "Query Parameters": [
          {
            "group": "Query Parameters",
            "type": "String",
            "allowedValues": [
              "accept",
              "reject"
            ],
            "optional": false,
            "field": "function",
            "description": "<p>The action to take on the requested email change</p>"
          },
          {
            "group": "Query Parameters",
            "type": "String",
            "optional": false,
            "field": "source",
            "description": "<p>Where the email verification originated.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "../lpwanserver/rest/restUsers.js",
    "groupTitle": "Users",
    "name": "PutApiUsersVerifyemailUuid"
  }
] });
