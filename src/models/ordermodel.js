const mongoose=require("mongoose");
const ObjectId=mongoose.Schema.Types.ObjectId
const orderSchema = new mongoose.Schema( {

    userId: {
        type:ObjectId,
        ref:"userData"
        
    },
    productId:{
        type:ObjectId,
        ref:"product"
    },
    amount:{
        type:Number,
        default:0
    },
    isFreeAppUser: {type:String,
                 default: false   },
    date: String
})
module.exports = mongoose.model('Order', orderSchema)

