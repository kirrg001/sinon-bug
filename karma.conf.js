'use strict';


module.exports = function(config) {
  config.set({
    basePath: '.',


    frameworks: ['mocha', 'requirejs', 'sinon'],


    reporters: ['spec'],


    browsers: ['Chrome'],


    files: [
      'bootstrap.js'
    ],


    exclude: [],


    // if false, no tests is executed, hm?
    autoWatch: true,


    // run tests and exit
    singleRun: false
  });
};