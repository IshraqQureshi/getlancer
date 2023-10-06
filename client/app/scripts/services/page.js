'use strict';
/**
 * @ngdoc service
 * @name getlancerApp.page
 * @description
 * # page
 * Factory in the getlancerApp.
 */
angular.module('getlancerApp')
    .factory('page', ['$resource', function($resource) {
        return $resource('http://localhost:8080/api/v1/pages/:id', {}, {
            get: {
                method: 'GET',
                params: {
                    id: '@id'
                }
            }
        });
    }]);