'use strict';

/* Services */

angular.module('mean-vagrant.services', [
  'ngResource'
]).
// resource for querying users
factory('User', ['$resource',
  function($resource) {
    return $resource('/api/users/:id', {}, {
      query: { method: 'GET', isArray: true }
    });
}]);
