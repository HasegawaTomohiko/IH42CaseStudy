const mongoose = require("mongoose");
const moment = require('moment-timezone');
const Schema = mongoose.Schema;

const LocationSchema = new Schema({
  driverID : {type: Schema.Types.ObjectId, ref: 'Drivers'},
  timestamp : {type: Date, default: () => moment().tz('Azia/Tokyo').toDate()},
  lat : { type: Number, required: true },
  lon : { type : Number, required : true }
},{
  timestamps : false,
});

module.exports = mongoose.model('Locations',LocationSchema);