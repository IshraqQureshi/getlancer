  'use strict';
  angular.module('getlancerApp.Bidding.ProjectFlag')
      .factory('ReportProject', ['$resource', function($resource) {
          return $resource('http://localhost:8080/api/v1/flags', {}, {
              get: {
                  method: 'GET'
              },
              post: {
                  method: 'POST'
              }
          });
 }]);