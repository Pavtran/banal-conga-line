var db = require('./Config');
var User = require('./User.js');
var Request = require('./Request.js');
/**
 *  DBParser file
 *  Purpose of this is to communicate between the frontend and database
 *  Functions:
 *    Userstuff: addUser, removeUser, verifyUser,
 *

/**
 *  Function: addUser
 *    Takes in userData as an object. Does a callback of created Document if succesful
 *  Params: userData (Object)
*           Callback
**/
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

/**
 *  Function: removeUser
 *    Removes the document from database if document has given username
 *  Params: Username (as a string or as an object)
 *          Callback
**/
var removeUser = function(usrname, callback){
  username = parseUsername(usrname);
  User.remove({'username': username}, function(err){
    if(err){
      console.log(err);
      callback(err);
    }
  });
}

var verifyUser = function(userData, callback){
  var username = userData.username;
  var password = userData.password;
}

/**
 *  Function: addTalents
 *    Adds talents to a username
 *  Params: username (as a string or object)
 *          Talents: Object
 *          Callback
**/
var addTalents = function(usrname, talents, callback){
  //add talents to database for given user
  callback = callback || function(element){ console.log(element)};;
  username = parseUsername(usrname);
  var query = {'username': username};
  var options = {};
  User.update(query, {'talents': talents}, options, function(err, result){
    if(err) console.log(err);
    else callback(result);
  });
}



var getReqTalents = function(talent, callback){
  //Get all users related to requested talent
  var query = {'talents': talent};
  User.find(talent, function(err, results){
    if (err) console.log(err);
    else callback(results);
  })
}

var parseReq = function(request, callback){
  //Parses the request, and returns the users that meets the criteria
  var query = {
    'location': request.location
  }
  // console.log(query);
  User.find(query, 'username location talents', function(err, results){
    if (err) console.log(err);
    else callback(results);
  });
}

// var 


//Parses username. If it's just a string, returns it as a string. 
//If it's a username
var parseUsername = function(username){
  if(typeof username === 'string'){
    return username;
  }
  else if(typeof username === 'object'){
    return username.username;
  }
}

// removeUser('Patrick');

var patrick =  {
  username: "Patrick",
  password: "Test",
  location: "Oakland",
  email: "Pavtran2@gmail.com"
}

// console.log(patrick);
// addUser(patrick);

var talents = {
  'Piano': 5,
  'Guitar': 7,
  'Trumpet': 5
}

// User.find(function(err, results){
//   console.log(results);
// });
// 
// addTalents('Patrick', talents);
// removeUser({'username': 'Patrick'});

// (User.find(function(err, results){
//   console.log(results);
// }));

// var request = new Request({
//   requester: "Patrick",
//   talents: {'Piano': 4},
//   location: 'Oakland'
// })

// request.save(function(err){
//   if(err) console.log(err);
//   console.log('successful!');
// })

// Request.find(function(err, results){
//   console.log(results);
// })

// getReqTalents('Fwewetlute', function(results){
//   console.log("People who can play the Piano" + results);
// });

var requestOne;
Request.findOne(function(err, results){
  requestOne = results;
  console.log(requestOne);
  parseReq(requestOne, function(results){
    console.log("People who meet the request criteria" + results);
  })

});
// console.log(requestOne);
// parseReq(requestOne, function(results){
//   console.log("People who meet the request criteria" + results);
// })
