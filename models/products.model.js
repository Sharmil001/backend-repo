const mongoose = require("mongoose");

const ProductSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  quantity: {
    type: Number,
    required: false,
  },
});

const Product = mongoose.model('Product', ProductSchema);

module.exports = Product;
