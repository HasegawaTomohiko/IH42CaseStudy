const mongoose = require("mongoose");
const moment = require('moment-timezone');
const Schema = mongoose.Schema;

const LocationSchema = new Schema({
  driverId : {type: String, required : true },
  timestamp : {type: Date, default: () => moment().tz('Azia/Tokyo').toDate()},
  lat : { type: Number, required: true },
  lon : { type : Number, required : true }
},{
  timestamps : false,
});

const Locations = mongoose.model('Locations',LocationSchema);

module.exports = Locations;