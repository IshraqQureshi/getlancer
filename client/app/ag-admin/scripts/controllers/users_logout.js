'use strict';
/**
 * @ngdoc function
 * @name baseApp.controller:UsersLoginCtrl
 * @description
 * # UsersLoginCtrl
 * Controller of the baseApp
 */
angular.module('base')
    .controller('UsersLogoutCtrl', function($scope, $location, $http, $window, adminTokenService, $q, $cookies) {
        $http({
                method: 'GET',
                url: 'http://localhost:8080/api/v1/users/logout'
            })
            .success(function(response) {
                $scope.response = response;
                if ($scope.response.error.code === 0) {
                    $cookies.remove('auth', {
                        path: '/'
                    });
                    $cookies.remove('token', {
                        path: '/'
                    });
                    var promise = adminTokenService.promise;
                    var promiseSettings = adminTokenService.promiseSettings;
                    $q.all([
                           promiseSettings,
                           promise
                        ])
                        .then(function(value) {
                            $location.path('/users/login');
                        });
                }
            });
    });