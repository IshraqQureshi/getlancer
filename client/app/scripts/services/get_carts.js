'use strict';
/**
 * @ngdoc service
 * @name getlancerApp.getCarts
 * @description
 * # getCarts
 * Factory in the getlancerApp.
 */
angular.module('getlancerApp')
    .factory('getCarts', ['$resource', function($resource) {
        return $resource('http://localhost:8080/api/v1/users/:user_id/carts/:cookie_id', {}, {
            get: {
                method: 'GET',
                params: {
                    user_id: '@user_id',
                    cookie_id: '@cookie_id'
                }
            }
        });
    }]);