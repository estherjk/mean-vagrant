module.exports = function (grunt) {
  grunt.loadNpmTasks('grunt-mocha-test');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.initConfig({
    mochaTest: {
      test: {
        options: {
          reporter: 'spec'
        },
        src: ['lib/**/*.spec.js']
      }
    },
    watch: {
      files: ['**/*'],
      tasks: ['mochaTest']
    }
  });

  grunt.registerTask('default', []);
};