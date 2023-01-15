const mongoose = require("mongoose")

const coinSchema = new mongoose.Schema({
    symbol:{
        type:String,
        //Unique:true
    }, // String and Unique
    name:{
        type:String,
        //Unique:true
    }, // String and Unique
    marketCapUsd:String, // String  ( not Number)
    priceUsd:String //String

})

module.exports=mongoose.model("bitcoin",coinSchema);