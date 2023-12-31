'use strict';
/**
 * @ngdoc service
 * @name ofos.getGateways
 * @description
 * # getGateways
 * Factory in the ofos.
 */
angular.module('base')
    .factory('getGateways', ['$resource', function($resource) {
        return $resource('http://localhost:8080/api/v1/get_gateways', {}, {
            get: {
                method: 'GET'
            }
        });
}]);