const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema( {
    bookName: {
        type:String,
        unique:true 
     }, 

    authorName: String, 
    tags: [String],
    
    isPublished: Boolean,
    prices: {
        indianPrice: String,
        europePrice: String,
    },
    year:{

        type: Number,
        default: 2021
    },
    sales: {type: Number, default: 10},
    stocks:Boolean,
    totalpg:Number

}, { timestamps: true });


module.exports = mongoose.model('newBook', bookSchema) //users


