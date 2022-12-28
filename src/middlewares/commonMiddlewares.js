const model=require("../models/userModel")
const jwt=require("jsonwebtoken")
const mid1= async function ( req, res, next) {
    try{
  let  headder=req.headers['x-auth-token'];
 if(!headder)  return res.send({msg:"important hedder is missing"})
 let verify= await jwt.verify(headder,"top secrate xox");
 let useracess=req.params.userId;
 let loggedUser= verify.user;
 if(!verify) return res.send ({msg:"invalid token"})
 if(useracess!=loggedUser) return res.status(403).send({msg:"unauthenticated"})
}catch(error){
    res.status(500).send({msg:error.message})
}
next()
}
module.exports.mid=mid1
    