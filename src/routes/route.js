const express = require('express');
const router = express.Router();
const userController= require("../controllers/userController")
const mdlw=require("../middleware/auth")

router.post("/user",userController.user);
router.post("/find",userController.userfinder);
router.get("/valid/:userId",mdlw.md1,mdlw.md2,userController.getuser);
router.put("/update/:userId",mdlw.md1,mdlw.md2,userController.update);
router.delete("/delete/:userId",mdlw.md1,mdlw.md2,userController.deleatUser)
;
module.exports = router