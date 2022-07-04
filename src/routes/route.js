const express = require('express');
const router = express.Router();

router.get('/students/:name', function(req, res) {
    let studentName = req.params.name
    console.log(studentName)
    res.send(studentName)
})
router.get('/movies', function(req, res){
    let movies = ["James-bond", "Dil", "Dhoom", "Sin-city", "Black-Friday"]
    res.send(movies)
})
router.get('/movies/:number', function(req, res){
    let movies = ["James-bond", "Dil", "Dhoom", "Sin-city", "Black-Friday"];
    let index = req.params.number
    if(index >= movies.length || index < 0 ){
        res.send("Invalid input")
    }else{
    res.send(movies[index])
    }
})
router.get('/films', function(req, res){
    let films = [ {
        id: 1,
        name: "The Shining"
       }, {
        id: 2,
        name: "Incendies"
       }, {
        id: 3,
        name: "Rang de Basanti"
       }, {
        id: 4,
        name: "Finding Demo"
       }];
       res.send(films)
       
})
router.get ('/films/:filmId', function(req, res){
    let movieId  = req.params.filmId
    let films =[ {
        id: 1,
        name: "The Shining"
       }, {
        id: 2,
        name: "Incendies"
       }, {
        id: 3,
        name: "Rang de Basanti"
       }, {
        id: 4,
        name: "Finding Demo"
       }];
       let flag = false;
        for(let i=0; i<films.length; i++){
            let movieName = films[i]
            if (movieName.id != movieId){
                flag = false
            }else {
                 res.send(films[i])
                 break;
            }
          
        }
        if(flag == false){
            res.send("no such movie exist")
        }
    });




router.post("/test-post", function(req,res){
    let arr = [2,5,"bansal"]
    let id = req.body.user
    let game = req.body.game
    arr.push(id)
    arr.push(game)
    console.log(id, game)
    console.log(req.body)
    res.send({msg:arr, status:true})
    });
const players = [ {
        name: "manish",
        dob: "1/1/1995",
        gender: "male",
        city: "jalandhar",
        sports: ["swimming"],
        bookings: [
                    {
                    bookingNumber: 1,
                    sportId: "",
                    centerId: "",
                    type: "private",
                    slot: 16286598000000,
                    bookedOn: 31/08/2021,
                    bookedFor: 01/09/2021
                    },
                    {
                        bookingNumber: 2,
                        sportId: "",
                        centerId: "",
                        type: "private",
                        slot: 162865980000880,
                        bookedOn: 31/08/2022,
                        bookedFor: 01/11/2021
                        }
                    ]}, 
        {
            name: "parth",
            dob: "1/1/1993",
            gender: "male",
            city: "amreli",
            sports: ["swimming"],
            bookings:[]
        },
        {
            name: "suraj",
            dob: "1/1/1992",
            gender: "male",
            city: "gwalior",
            sports: ["football"],
            bookings:[]
        },
        {
            name: "prafful",
            dob: "1/1/1991",
            gender: "male",
            city: "bharuch",
            sports: ["running"],
            bookings:[]
        },
        {
            name: "indra",
            dob: "1/1/1991",
            gender: "male",
            city: "bharuch",
            sports: ["cash"],
            bookings:[
                {
                    bookingNumber: 5,
                    sportId: "",
                    centerId: "",
                    type: "private",
                    slot: 162865980001880,
                    bookedOn: 31/08/2020,
                    bookedFor: 01/11/2020
                    }
    
            ]
        }
    ]


router.post("/players/:name/:dob/:gender/:city/:sports/:bookings", function(req,res){
    let userName = req.params.name
    let userDob = req.params.dob
    let userGender = req.params.gender
    let userCity = req.params.city
    let userSports = req.params.sports
    let userBookings = req.params.bookings
console.log(userName)
    let newPlayer = {}
    newPlayer.name = userName
    newPlayer.dob = userDob
    newPlayer.gender = userGender 
    newPlayer.city = userCity
    newPlayer.sports = [userSports]
    newPlayer.bookings = [userBookings]
let flag = 0
    for(let i=0; i<players.length; i++){
        console.log(players[i].name)
        if(players[i].name === userName ){
            flag = 1
        }
    }
    if(flag === 0){
        players.push(newPlayer)
        return res.send(players)
    }else{
return res.send('Player is already present in the database')
    }
})

       

module.exports = router;
