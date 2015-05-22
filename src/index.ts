/// <reference path="typings/tsd" />

requirejs.config({
  paths: {
    angular: '/vendors/angular/angular'
  },
  shim: {
    angular: {
      exports: 'angular'
    }
  },
  deps: ['app']
});
