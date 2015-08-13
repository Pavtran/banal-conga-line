angular.module('app.nav',[])
.controller('loggedInNavController', ['$scope','$location', 'HttpRequests', 'Auth', function($scope, $location, HttpRequests, Auth){
  $scope.showRequests = false;
  $scope.showEvents = false;
  
  $scope.request = {};
  $scope.ev = {};

  $scope.redirect = function(newpath){
    console.log(newpath)
    $location.path(newpath);
  };

  $scope.togglePostRequest = function(){
    $scope.showRequests = !$scope.showRequests;  
  };

  $scope.togglePostEvent = function(){
    $scope.showEvents = !$scope.showEvents;  
  };

  $scope.sendPostRequest = function(){
    $scope.request.uid = Auth.getUid();
    HttpRequests.postRequest($scope.request)
    .then(function(data){
      console.log('request posted', data);
    }, function(err){
      console.log('error posting request', err);
    });
  }

  $scope.sendPostEvent = function(){
    HttpRequests.postEvent($scope.ev)
      .then(function(data){
        console.log('event posted', data);
      }, function(err){
        console.log('error posting event', err);
      });
  }

  $scope.logout = function(){
    Auth.logout();
    $location.path('/login');
  };

}]);