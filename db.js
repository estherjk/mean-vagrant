var mongoose = require('mongoose');

// connect to MongoDB
var dbUri = 'mongodb://localhost/test';
var mongoOptions = { db: { safe: true }};
mongoose.connect(dbUri, mongoOptions, function(err, res) {
  if(err) {
    console.log('ERROR connecting to ' + dbUri + '. ' + err);
  }
  else {
    console.log('Successfully connected to: ' + dbUri);
  }
});

exports.mongoose = mongoose;