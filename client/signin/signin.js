angular.module('app.signin', ['app.services'])

.controller('signinController', ['$scope', '$location', 'HttpRequests', 'Auth', '$window', function($scope, $location, HttpRequests, Auth, $window){
  $scope.user = {
    talents: []
  };

  $scope.newTalent = {};


  $scope.addTalent = function(){
    if ( $scope.newTalent.talent !== "" && $scope.newTalent.level !== ""){
      $scope.user.talents.push({
        talent: $scope.newTalent.talent,
        level: $scope.newTalent.level
      });
    $scope.newTalent.talent = "";
    $scope.newTalent.level = "";
    }
    else {
      // TODO: add a message that one of the forms is blank
    }
  };

  $scope.login = function(){
    Auth.login($scope.user.email, $scope.user.password)
    .then(function(authData){
      // login successful with user with ID: authData.uid
      $window.localStorage.setItem('uid', authData.uid);
      $location.path('/user/'+ authData.uid); // /user/UID
    }).catch(function(error){
      console.error("Firebase login failed:",error);
      $location.path('/login');
    });
  };

  $scope.signup = function() {
    $scope.user.talents = convertTalentsToObject();

    Auth.signup($scope.user.email, $scope.user.password)
    .then(function(userData){
      console.log('line 42 signin', userData);
      $scope.user.uid = userData.uid;
      HttpRequests.signupUser($scope.user, userData)
      .then(function(response){
        $window.localStorage.setItem('uid', userData.uid);
        console.log('user posted', response);
        $location.path('/user/'+ userData.uid);
      }, function(error) {
        console.log('error posting user', error);
      }); 
    })
    .catch(function(error){
      console.log("Firebase signup failed:",error);
    })
    .catch(function(error){
      console.log('its an error', error);
    });
  };


  var convertTalentsToObject = function() {
    var converted = {};
    for (var i = 0; i < $scope.user.talents.length; i++){
      converted[$scope.user.talents.talent] = $scope.user.talents.level; 
    }
    return converted;
  };
}]);