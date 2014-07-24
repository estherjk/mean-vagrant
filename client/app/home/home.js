'use strict';

angular.module('mean-vagrant.home', [
  'ngRoute'
]).
config(function ($routeProvider) {
  $routeProvider.
    when('/', {
      templateUrl: '/app/home/home.html'
    });
});