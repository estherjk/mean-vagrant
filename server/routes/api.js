var express = require('express') 
  , User = require('../models/user');

var api = express.Router();

// invoked for any request passed to this router
api.use(function (req, res, next) {
  // ... some logic here ... like any other middleware
  next();
});

api.route('/users')
  .get(function (req, res) {
    User.getUsers(function (err, users) {
      if(err) {
        res.status(500).send(err);
      }
      else {
        res.json(users);
      }
    });
  })
  .post(function (req, res) {
    User.addUser(req.body, function (err) {
      if(err) {
        res.status(500).send(err);
      }
      else {
        res.json({ success: true });
      }
    });
  });

api.route('/users/:id')
  .get(function (req, res) {
    User.getUser(req.params.id, function(err, post) {
      if(err) {
        res.status(500).send(err);
      }
      else {
        res.json(post);
      }
    });
  })
  .put(function (req, res) {
    var info = req.body;

    // make sure _id is deleted before updating
    delete info._id;

    User.updateUser(req.params.id, info, function (err) {
      if(err) {
        res.status(500).send(err);
      }
      else {
        res.json({ success: true });
      }
    });
  })
  .delete(function (req, res) {
    User.removeUser(req.params.id, function (err) {
      if(err) {
        res.status(500).send(err);
      }
      else {
        res.json({ success: true });
      }
    });
  });

module.exports = api;