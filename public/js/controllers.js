'use strict';

/* Admin controllers */

angular.module('mean-vagrant.controllers', [
]).
// sample controller for the home page
controller('HomeCtrl', function($scope, User) {
  $scope.user = User.get({id: 'JSmith'}, function() {});
}).

// sample controller for the about page
controller('AboutCtrl', function($scope) {
  $scope.description = 'MEAN is a full stack JavaScript environment for developing web applications';
});