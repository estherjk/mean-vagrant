'use strict';

angular.module('navbar', [
]).
controller('NavCtrl', function ($scope, $location) {
  $scope.items = [
    { path: '/', title: 'Home' },
    { path: '/example', title: 'Example'}
  ];

  $scope.isActive = function (item) {
    if(item.path == $location.path()) {
      return true;
    }
    
    return false;
  };
});