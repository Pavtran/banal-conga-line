var mongoose = require('mongoose');
var bluebird = require('bluebird');
var User = require('./user');

var requestSchema = mongoose.Schema({
  requester: { type: String, required: true },
  talent: { type: Object, required: true },
  location: { type: String, required: true },
  active: { type: Boolean, required: true , default: true}
});

var Request = mongoose.model('Request', requestSchema);

requestSchema.pre('save', function(next){
  console.log(this);
  next();
});


module.exports = Request;
