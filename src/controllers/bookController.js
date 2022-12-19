
const Model1= require("../models/bookModel")

const createBook= async function (req, res) {
    let data= req.body

    let savedData= await Model1.create(data)
    res.send({msg: savedData})
}
const bookData=async function(req,res){
    let booksnaMe=await Model1.find().select({bookName:1,authorName:1, _id:0})
    res.send({msg:booksnaMe})

}
const bookInyear=async function(req,res){
    let clientYar=req.body.year
    let booksYear=await Model1.find({year:{$eq:clientYar}})
    res.send({msg:booksYear});
}
    

const randombook=async function(req,res){
    let booksInsk= await Model1.find({$or : [{stocks:{$eq:true}},{totalpg:{$gt:500}}]})
    res.send(booksInsk)
}
const bokswithPricetag=async function(req,res){
    let booksprice=await Model1.find({"price.indianPrice":{$in:["INR100","INR500","INR300"]}})
    res.send(booksprice)
}
const perfticularbook=async function(req,res){
    let input=req.body.name;
    let bookRequired=await Model1.find({bookName: new RegExp(input)})
    res.send({msg:bookRequired})
}
module.exports.booksData=createBook
module.exports.getBooks=bookData;
module.exports.clientBooks=bookInyear;
module.exports.randombookS=randombook;
module.exports.bookpr=bokswithPricetag;
module.exports.requiredBook=perfticularbook;

