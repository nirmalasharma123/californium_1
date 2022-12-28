const express = require('express');
const router = express.Router();
 const UserModel= require("../models/userModel.js");
 const mdl=require("../middlewares/commonMiddlewares.js")
const controller=require("../controllers/user.js")
router.post("/user",controller.createUser);
router.post("/find",controller.find);
router.get("/get/:userId",mdl.mid,controller.setHeadder);
router.put("/update/:userId",mdl.mid,controller.update);
router.delete("/delete/:userId",mdl.mid,controller.deleted);

module.exports = router;