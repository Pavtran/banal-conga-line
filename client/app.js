var app = angular.module('app', [
  'app.user',
  'ngRoute'
]);

app.config(function($routeProvider){
  $routeProvider
    .when('/user/:username', {
      templateUrl: '/user/userView.html',
      controller: 'UserController'
    })
    .otherwise({redirectTo: '/user'});

  });


