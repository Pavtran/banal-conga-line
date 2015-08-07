angular.module('app.user', [])
.controller('UserController',['$scope', '$routeParams', '$http', 
  function($scope, $routeParams, $http){
    $scope.user = {
      image: 'https://avatars3.githubusercontent.com/u/13667301?v=3&s=200',
      name: $routeParams.username,
      location: 'San Francisco',
      talents: [{ talent: 'trombone', level: 11}, {talent: 'guitar', level: 4}],
      contact: 'develiot.com'
    };

    $scope.requests = [
      { talent: 'drums', level: '8', location: 'emeryville'},
      { talent: 'trumpet', level: '7', location: 'the mission'},
      { talent: 'violin', level: '5', location: 'novato'}
    ];

    $scope.deleteRequest = function(index) {
      $scope.requests[index] = 0; // TODO: this should run Requests.deleteRequest
    };

    // TODO: call to User.getUser( name: $routeParams.username)
    // TODO: call to Request.getRequest( name: $routeParams.username)
}]);
