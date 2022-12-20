const bookModel=require('../models/book')
const authorModel=require("../models/author")
const creatBooks=async function(req,res){
    let data=req.body
    let allBooks=await bookModel.create(data)
    res.send(allBooks)
}
const createAuthor = async function (req, res) {
    let data = req.body
    let savedData = await authorModel.create(data)
    res.send( savedData )
}
const getBook=async function (req,res){
    let input=req.body
    let authorId=await authorModel.findOne(input).select({author_id:1, _id:0})
    let allBooksByAuthour=await bookModel.find(authorId)
    res.send(allBooksByAuthour)

        
}
const getAuthorName = async function (req, res) {
    let data = req.body;
    let updatedPrice = await bookModel.findOneAndUpdate(data, { $set: { price: 100 }},{new : true} )
    let authorName = await authorModel.findOne({ author_id: { $eq: updatedPrice.author_id } })
    let finalResult = {};
    finalResult.author = authorName.author_name;
    finalResult.changedPrice = updatedPrice.price;
    res.send(finalResult)
}
const bookByCost=async function (req,res){
let bookByprice=await bookModel.find({price:{ $gt:200,$lt:550} }).select({author_id:1});

let bookforeach=bookByprice.map(x=>x.author_id)
//console.log(bookforeach)

let auther=await authorModel.find({author_id:bookforeach}).select({author_name:1,_id:0})

res.send(auther)


}

module.exports.allBooks=creatBooks
module.exports.authorBook=createAuthor;
module.exports.bookOfChoice=getBook;
module.exports.findAuthor=getAuthorName;
module.exports.booksbycost=bookByCost;
