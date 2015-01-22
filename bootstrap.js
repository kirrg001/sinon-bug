'use strict';


var tests = [];

for (var file in window.__karma__.files) {
  //console.log(file)
  if (window.__karma__.files.hasOwnProperty(file)) {
    if (/.spec./.test(file)) {
      tests.push(file);
    }
  }
}


requirejs.config({


  baseUrl: '/base/',


  paths: {},


  shim: {},


  deps: tests,


  callback: function() {
    require([], function() {
      console.log(window);
      window.__karma__.start();
    });
  }
});