"use strict";
// Vendor Modules
const express = require('express');
const router = express.Router();
const cors = require('cors')
let app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({
  limit: "50mb",
  extended: true,
  parameterLimit: 50000
}));

// Add headers
app.use(cors())

app.use(bodyParser.json({
  limit: "50mb"
}));
app.set('port', process.env.PORT || 3000);

// Start listening for HTTP requests
var server = app.listen(app.get('port'), function () {
  var host = server.address().address;
  var port = server.address().port;

  console.info(`app listening at http://${host}:${port}`);
});

var searchDB = require('./connections/db');
const routes = require("./routes/route")(router);
app.use('/', router);
module.exports = app;