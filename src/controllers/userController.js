const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");



/*
  Read all the comments multiple times to understand why we are doing what we are doing in login api and getUserData api
*/
const createUser = async function (req, res) {
  
  let data = req.body;
  let userDetails = await userModel.create(data);
  res.send({ msg: userDetails });
};
const findUser=async function(req,res){
  let email=req.body.emailId;
  let password=req.body.password;
  let user=await userModel.findOne({emailId:email,password:password});
  if(!user){
     return res.send({satus:false,msg:"user not found"})
  }
  let token=jwt.sign({
    user:user._id.toString(),
    organisation:"functionUp"
    
  },"it's a secreat br")
   res.setHeader("x-auth-token",token);
   res.send({status:true,msg:token})
};
const headderChecker=async function(req,res){
  let userID=req.params.userId
let userData=await userModel.findById({_id:userID})

  res.send({status:true,msg:userData})

};
const update=async function(req,res){
  let userID=req.params.userId;
  let data=req.body;;
  let updated=await userModel.findOneAndUpdate({_id:userID},data,{new:true});
  res.send({status:true,msg:updated})

};
const deleatUser=async function(req,res){
  let userId=req.params.userId;
  let deletead= await userModel.findOneAndUpdate({_id:userId},{isDeleted:true},{new:true})
  res.send({satus:true,msg:deletead})

}
module.exports.update=update
module.exports.deleatUser=deleatUser;


module.exports.createUser = createUser;
module.exports.findUser=findUser;
module.exports.headder=headderChecker;

