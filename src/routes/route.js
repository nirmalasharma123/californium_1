const express = require('express');
const router = express.Router();

const mdlWare = require ("../middlewares/commonMiddlewares");
const controller=require("../controllers/userController")
router.get("/basicRoute",mdlWare.mid1,controller.printDate )
module.exports = router;