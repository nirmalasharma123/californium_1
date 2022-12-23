const mongoose = require('mongoose');
//const ObjectId = mongoose.Schema.Types.ObjectId

const mybookSchema = new mongoose.Schema( {
    name :String,
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "myAuthorSchema"
    }, 
    price: Number,
    rating: Number,

     publisher:{
     type: mongoose.Schema.Types.ObjectId,
     ref:"publisher"

     },
     isHardCover:{type:Boolean,
                 default: false,
                         }


}, { timestamps: true });


module.exports = mongoose.model('myBook', mybookSchema)
