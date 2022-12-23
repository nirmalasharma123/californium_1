const myAuthorModel= require("../models/authorModel");
const publisherModel=require("../models/publisher");
const myBookmodel=require("../models/bookModel");
const { isValidObjectId } = require("mongoose");
const publisher = require("../models/publisher");



const myAuthor= async function (req, res) {
    let author = req.body
    let authorCreated = await myAuthorModel.create(author)
    res.send({data: authorCreated})
}

const myPublisher= async function (req, res) {
    let data=req.body
    let publisher = await publisherModel.create(data)
    res.send({data:publisher})
}
const authoursBook= async function (req,res){
    const data =req.body
    let allbooks=await myBookmodel.create(data)
    res.send(allbooks)
}
const  validId=async function(req,res){
    if(!(req.body.author&&req.body.publisher)){
        res.send("author/publisher is required")
    } else if (!(isValidObjectId(req.body.author)&&isValidObjectId(req.body.publisher))){
        res.send("please put a valid Id")
    }else{
        let modified=await myBookmodel.create(req.body)
        res.send(modified)
    }

}
const bookDetail=async function(req,res){
    let allboookDetail=await myBookmodel.find().populate("author").populate("publisher")

    res.send(allboookDetail)
}
const publishedBY=async function (req,res){
    let booksBypublisher=await myBookmodel .updateMany(
        {publisher:{$in:['63a337cde67780204c93256e','63a33836e67780204c932570']}},
        {isHardcover:true},
        {new:true}
    )
    res.send(booksBypublisher)
    }
const newPric  = async function(req,res){
    let selected=await myBookmodel.find({rating:{$gt:3.5}})
    let newupdate=[]
    for(i=0;i<selected.length;i++){
     let updatedone=await myBookmodel.updateMany({author:selected[i]._id},{$inc:{price:10}},{new:true})
      newupdate.push(updatedone)
    }
    res.send(newupdate)
}
const aggrigate=async function (req,res){
    let update= await myBookmodel.aggregate([
        {$match:{rating:{$gt:3.5}}},
        {$group}
    ])

}


module.exports.myAuthor= myAuthor
module.exports.publishers=myPublisher
module.exports.mybooks= authoursBook
module.exports.idCheck=validId
module.exports.bookDetail=bookDetail;
module.exports.publishedBy=publishedBY;
module.exports.newPric=newPric;