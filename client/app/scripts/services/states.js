'use strict';
/**
 * @ngdoc service
 * @name getlancerApp.states
 * @description
 * # states
 * Factory in the getlancerApp.
 */
angular.module('getlancerApp')
    .factory('states', ['$resource', function($resource) {
        return $resource('http://localhost:8080/api/v1/states', {}, {
            get: {
                method: 'GET'
            }
        });
  }]);