/*
 * REST API
 */

var User = require('../models/user');

// get all users
exports.getUsers = function(req, res) {
  User.getUsers(function(err, users) {
    if(err) {
      res.status(404).send(err);
    }
    else {
      res.json(users);
    }
  });
};

// get user
exports.getUser = function(req, res) {
  User.getUser(req.params.id, function(err, user) {
    if(err) {
      res.status(404).send(err);
    }
    else {
      res.json(user);
    }
  });
};