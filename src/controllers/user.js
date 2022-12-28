const { count } = require("console")
const userModel = require("../models/userModel");
const jwt = require('jsonwebtoken')


const createUser= async function (req, res) {
    try {
        let data = req.body
        if ( Object.keys(data).length != 0) {
            let userData = await userModel.create(data)
            res.status(201).send({ msg: userData})
        }
        else res.status(400).send({ msg: "No data stored"})
    }
    catch (err) {
        res.status(500).send({ msg: "Error", error: err.message })
    }
}

const finduser=async function(req,res){
    try{
        let email=req.body.emailId;
        let password=req.body.password;
        let user=await userModel.findOne({emailId:email,password:password})
        if(!user) return res.satus(404).send({satus:false,msg:"user not found"});
        let token= jwt.sign({
            user:user._id,
            organisation:"californium"
        },"top secrate xox");
        res.setHeader("x-auth-token",token)
        res.send({satus:true,msg:token})
    }
    catch(error){
        res.status(400).send({msg:error.message})

    }
};
const setHeadder=async function(req,res){
    try{
        userId=req.params.userId;
        let userData=await userModel.findOne({_id:userId});
        res.status(404).send({msg:userData})
    } catch(error){
        res.status(500).send({msg:error.message})
    }
};
const update=async function(req,res){
    try{
    let userID=req.params.userId;
    let data=req.body;
    let updated=await userModel.findOneAndUpdate({_id:userID},data,{new:true});
    res.status(201).send({status:true,msg:updated})
}catch(error){
    res.status(500).send({msg:error.message})

}

  
  };

const deleted=async function(req,res){
    try{
        let user=req.params.userId;
        let deleteOne=await userModel.findOneAndUpdate({_id:user},{isDeleted:true},{new:true});
        res.status(404).send({msg:deleteOne});
    }catch(error){
        res.status(500).send({msg:error.message})
    }
};

  



module.exports.createUser=createUser;
module.exports.find=finduser;
module.exports.setHeadder=setHeadder;
module.exports.update=update;
module.exports.deleted=deleted;
// // TRY CATCH SUMMARY:
// // if you get an error in try block, it will not execute the next lines of code inside try
// // instead it will jump into catch block and execute the code there
// // code in catch block is normallly not executed
// //rather catch block is only executed if there is error in try block
// // the error( along with message++) gets sent to catch block incase there is an error




// // Specific HTTP codes(only impt ones)
// // 2xx- Success
// // 4xx- something gone wrong..and problem is on user side(client side)
// // 5xx- server side problems

// // "BAD REQUEST" ...400..say if username password dont match etc..or anything generic( any problem in input on user side or any other unhandled problem)
// // "RESOURCE NOT FOUND"...404 //404 page not found...eg. find ("asaijndianud89")...let book =bookModel.findOne({_id:"asaijndianud89"})   if (book){..} else res.status(404).send({})
// // "AUTHENTICATION MISSING"...401..login is required...if(token){...} else { res.status(401)}
// // "NOT AUTHENTICATED OR FORBIDDEN"..403 // if ( token.userId === userId) {...} else {res.status(403).send({}) }
// // -- try catch ....// "SERVER ERROR"...500

// // -- ALL GOOD... //status(200)- OK
// // --- "ALL GOOD and A NEW RESOURCE WAS SUCCEFULLY CREATED" ...status(201)..e.g a new user registers herself successfully


















// const getBooksData = async function (req, res) {
//     let allBooks = await BookModel.find({ authorName: "HO" })
//     console.log(allBooks)
//     if (allBooks.length > 0) res.send({ msg: allBooks, condition: true })
//     else res.send({ msg: "No books found", condition: false })
// }


// const updateBooks = async function (req, res) {
//     let data = req.body // {sales: "1200"}
//     // let allBooks= await BookModel.updateMany( 
//     //     { author: "SK"} , //condition
//     //     { $set: data } //update in data
//     //  )
//     let allBooks = await BookModel.findOneAndUpdate(
//         { authorName: "ABC" }, //condition
//         { $set: data }, //update in data
//         { new: true, upsert: true } ,// new: true - will give you back the updated document // Upsert: it finds and updates the document but if the doc is not found(i.e it does not exist) then it creates a new document i.e UPdate Or inSERT
//     )

//     res.send({ msg: allBooks })
// }

// const deleteBooks = async function (req, res) {
//     // let data = req.body 
//     let allBooks = await BookModel.updateMany(
//         { authorName: "FI" }, //condition
//         { $set: { isDeleted: true } }, //update in data
//         { new: true } ,
//     )

//     res.send({ msg: allBooks })
// }



// const totalSalesPerAuthor = async function (req, res) {
//     // let data = req.body 
//     let allAuthorSales = await BookModel.aggregate(
//         [
//             { $group: { _id: "$authorName", totalNumberOfSales: { $sum: "$sales" } } },
//             { $sort: { totalNumberOfSales: -1 } }
//         ]
//     )

//     res.send({ msg: allAuthorSales })
// }




// // CRUD OPERATIONS:
// // CREATE
// // READ
// // UPDATE
// // DELETE



// module.exports.createBook = createBook
// module.exports.getBooksData = getBooksData
// module.exports.updateBooks = updateBooks
// module.exports.deleteBooks = deleteBooks
// module.exports.totalSalesPerAuthor = totalSalesPerAuthor
