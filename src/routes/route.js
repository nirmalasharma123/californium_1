 const express = require('express');
 const router = express.Router();
const allBooks = require("../models/userModel.js");
const newBoks=require("../controllers/userController")

router.post("/newbooks", newBoks.allNewbooks);
router.get("/allBooks", newBoks.allnewbk);
module.exports=router;
 
