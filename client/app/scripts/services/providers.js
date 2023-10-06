'use strict';
/**
 * @ngdoc service
 * @name getlancerApp.providers
 * @description
 * # providers
 * Factory in the getlancerApp.
 */
angular.module('getlancerApp')
    .factory('providers', ['$resource', function($resource) {
        return $resource('http://localhost:8080/api/v1/providers', {}, {
            get: {
                method: 'GET'
            }
        });
  }]);