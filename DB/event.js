var mongoose = require('mongoose');
var bluebird = require('bluebird');

var eventSchema = mongoose.Schema({
  name: { type: String },
  description: { type: String },
  location: { type: String },
  neighborhood: { type: String },
  zipcode: { type: String },
  city: { type: String },
  address: { type: String },
  uid: { type: String },
  hashtag: [String],
  users: { type: Array },
  active: { type: Boolean, required: true , default: true}
});

var Event = mongoose.model('Event', eventSchema);

eventSchema.pre('save', function(next){
  console.log("Event being added", this);
  next();
});


module.exports = Event;
