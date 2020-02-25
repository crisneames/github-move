// initualize variables
const mongoose = require('mongoose');
// initialation of variables ended

const productSchema = new mongoose.Schema({
  name: {type: String, required: true},
  description:  { type: String, required: true },
  img: {type: String},
  price: {type: Number, required: true},
  qty: {type: Number}
},
{timestamps: true
}
)

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
