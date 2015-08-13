angular.module('app.user', [])
.controller('UserController',['$sce', '$scope', '$location', '$window','$routeParams', 'HttpRequests', 'Util',
  function($sce, $scope, $location, $window, $routeParams, HttpRequests, Util){
    $scope.user = {};
    $scope.modifyLink = Util.modifyLink;

    $scope.trustSrc = function(src) {
      return $sce.trustAsResourceUrl(src);
    };
  
    $scope.deleteRequest = function(index) {
      HttpRequests.makeRequestInactive($scope.requests[index]._id);
      $scope.requests[index] = 0; // TODO: this should run Requests.makeRequestInactive()
    };
    
    var init = function() {
      
      if ($routeParams.uid === undefined) {
        console.log('no user id');
        $location.path('/user/' + $window.localStorage.getItem('uid'));
      }

      HttpRequests.getUser( $routeParams.uid )
      .then(function(user){
        // if user is null redirect to user's profile
        console.log('sfsdaf', user);
        if (user.data === "null") {
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

    // HttpRequests.getRequests( {name: $routeParams.username})
    //   .then(function(data){
    //     console.log('received requests', data);
    //     $scope.requests = data;
    //   }, function(err){
    //     console.log('error getting requests', err);
    //   });
}]);
