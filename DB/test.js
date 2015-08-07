var dbparse = require('./dbparser');
/**
 * Testing
**/
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
// Request.findOne(function(err, results){
//   requestOne = results;
//   console.log(requestOne);
//   parseReq(requestOne, function(results){
//     console.log("People who meet the request criteria" + results);
//   })

// });
// console.log(requestOne);
// parseReq(requestOne, function(results){
//   console.log("People who meet the request criteria" + results);
// })
dbparse.getRequests(function(result){
  console.log(result);
})