const express=require("express");
const mongoose=require("mongoose");
const courseController=require("../controller/adminController")
const router=express.Router();

router.post("")
router.post("/course",courseController.creatCourse)

module.exports=router


