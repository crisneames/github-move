// initualize variables
const mongoose = require('mongoose');
// initialation of variables ended

const fruitSchema = new mongoose.Schema({
  name: {type: String, required: true},
  color:  { type: String, required: true },
  readyToEat: Boolean
},
{timestamps: true
}
)

const Fruit = mongoose.model('Fruit', fruitSchema);

module.exports = Fruit;
