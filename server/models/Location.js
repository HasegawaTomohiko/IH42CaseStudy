const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const LocationSchema = new Schema({
  driverID : {type: Schema.Types.ObjectId, ref: 'Drivers'},
  timestamp : {type: Date, required: true, default: Date.now},
  lat : { type: Number, required: true },
  lon : { type : Number, required : true }
},{
  timestamps : false,
});

module.exports = mongoose.model('Locations',LocationSchema);