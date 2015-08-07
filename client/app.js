var app = angular.module('app', [
  'app.services',
  'app.request',
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
    .when('/requests', {
      templateUrl: 'request/requestView.html',
      controller: 'RequestController'
    })
    .otherwise({redirectTo: '/user/eliot'});

  });


