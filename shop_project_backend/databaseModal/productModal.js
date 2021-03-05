const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    Name:{
        type:String,
        required:true,
        trim:true
    },
    Image:{
        type:String,
        required:true,
        trim:true
    },
    description:{
        type:String,
        required:true,
        trim:true
    },
    price:{
        type:Number,
        required:true
    },
    stock:{
        type:Number,
        required:true
    },
    
    createBy:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"shop_admin_data",
        required:true
    },

},{timestamps:true});
module.exports=mongoose.model("shop_products",productSchema)