const cors = require("cors");
const express = require("express");
const connectDB = require("./config/db");
const productRoutes = require("./routes/productRoutes");
const authRoutes = require("./routes/authRoutes");
const orderRoutes = require("./routes/orderRoutes");

const cookieParser = require("cookie-parser");

const app = express();

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
    allowedHeaders: ["Content-Type", "Authorization"],
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    exposedHeaders: ["Set-Cookie"],
  })
);

app.use(express.json());
app.use(express.static("./uploads"));
require("dotenv").config();
app.use(cookieParser());
connectDB();

app.use(productRoutes);
app.use(authRoutes);
app.use(orderRoutes);

app.listen(process.env.PORT, () => {
  console.log("Server running successfully!!!");
});
