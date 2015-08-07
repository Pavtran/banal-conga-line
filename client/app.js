var app = angular.module('app', [
  'app.services',
  'app.user',
  'app.nav',
  'ngRoute'
]);

app.config(function($routeProvider){
  $routeProvider
    .when('/user/:username', { // TODO: how do we grab current user's name
      templateUrl: '/user/userView.html',
      controller: 'UserController'
    })
    .otherwise({redirectTo: '/user'});

  });


