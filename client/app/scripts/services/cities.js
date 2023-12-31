'use strict';
/**
 * @ngdoc service
 * @name getlancerApp.cities
 * @description
 * # cities
 * Factory in the getlancerApp.
 */
angular.module('getlancerApp')
    .factory('cities', ['$resource', function($resource) {
        return $resource('http://localhost:8080/api/v1/cities', {}, {
            get: {
                method: 'GET'
            }
        });
  }]);