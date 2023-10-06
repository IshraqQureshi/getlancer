'use strict';
/**
 * @ngdoc service
 * @name ofos.zazpaySynchronize
 * @description
 * # zazpaySynchronize
 * Factory in the ofos.
 */
angular.module('base')
    .factory('zazpaySynchronize', function($resource) {
        return $resource('http://localhost:8080/api/v1/payment_gateways/zazpay_synchronize', {}, {
            get: {
                method: 'GET'
            }
        });
    });