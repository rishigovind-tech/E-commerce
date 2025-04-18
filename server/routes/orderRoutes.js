const express=require("express")
const orderController=require("../controller/orderController")
const { verifyToken } = require("../middleware/authMiddleware")

const router=express.Router()

router.post("/order",verifyToken,orderController.createOrder)
router.get("/orders",verifyToken,orderController.allOrders)
router.get("/order/:orderId",verifyToken,orderController.orderById)





module.exports=router