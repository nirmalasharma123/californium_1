const mongoose=require("mongoose");
const publisherSchema=new mongoose.Schema({
    nameofPublisher:String,
    headQuaters: String
});
module.exports=mongoose.model('publisher',publisherSchema)