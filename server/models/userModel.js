const mongoose=require("mongoose")

const bcrypt=require("bcryptjs")

const userSchema=new mongoose.Schema({
    fullname:{
        type:String,
        require:true,
    },
    email:{
        type:String,
        require:true,
    },
    password:{
        type:String,
        require:true,
    },
    phone:{
        type:Number,
        require:true,
    },
    role:{
        type:String,
        default:"User",
    },
    avatar:String
})

userSchema.pre("save",async function (next) {
    if(!this.isModified("password")){
        return next
    }
    this.password=await bcrypt.hash(this.password,10)
})

const userModel=mongoose.model("User",userSchema)
module.exports=userModel;