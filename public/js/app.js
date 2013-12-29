'use strict';

// Declare app level module which depends on filters, and services

angular.module('mean-vagrant', [
  'mean-vagrant.controllers',
  'mean-vagrant.directives',
  'mean-vagrant.filters',
  'mean-vagrant.services',

  'ngRoute'
]).
config(function ($routeProvider, $locationProvider) {
  $routeProvider.
    when('/', {
      templateUrl: '/partials/home'
    }).
    when('/about', {
      templateUrl: '/partials/about'
    }).
    otherwise({
      redirectTo: '/'
    });

  $locationProvider.html5Mode(true);
});
