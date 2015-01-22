'use strict';


module.exports = function(grunt) {


  grunt.loadNpmTasks('grunt-karma');
  require('load-grunt-tasks')(grunt);


  grunt.config.init({
    karma: {
      all: {
        configFile: './karma.conf.js'
      }
    }
  });


  grunt.registerTask('test', function() {
    grunt.task.run([
      'karma:all'
    ]);
  });
};