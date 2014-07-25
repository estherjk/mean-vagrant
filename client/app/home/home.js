'use strict';

angular.module('home', [
  'ngRoute'
]).
config(function ($routeProvider) {
  $routeProvider.
    when('/', {
      templateUrl: '/app/home/home.html'
    });
});