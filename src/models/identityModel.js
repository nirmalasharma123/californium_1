const mongoose=require("mongoose");
const identitySchema = new mongoose.Schema({
    user_name:{
        type:String,
        require:true
    },
	balance:{
        type:Number,
        default:100
    },
	address:String,
	age:Number,
 	gender:{
        type:String,
        enum:["male","female","other"]
    },
	isFreeAppUser:{
        type:Boolean,
        default:false
    }
    
},{timestamps:true});
module.exports=mongoose.model("userData",identitySchema);    