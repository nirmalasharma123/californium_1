const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");

const mdl=async function(req,res,next){
    let userID=req.params.userId;
    let id = await userModel.findById(userID);
    

   if(!(id)) return res.send({status:false,msg:"invalid user Id"});
   let headder=req.headers["x-auth-token"];
  if(!headder){
    return res.send({satus:false,msg:"important headder is missing"})
  }
  let validToken= await jwt.verify(headder,"it's a secreat br");
  if(!validToken) return res.send({satus:false,msg:"invalid token"})
  next()
};
module.exports.mdl=mdl;