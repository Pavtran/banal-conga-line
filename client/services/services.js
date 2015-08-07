angular.module('app.services', [])

.directive('loggedin', [function(){
  return {
    restrict: 'AE',
    replace: true,
    templateUrl: 'nav/loggedinnav.html'
  }
}]);