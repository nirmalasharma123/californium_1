const { count } = require("console")
const express=require("express")
const router=express.Router();
const controller=require("../controllers/bookcontroler");

router.post("/creatBook",controller.allBooks);
router.post("/authours",controller.authorBook);
router.post("/getBook",controller.bookOfChoice);
router.post("/getAuthor",controller.findAuthor);
router.get("/getBookBy",controller.booksbycost)

module.exports = router;