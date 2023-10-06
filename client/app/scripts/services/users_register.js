'use strict';
/**
 * @ngdoc service
 * @name getlancerApp.usersRegister
 * @description
 * # usersRegister
 * Factory in the getlancerApp.
 */
angular.module('getlancerApp')
    .factory('usersRegister', ['$resource', function($resource) {
        return $resource('http://localhost:8080/api/v1/users/register', {}, {
            create: {
                method: 'POST'
            }
        });
    }]);