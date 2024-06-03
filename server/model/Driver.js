const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DriverSchema = new Schema({
  driverID : {type: String, require: true, unique: true},
  driverName : {type: String},
  password : {type: String}
},{
  timestamps: false
});

module.exports = mongoose.model('Drivers',DriverSchema);