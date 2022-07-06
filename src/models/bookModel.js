const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    bookName: {
        type: String,
        requires: true
    },
    authorName: String,
    price: {
        indian: String,
        european: String
    },
    publishedYear: {
        type: Number,
        default: "2021"
    },
    tags: [ String ],
    totalPages: Number,
    isAvailable: Boolean
}, {timestamps: true});//whenever this collection is created on modified it will mark the time

module.exports = mongoose.model('Book', bookSchema)// mongoose will convert 'User' to users and it will create collection of users 