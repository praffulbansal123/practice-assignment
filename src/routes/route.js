const express = require('express');
const router = express.Router();
const UserModel = require("../models/userModel.js")

router.get('/test-me', function(req, res){
    res.send("My first ever API!!")
});

router.post("/createUser", async function(req, res){
    let data = req.body
    let savedData = await UserModel.create(data)
    res.send({msg : savedData})
})

router.get("/getUsersData", async function(req, res){
    let allUsers = await UserModel.find()
    res.send({msg : allUsers})
})

module.exports = router;
