const mongoose=require("mongoose");

const userSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true
    },
    email:{
        type:String,
        required:true,
        unique:true,
        trim:true
    },
    password:{
        type:String,
        required:true,
        trim:true
    },
    role:{
        type:String,
        enum:["Admin","Super Admin","Employee"],
        default:"Employee",
        trim:true
    },
  },{timeStemps:true})

  module.exports=mongoose.model("userLogin",userSchema)

//const mongoose=require("mongoose");/Create new Employee (name, email, password (encrypted), role )

   