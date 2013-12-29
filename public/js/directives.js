'use strict';

/* Directives */

angular.module('mean-vagrant.directives', [
]).
// sample directive
directive('myUser', function() {
  return {
    template: '{{ user.firstname }} {{ user.lastname }}'
  };
});
