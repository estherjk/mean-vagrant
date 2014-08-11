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
      scripts: {
        files: ['**/*'],
        tasks: ['mochaTest'],
        options: {
          debounceDelay: 250
        }
      }
    }
  });

  grunt.registerTask('default', []);
};