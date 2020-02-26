// initualize variables
const mongoose = require('mongoose');
// initialation of variables ended
const Schema = mongoose.Schema;

const logSchema = new Schema({
  title: {type: String, required: true},
  entry:  { type: String, required: true },
  shipIsBroken: {type: Boolean},
},
{ timestamps: true }
)

const Log = mongoose.model('Log', logSchema);

module.exports = Log;
