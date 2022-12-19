const express = require('express');
const router = express.Router();
const  Model1=require("../models/bookModel")
const bookCollection=require("../controllers/bookController");
router.post("/booksData",bookCollection.booksData);
router.get("/getName",bookCollection.getBooks);
router.post("/clientBooks",bookCollection.clientBooks)
router.get("/randombk",bookCollection.randombookS);
router.get("/booh",bookCollection.bookpr);
router.post("/perticularbk",bookCollection.requiredBook);
module.exports=router;