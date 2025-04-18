const Order = require("../models/orderModel");

module.exports.createOrder = async (req, res) => {
  try {
    console.log(req.user);
    const { products, totalPrice } = req.body;
    const order = new Order({
      user: req.user.id,
      products: products,
      totalPrice,
    });
    const newOrder = await order.save();
    res.status(201).json({ message: "order placed", newOrder });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ message: "create order failed", error: error.message });
  }
};

module.exports.allOrders = async (req, res) => {
  try {
    const orders = await Order.find().populate("user").populate("products.productId");
    res.status(200).json({ message: "order fetched!", orders });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ message: "create order failed", error: error.message });
  }
};

module.exports.orderById = async (req, res) => {
  try {
    const orderId = req.params.orderId;
    const order = await Order.findById(orderId).populate("user").populate("product");
    if (!order) {
      return res.status(404).json({ message: "Order not found" });
    }
    res.status(200).json({ message: "Order fetched successfully", order });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ message: "order fetched failed!", error: error.message });
  }
};
