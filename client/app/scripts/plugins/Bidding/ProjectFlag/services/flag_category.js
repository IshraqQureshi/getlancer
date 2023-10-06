  'use strict';
  angular.module('getlancerApp.Bidding.ProjectFlag')
      .factory('ReportProjectCategories', ['$resource', function($resource) {
          return $resource('http://localhost:8080/api/v1/flag_categories', {}, {
              get: {
                  method: 'GET'
              }
          });
 }]);