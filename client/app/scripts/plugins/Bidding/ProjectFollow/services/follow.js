  'use strict';
  angular.module('getlancerApp.Bidding.ProjectFollow')
      .factory('BookMarkProject', ['$resource', function($resource) {
        return $resource('http://localhost:8080/api/v1/followers/:id', {}, {
            post: {
                method: 'POST'
            },
            delete: {
                method: 'DELETE'
            }
        });
  }]);