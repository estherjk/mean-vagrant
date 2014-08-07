var mongoose = require('mongoose')
  , Schema = mongoose.Schema;

// user schema
var userSchema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  city: { type: String }
});

// user model
var User = mongoose.model('User', userSchema);

// export user model
module.exports = User;

// query for all users
module.exports.getUsers = function (callback) {
  User.find({}, function (err, users) {
    if(err) return callback(err);
    callback(null, users);
  });
};

// query for a user
module.exports.getUser = function (id, callback) {
  User.findOne({ _id: id }, function (err, user) {
    if(err) return callback(err);
    callback(null, user);
  });
};

// add user
module.exports.addUser = function (info, callback) {
  var user = new User(info);
  user.save(function (err) {
    if(err) return callback(err);
    callback(null, user);
  });
};

// update user
module.exports.updateUser = function (id, info, callback) {
  User.update({ _id: id }, info, function (err) {
    if(err) return callback(err);
    callback(null);
  });
};

// remove user
module.exports.removeUser = function (id, callback) {
  User.remove({ _id: id }, function (err) {
    if(err) return callback(err);
    callback(null);
  });
};