const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  orderID: {
    type: String,
    default: () => Date.now(),
  },
  products: [
    {
      productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
        require: true,
      },
      quanity: {
        type: Number,
        require: true,
      },
    },
  ],
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    require: true,
  },
  totalPrice: {
    type: Number,
    require: true,
  },
});

const Order = mongoose.model("Order", orderSchema);
module.exports = Order;
