'use strict';
/**
 * @ngdoc service
 * @name getlancerApp.usersChangePassword
 * @description
 * # usersChangePassword
 * Factory in the getlancerApp.
 */
angular.module('getlancerApp')
    .factory('usersChangePassword', ['$resource', function($resource) {
        return $resource('http://localhost:8080/api/v1/users/:id/change_password', {}, {
            changePassword: {
                method: 'PUT',
                params: {
                    id: '@id'
                }
            }
        });
    }]);