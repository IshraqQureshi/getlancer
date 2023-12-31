'use strict';
/**
 * @ngdoc service
 * @name ofos.postGateways
 * @description
 * # postGateways
 * Factory in the ofos.
 */
angular.module('base')
    .factory('postGateways', ['$resource', function($resource) {
        return $resource('http://localhost:8080/api/v1/post_gateways', {}, {
            save: {
                method: 'POST'
            }
        });
}]);