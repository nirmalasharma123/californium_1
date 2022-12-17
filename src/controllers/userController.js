const allBooks=require("../models/userModel.js")

    const newBooks=async function(req,res){
        let data= req.body
        let allbooks = await allBooks.create(data)
        res.send(allbooks)

      }
    const allBooksIn = async function(req,res){
        let allbk=await allBooks.find();
        res.send(allbk)
    }
      module.exports.allNewbooks=newBooks;
      module.exports.allnewbk=allBooksIn;