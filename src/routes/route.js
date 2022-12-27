const express = require('express');
const router = express.Router();
const userController= require("../controllers/userController")
const middleware=require("../middle/middle")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/users", userController.createUser  );
router.post("/findUser",userController.findUser);
router.get("/checkHeadder/:userId",middleware.mdl,userController.headder);
router.put("/updated/:userId",middleware.mdl,userController.update);
router.delete("/delet/:userId",middleware.mdl,userController.deleatUser);

// router.post("/login", userController.loginUser)

// //The userId is sent by front end
// router.get("/users/:userId", userController.getUserData)

// router.put("/users/:userId", userController.updateUser)

 module.exports = router;