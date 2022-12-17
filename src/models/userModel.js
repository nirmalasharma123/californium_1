    const mongoose = require('mongoose');

    const booksSchema=new mongoose.Schema({
        bookname:{
            type:String,
            required:true,
        },
        authorName:String,
        category:{
            type:String,
            enum:["Thrillar","Action","Romance","sci-fi","Horrar","Mystary"]
        },
        publishYear:String,
        
    })
    module.exports=mongoose.model('book',booksSchema);
