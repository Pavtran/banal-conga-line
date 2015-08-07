angular.module('app.nav',[])
.controller('loggedInNavController', ['$scope', function($scope){
  $scope.showme = false;
  
  $scope.request = {};

  $scope.togglePostRequest = function(){
    $scope.showme = !$scope.showme;  
  };
}]);