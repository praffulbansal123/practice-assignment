const BookModel = require("../models/bookModel.js")

const createBook = async function(req, res){
    let data = req.body
    let savedData = await BookModel.create(data)
    res.send({msg : savedData})
}

const getBookList = async function(req, res){
    let allUsers = await BookModel.find().select({bookName:1,authorName:1,_id:0})
    res.send({msg : allUsers})
}

const getParticularBook = async function(req,res){
    let object = req.body
    let particularBook = await BookModel.find(object)
    res.send({msg: particularBook})
}

const getBookInYear = async function(req, res){
    let inputYear =req.params.year
    let bookYear = await BookModel.find({publishedYear: inputYear})
    if(bookYear.length>0){
        res.send(bookYear)
    }else{
        res.send("No book found by this year")
    }
}
// { field: { $in: [<value1>, <value2>, ... <valueN> ] } }
const getXINRBook = async function(req,res){
    let books = await BookModel.find({"price.indian":{$in: ["100","200","500"]}})
res.send(books)
}

const getRandomBooks = async function(req,res){
    let random = await BookModel.find({$or: [{isAvailable: true},{totalPages: {$gte:500}}]})
    res.send(random)
}

module.exports = {createBook,getBookList,getBookInYear,getParticularBook,getXINRBook,getRandomBooks}
        