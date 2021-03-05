const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    user_name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    shop_name:{
        type:String,
        required:true
    }
},{timestamps:true});

module.exports=mongoose.model("shop_admin_data",userSchema);