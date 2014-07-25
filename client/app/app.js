'use strict';

angular.module('mean-vagrant', [
  'ngRoute',
  'navbar',
  'home',
  'example',
  'directives.mv-user-info',
  'services.user'
]).
config(function ($routeProvider, $locationProvider) {
  $locationProvider.html5Mode(true);
  $routeProvider.otherwise({ redirectTo:'/' });
});