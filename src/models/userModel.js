const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    mobile: {
        type: String,
        unique: true,
        required: true //syntax for compulsory
    },
    emailId: String,
    gender: {
        type: String,
        enum: ["male", "female", "LGBTQ"] //abcd will give an error
    },
    age: Number

}, {timestamps: true});//whenever this collection is created on modified it will mark the time

module.exports = mongoose.model('User', userSchema)// mongoose will convert 'User' to users and it will create collection of users 