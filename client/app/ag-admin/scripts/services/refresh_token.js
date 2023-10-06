'use strict';
/**
 * @ngdoc service
 * @name baseApp.refreshToken
 * @description
 * # refreshToken
 * Factory in the baseApp.
 */
angular.module('base')
    .factory('refreshToken', ['$resource', function($resource) {
        return $resource('http://localhost:8080/api/v1/oauth/refresh_token', {}, {
            get: {
                method: 'GET'
            }
        });
  }]);