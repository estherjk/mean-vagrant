'use strict';

angular.module('directives.mv-user-info', [
]).
directive('mvUserInfo', function () {
  return {
    restrict: 'E',
    scope: {
      user: '='
    },
    templateUrl: '/app/common/directives/mv-user-info/mv-user-info.html'
  };
});