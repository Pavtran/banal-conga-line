var mongoose = require('mongoose');



var url = 'mongodb://banal:banal@ds031203.mongolab.com:31203/heroku_b2mnmqj4';

mongoURI = url;
mongoose.connect(mongoURI);

// Run in seperate terminal window using 'mongod'
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
 console.log('Mongodb connection open');
});

module.exports = db;


