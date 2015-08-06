var mongoose = require('mongoose');
var bcrypt = require('bcrypt-nodejs');
var bluebird = require('bluebird');

// var mongoose = require('mongoose');

/*
 *    Connection stuff to help test the database connection
 */

// var url = "mongodb://banal:banal@ds031203.mongolab.com:31203/banal";

// mongoURI = url;
// mongoose.connect("mongodb://banal:banal@ds031203.mongolab.com:31203/heroku_b2mnmqj4/");

// // Run in seperate terminal window using 'mongod'
// var db = mongoose.connection;
// db.on('error', console.error.bind(console, 'connection error:'));
// db.once('open', function () {
//  console.log('Mongodb connection open');
// });
// module.exports = db;




var userSchema = mongoose.Schema({
  username: { type: String, required: true, index: { unique: true } },
  password: { type: String, required: true },
  location: { type: String},
  email: {type: String, index: { unique: true }},
  talent: { type: Object}
});

userSchema.statics.findAllTalents = function(name, cb){
  return this.find({'name': name}, cb)
}

var User = mongoose.model('User', userSchema);

User.comparePassword = function(candidatePassword, savedPassword, cb) {
  bcrypt.compare(candidatePassword, savedPassword, function(err, isMatch) {
    if (err) return cb(err);
    cb(null, isMatch);
  });
};

userSchema.pre('save', function(next){
  var cipher = bluebird.promisify(bcrypt.hash);
  return cipher(this.password, null, null).bind(this)
    .then(function(hash) {
      this.password = hash;
      next();
    });
});

User.getAllTalents = function(talent, callback){

}

User.getTalent = function(talent, callback){

}

module.exports = User;

// var patrick = new User({
//   username: "Patrick2",
//   password: "Test",
//   location: "Hawaii",
//   email: "Pavtran2@gmail.com",
//   talent: {'Piano': 2}
// })
// console.log(patrick);
// patrick.save(function(err){
//   if(err) console.log(err);
//   console.log('successful!');
// })

// (User.find(function(err, results){
//   console.log(results);
// }));