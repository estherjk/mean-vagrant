'use strict';

angular.module('mean-vagrant.about', [
  'ngRoute'
]).
config(function ($routeProvider) {
  $routeProvider.
    when('/about', {
      templateUrl: '/app/about/about.html'
    });
});