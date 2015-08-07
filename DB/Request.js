var mongoose = require('mongoose');
var bluebird = require('bluebird');
var User = require('./User');

var requestSchema = mongoose.Schema({
  requester: { type: String, required: true },
  talents: { type: Object, required: true},
  location: { type: String, required: true}
});

var Request = mongoose.model('Request', requestSchema);

requestSchema.pre('save', function(next){
  console.log(this);
  next();
});


module.exports = Request;
