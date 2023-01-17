const mongoose=require('mongoose')
const urlSchema = new mongoose.Schema({
   urlCode: {
    type: String,
    lowercase:true,
    trim:true,
    required: true,
    unique:true
   },
   longUrl: {
    type: String,
    trim:true,
    required: true
   },
   shortUrl: {
    type: String,
    trim:true,
    required: true
   }
  
}, {timestamps: true})


module.exports = mongoose.model( 'urlModel', urlSchema )