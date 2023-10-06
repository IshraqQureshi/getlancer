'use strict';
/**
 * @ngdoc service
 * @name getlancerApp.countries
 * @description
 * # countries
 * Factory in the getlancerApp.
 */
angular.module('getlancerApp')
    .factory('countries', ['$resource', function($resource) {
        return $resource('http://localhost:8080/api/v1/countries', {}, {
            get: {
                method: 'GET'
            }
        });
  }]);