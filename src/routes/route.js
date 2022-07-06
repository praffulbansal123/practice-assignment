const express = require('express');
const router = express.Router();
// const BookModel = require("../models/bookModel.js")
const BookController = require("../controllers/bookController.js")

router.get('/test-me', function(req, res){
    res.send("My first ever API!!")
});

router.post("/createBook", BookController.createBook)

router.get("/getBookList", BookController.getBookList)

router.post("/getBookInYear/:year", BookController.getBookInYear)  

router.get("/getParticularBook", BookController.getParticularBook) 

router.get("/getXINRBook", BookController.getXINRBook)

router.get("/getRandomBooks", BookController.getRandomBooks)

module.exports = router;
