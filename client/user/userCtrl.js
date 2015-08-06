angular.module('app.user', [])
.controller('UserController',['$scope', '$routeParams', '$http', 
  function($scope, $routeParams, $http){
    $scope.username = $routeParams.username
}]);
