const mongoose=require("mongoose")
const productSchema=new mongoose . Schema({
    productName:String,
    category:String,
    price:{
        type:Number,
        required:true
    }

})
module.exports=mongoose.model("myproduct",productSchema)