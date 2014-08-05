'use strict';

angular.module('example', [
  'ngRoute'
]).
config(function ($routeProvider) {
  $routeProvider.
    when('/example', {
      templateUrl: '/app/example/example.html'
    }).
    when('/example/new-user', {
      templateUrl: '/app/example/new-user.html'
    }).
    when('/example/edit-user/:id', {
      templateUrl: '/app/example/edit-user.html'
    });
}).
controller('UsersCtrl', function ($scope, User) {
  $scope.users = User.query();
}).
controller('UserAddCtrl', function ($scope, $location, User) {
  $scope.user = {
    firstName: undefined,
    lastName: undefined
  };

  $scope.addUser = function () {
    User.add($scope.user, function (msg) {
      if(msg.success) {
        $location.path('/example');
      }
    });
  };
}).
controller('UserEditCtrl', function ($scope, $location, $routeParams, User) {
  $scope.user = User.get({ id: $routeParams.id });

  $scope.updateUser = function () {
    User.update({ id: $routeParams.id }, $scope.user, function (msg) {
      if(msg.success) {
        $location.path('/example');
      }
    });
  };

  $scope.deleteUser = function () {
    User.remove({ id: $routeParams.id }, function (msg) {
      if(msg.success) {
        $location.path('/example');
      }
    });
  };
});