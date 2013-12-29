var mongoose = require('mongoose')
  , Schema = mongoose.Schema;

// user schema
var userSchema = new Schema({
  userId: { type: String, required: true },
  firstname: { type: String, required: true },
  lastname: { type: String, required: true }
});

// user model
var User = mongoose.model('User', userSchema);

// export user model
module.exports = User;

// query for all users
module.exports.getUsers = function(callback) {
  User.find({}, function(err, users) {
    if(err) return callback(err);
    callback(null, users);
  });
};

// query for a user
module.exports.getUser = function(id, callback) {
  User.findOne({ userId: id }, function(err, user) {
    if(err) return callback(err);
    callback(null, user);
  });
};