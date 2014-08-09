module.exports = function (grunt) {
  grunt.loadNpmTasks('grunt-karma');

  grunt.initConfig({
    karma: {
      unit: {
        options: {
          frameworks: ['jasmine'],
          port: 8000,
          browsers: ['PhantomJS'],
          logLevel: 'INFO',
          files: [
            'bower_components/angular/angular.js',
            'bower_components/angular-mocks/angular-mocks.js',
            'app/**/*.js',
            'test/**/*.js'
          ]
        }
      }
    }
  });

  grunt.registerTask('default', []);
};