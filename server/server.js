// modules
var express = require('express')
  , http = require('http')
  , mongoose = require('mongoose')
  , morgan = require('morgan')
  , bodyParser = require('body-parser');

// configuration files
var configDb = require('./config/db')
  , configServer = require('./config/server');

// app parameters
var app = express();
app.set('port', process.env.PORT || 3000);
app.use(express.static(configServer.staticFolder));
app.use(morgan('dev'));
app.use(bodyParser.json());

/// routes

// API route
app.use('/api', require('./routes/api'));

// serve index: make sure this is the last route configured
require('./routes').serveIndex(app, configServer.staticFolder);

// MongoDB connection
mongoose.connect(configDb.uri, configDb.options, function (err, res) {
  if(err) {
    console.log('ERROR connecting to ' + configDb.uri + '. ' + err);
  }
  else {
    console.log('Successfully connected to: ' + configDb.uri);
  }
});

// HTTP server
http.createServer(app).listen(app.get('port'), function () {
  console.log('HTTP server listening on port ' + app.get('port'));
});