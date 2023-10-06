'use strict';
/**
 * @ngdoc service
 * @name getlancerApp.userProfile
 * @description
 * # userProfile
 * Factory in the getlancerApp.
 */
angular.module('getlancerApp')
    .factory('userSettings', ['$resource', function($resource) {
        return $resource('http://localhost:8080/api/v1/users/:id', {}, {
            update: {
                method: 'PUT',
                params: {
                    id: '@id'
                }
            },
            get: {
                method: 'GET',
                params: {
                    id: '@id'
                }
            }
        });
    }])
    .factory('UserMeFactory', ['$resource', function($resource) {
        return $resource('http://localhost:8080/api/v1/me', {}, {
            get: {
                method: 'GET'
            }
        });
    }]);