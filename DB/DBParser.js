var db = require('./Config');
var User = require('./User.js');


var addUser = function(userData, callback){
  //Add new user to database
  var user = new User(userData);
  user.save(function(err, userObj){
    if(err) console.log(err)
    else{
      console.log("User successfully added!");
      callback(userObj);
    }
  });
}

var removeUser = function(username, callback){
  User.remove({'username': username}, function(err){
    if(err){
      console.log(err);
      callback(err);
    }
  });
}

var addTalents = function(s){
  //add talents to database for given user
}

var getReqTalents = function(s){
  //Get all users related to requested talent
}

var parseReqTalents = function(s){

}

// var 

(User.find(function(err, results){
  console.log(results);
}));

removeUser('Patrick');