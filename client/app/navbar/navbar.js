'use strict';

angular.module('mean-vagrant.navbar', [
]).
controller('NavCtrl', function ($scope, $location) {
  $scope.items = [
    { path: '/', title: 'Home' },
    { path: '/about', title: 'About'}
  ];

  $scope.isActive = function (item) {
    if(item.path == $location.path()) {
      return true;
    }
    
    return false;
  };
});