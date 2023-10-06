'use strict';
/**
 * @ngdoc service
 * @name getlancerApp.languages
 * @description
 * # languages
 * Factory in the getlancerApp.
 */
angular.module('getlancerApp')
    .factory('languages', ['$resource', function($resource) {
        return $resource('http://localhost:8080/api/v1/languages', {}, {
            get: {
                method: 'GET'
            }
        });
  }]);