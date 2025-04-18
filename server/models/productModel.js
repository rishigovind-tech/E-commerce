const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  productID: {
    type: String,
    default: () => Date.now(),
  },
  productImg: {
    type: String,
    required: true,
  },
  productTitle: {
    type: String,
    required: true,
  },
  productRating: {
    type: String,
    required: true,
  },
  productColor: {
    type: String,
    required: true,
  },
  productDescription: {
    type: String,
    required: true,
  },
  productCategory: {
    type: String,
    required: true,
  },
  productPrice: {
    type: String,
    required: true,
  },
});

const Product = mongoose.model("Product", productSchema);
module.exports = Product;
