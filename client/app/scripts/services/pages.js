'use strict';
/**
 * @ngdoc service
 * @name getlancerApp.page
 * @description
 * # page
 * Factory in the getlancerApp.
 */
angular.module('getlancerApp')
    .factory('pages', ['$resource', function($resource) {
        return $resource('http://localhost:8080/api/v1/pages', {}, {
            get: {
                method: 'GET'
            }
        });
  }]);