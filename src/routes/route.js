const express = require('express');
const router = express.Router();
const UserModel = require("../models/userModel.js")
const UserController = require("../controllers/userController.js")

router.get('/test-me', function(req, res){
    res.send("My first ever API!!")
});

router.post("/createUser", UserController.createUser)

router.get("/getUsersData", UserController.getUsersData)

module.exports = router;
