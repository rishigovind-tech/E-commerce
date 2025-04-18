const express=require("express")
const authController=require("../controller/authController")
const { verifyToken } = require("../middleware/authMiddleware")
const upload = require("../middleware/multer")

const router=express.Router()

router.post("/register",authController.register)
router.post("/login",authController.login)
router.post('/upload',verifyToken,upload.single("file"),authController.uploads)


module.exports=router