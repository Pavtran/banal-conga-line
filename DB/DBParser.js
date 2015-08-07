var db = require('./config');
var User = require('./user.js');
var Request = require('./request.js');
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
exports.addUser = addUser = function(userData, callback){
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
exports.removeUser = removeUser = function(usrname, callback){
  username = parseUsername(usrname);
  User.remove({'username': username}, function(err){
    if(err){
      console.log(err);
      callback(err);
    }
  });
}


/**
 *  Function: addTalents
 *    Adds talents to a username
 *  Params: username (as a string or object)
 *          Talents: Object
 *          Callback
**/
exports.addTalents = addTalents = function(usrname, talents, callback){
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

/**
 *  Request based stuff
**/

//Adds request to database
exports.addRequest = addRequest = function(requestData, callback){
  var request = new rRquest(requestData);
  request.save(function(err, requestObj){
    if(err) console.log(err)
    else{
      console.log("request successfully added!");
      callback(requestObj);
    }
  });
}

exports.toggleRequest = toggleRequest = function(request, callback){
  if(request.active){
    toggleRequestFalse(request, callback);
  } else{
    toggleRequestTrue(request, callback);
  }
}

exports.toggleRequstFalse = toggleRequestFalse = function(request, callback){
  Request.update(request._id, {'active': false});
}

exports.toggleRequestTrue = toggleRequestTrue = function(request, callback){
  Request.update(request._id, {'active': true});
}

exports.getReqTalents = getReqTalents = function(talent, callback){
  //Get all users related to requested talent
  var query = {'talents': talent};
  User.find(talent, function(err, results){
    if (err) console.log(err);
    else callback(results);
  })
}

exports.parseReq = parseReq = function(request, callback){
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

exports.getRequests = getRequests = function(callback){
  Request.find(function(err, results){
    if(err) console.log(err);
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