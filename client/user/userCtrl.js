angular.module('app.user', [])
.controller('UserController',['$scope', '$location', '$window','$routeParams', 'HttpRequests',
  function($scope, $location, $window, $routeParams, HttpRequests){
    $scope.user = {};

    $scope.deleteRequest = function(index) {
      HttpRequests.makeRequestInactive($scope.requests[index]._id);
      $scope.requests[index] = 0; // TODO: this should run Requests.makeRequestInactive()
    };

    var init = function() {
      console.log('$routeparams',$routeParams.uid);
      HttpRequests.getUser( $routeParams.uid )
      .then(function(user){
        // if user is null redirect to user's profile
        if (user.length) {
          $location.path('/user/' + $window.localStorage.getItem('uid'));
        }

        $scope.user = user.data;

      }).catch(function(err){ 
        console.log('error fetching user', err);
      });

      HttpRequests.getRequests( $routeParams.uid )
      .then(function(requests){
        $scope.requests = requests.data;
      }).catch(function(err){ 
        console.log('error fetching requests', err);
      });
    };

    init();

    HttpRequests.getRequests( {name: $routeParams.username})
      .then(function(data){
        console.log('received requests', data);
        $scope.requests = data;
      }, function(err){
        console.log('error getting requests', err);
      });
}]);
