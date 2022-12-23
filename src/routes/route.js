const express = require('express');
const router = express.Router();
const myAuthorModel=require("../models/authorModel");
const publisherModel=require("../models/publisher");
const mycontroller=require("../controllers/authorController");
router.post("/myauthour",mycontroller.myAuthor);
router.post("/publisher",mycontroller.publishers);
router.post("/mybooks",mycontroller.mybooks);
router.post("/myId",mycontroller.idCheck);
router.get("/bookDetail",mycontroller.bookDetail);
router.get("/publishBy",mycontroller.publishedBy);
router.get("/update",mycontroller.newPric)

// const authorController= require("../controllers/authorController")
// const bookController= require("../controllers/bookController")

// router.get("/test-me", function (req, res) {
//     res.send("My first ever api!")
// })

// router.post("/createAuthor", authorController.createAuthor  )

// router.get("/getAuthorsData", authorController.getAuthorsData)

// router.post("/createBook", bookController.createBook  )

// router.get("/getBooksData", bookController.getBooksData)

// router.get("/getBooksWithAuthorDetails", bookController.getBooksWithAuthorDetails)


module.exports = router;