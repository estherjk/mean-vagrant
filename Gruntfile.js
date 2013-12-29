var db = require('./db');
var User = require('./models/user');

module.exports = function(grunt) {

  grunt.registerTask('dbseed', 'seed the database', function() {
    grunt.task.run('adduser:JSmith:John:Smith');
  });

  grunt.registerTask('adduser', 'add a user to the database', function(userId, firstname, lastname) {
    var user = new User({
      userId: userId,
      firstname: firstname,
      lastname: lastname});
    
    // save call is async, put grunt into async mode to work
    var done = this.async();

    user.save(function(err) {
      if(err) {
        console.log('Error: ' + err);
        done(false);
      }
      else {
        console.log('saved user: ' + user.username);
        done();
      }
    });
  });

  grunt.registerTask('dbdrop', 'drop the database', function() {
    // async mode
    var done = this.async();

    db.mongoose.connection.on('open', function () { 
      db.mongoose.connection.db.dropDatabase(function(err) {
        if(err) {
          console.log('Error: ' + err);
          done(false);
        }
        else {
          console.log('Successfully dropped db');
          done();
        }
      });
    });
  });

};
