'use strict';

angular.module('services.user', [
  'ngResource'
]).
factory('User', function ($resource) {
  return $resource('/api/users/:id', {}, {
    add: { method: 'POST' },
    query: { method: 'GET', isArray: true },
    update: { method: 'PUT' },
    remove: { method: 'DELETE' }
  });
});