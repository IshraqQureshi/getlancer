'use strict';
/**
 * @ngdoc service
 * @name getlancerApp.usersForgotPassword
 * @description
 * # usersForgotPassword
 * Factory in the getlancerApp.
 */
angular.module('getlancerApp')
    .factory('usersForgotPassword', ['$resource', function($resource) {
        return $resource('http://localhost:8080/api/v1/users/forgot_password', {}, {
            forgetPassword: {
                method: 'POST'
            }
        });
    }]);