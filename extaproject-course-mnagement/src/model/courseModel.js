const mongoose=require("mongoose");

const CourseSchema=new mongoose.Schema({
    title:{
        type:String,
        required:true,
        unique:true
    },
    description:{
        type:String,
        required:true
    },
    videoUrl:{
        type:String,
        required:true,
    
    },
    topic:{type:[String]},
    duration:{
        type:String,
        required:true
    },
    category:{
        type:String,
        required:true
    },
},
{timeStamp:true})
 module.exports=mongoose.model("course",CourseSchema)
//title, description, video Url, topics array, duration, category,