angular.module('app.request', [])
.controller('RequestController', ['$scope', '$http', 
  function($scope, $http){
    $scope.search = {};

    $scope.requests = [
      { talent: 'drums', level: '8', location: 'emeryville'},
      { talent: 'trumpet', level: '7', location: 'the mission'},
      { talent: 'violin', level: '5', location: 'novato'}
    ];

    // TODO: call to Request.getRequest( {with inputs from the form}) 
}]);