const express = require('express');
const router = express.Router();
const Controller= require("../controllers/productcontroller.js")
const commonMW = require ("../middlewares/commonMiddlewares")
router.post("/products",Controller.products)
router.post('/usersApi',commonMW.midw,Controller.userde)
router.post("/orders",commonMW.midw,Controller.orderDetails)


module.exports=router;