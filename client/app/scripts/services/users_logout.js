'use strict';
/**
 * @ngdoc service
 * @name getlancerApp.usersLogout
 * @description
 * # usersLogout
 * Factory in the getlancerApp.
 */
angular.module('getlancerApp')
    .factory('usersLogout', ['$resource', function($resource) {
        return $resource('http://localhost:8080/api/v1/users/logout', {}, {
            logout: {
                method: 'GET'
            }
        });
    }]);