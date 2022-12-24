const  productModel=require("../models/product.js");
const userModel=require("../models/identityModel.js");
const orderModel=require("../models/ordermodel.js");
const { findOne } = require("../models/identityModel.js");
const { findOneAndUpdate } = require("../models/product.js");

 const productCreat=async function (req,res){
    let data=req.body;  
   let allproducts=await productModel.create(data);
    res.send(allproducts)
 }
 const userdetail=async function(req,res){
     let data=req.body;
     let userdetail=await userModel.create(data)
     res.send({msg:userdetail})
 }
 const orderDetails=async function(req,res){
    let data=req.body;
    if(!(data.userId)) return res.send("User Id not found")
    else if(!(data.productId)) return res.send("product Id not found")
    let valid=await userModel.findOne({_id:data.userId});
    if(!(valid)) return res.send("user not found");
    let producte=await productModel.findOne({_id:data.productId});
    if(!(producte)) return res.send("product not found");
 
    if(data.isFreeAppUser=="true") {
        let order=await orderModel.create(data);
        return res.send(order)
    }
    let amount=await productModel.findOne({_id:data.productId}).select({price:1,_id:0})
    data.amount=amount.price
    let user=await userModel.findOne({_id:data.userId})
    if(user.balance<data.amount) return res.send("insufficent balance")
    let aprice =await userModel.findOneAndUpdate({_id:data.userId},{$inc:{balance:-data.amount}})
    let userorder=await orderModel.create(data);
    res.send(userorder);
 }
module.exports.products=productCreat;
module.exports.userde=userdetail;
module.exports.orderDetails=orderDetails;
 