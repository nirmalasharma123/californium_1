const userModel=require("../model/userModel");
const validator=require("../validator/validator");
const jwt=require("jsonwebtoken")
const valid=require("validator");

const creatUser=async function(req,res){
   try{
    if(Object.keys(req.body).length==0) return res.status(400).send({status:false,message:"please provide details in request body"})
    data=req.body;
    let {name, email, password , role}=data;
     
    if(!name||name=="") return res.status(400).send({status:false,message:"please provide name"});
    if(typeof name !="string") return res.status(400).send({status:false,message:"please provide name in string"});
    if(validator.isValidateName(name)) return res.status(400).send({status:false,message:"please provide valid name"})

    if(!email||email=="") return res.status(400).send({status:false,message:"please provide email"});
    if(typeof name !="string") return res.status(400).send({status:false,message:"please provide email in string"});
    if(valid.isEmail(name)) return res.status(400).send({status:false,message:"please provide valid email"})



    if(!password||password=="") return res.status(400).send({status:false,message:"please provide password"});
    if(typeof password !="string") return res.status(400).send({status:false,message:"please provide password in string"});
    if(validator.isValidPassword(password)) return res.status(400).send({status:false,message:"please provide valid password"})


    if(!role||role=="") return res.status(400).send({status:false,message:"please provide role"});
    if(!["Admin","Super Admin","Employee"].includes(role))  return res.status(400).send({status:false,message:"please provide role"});
    if(typeof role !="string") return res.status(400).send({status:false,message:"please provide role in string"})


    const creatUser=await userModel.create(data);
    return res.status(201).send({status:true,data:creatUser})}

    catch(error){
        return res.status(500).send({status:false,message:error.message})
}
}

const longinUser=async function(req,res){
    
    if(Object.keys(req.body).length==0) return res.status(400).send({status:false,message:"please provide details in request body"})
    let email=req.body.email;
    let password=req.body.password;



if(!email) return res.status(400).send({status:false,message:"email must be present"});
if(!password) return res.status(400).send({status:false,message:"please provide details"});
 
let findUser= await userModel.findOne({email:email,password:password});

 if(!findUser) return res.status(404).send({status:false,message:"can't find user"});

 let token=jwt.sign({role:findUser.role},"secreat key",{expiresIn:"24h"});

 res.setHeaders("keys",token);

 return res.status(200).send({status:true,data:token})

};

module.exports={creatUser,longinUser};