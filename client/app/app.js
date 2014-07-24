'use strict';

angular.module('mean-vagrant', [
  'ngRoute',
  'mean-vagrant.navbar',
  'mean-vagrant.home',
  'mean-vagrant.about'
]).
config(function ($routeProvider, $locationProvider) {
  $locationProvider.html5Mode(true);
  $routeProvider.otherwise({ redirectTo:'/' });
});