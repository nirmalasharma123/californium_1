const express = require('express');
const router = express.Router();
const greeting= require('../logger');
const trim=require('../validator/format');
const current=require("../util/helper");
const _  =require('lodash')
const movieName=require('../moviess/movie');
const filmName=require('../films/fim');
const { result } = require('lodash');


router.get('/test-me', function (req, res) {
    res.send('My first ever api!')
    greeting.myGreeting('Nirmala')

    //#2
    current.currentDate();
    current.currentMonth();
    current.batchInfo();
    //#3
    trim.trimIng("       functionUp    ");
    trim.capitalLatter("nirmala sharma");
    trim.smallLatter("HEY HOW ARE YOU ");
    //#4
    const nameOfMonth=[
        'January',
         'February', 
        'march',
         'April',
        'May',
         'June', 
        'July',
        'August', 
        'September',
         'October', 
        'November' ,
         'December'
    ]
    console.log( _.chunk(nameOfMonth,3))

    const oddNum=[1,3,5,7,9,15,17,19,13,21,23,27,37,];
    console.log( _.tail(oddNum));
    const arr=[[1,2,3],[4,5,6],[7,8,9],[10,11,12]];
    console.log( _.union(...arr));

    //#5
    const movie= [['horror','The Shining'],
    ['drama','Titanic'],
    ['thriller','Shutter Island'],
    ['fantasy','Pans Labyrinth']];
    console.log( _.fromPairs(movie));


});

module.exports = router;


//get api
router.get('/movie',function(req,res){
    res.send(['Avenger','pk','3idiots','spirited away'])

});
router.get ('/movie/:indexNumber',function(req,res){
    res.send('printing movies on console ')
    movieName.movie1(req.params.indexNumber)
});
router.get('/films/' ,function(req,res){
    res.send('movie on console')
     console.log(filmName.filmms)
    
    });
router.get('/films2/:filmId',function(req,res){  
    res.send('movie on console')
    filmName.filmZ(req.params.filmId)

});
router.get('/solu1/', function (req,res){
    let arry =[1,2,3,4,5,7,8];
    let min=Math.min(...arry);
    let max=Math.max(...arry);
    for(let i = min;i<max;i++){
        if (arry.includes(i)==false){
            let result=i;
            console.log(result)
        }

    } ;

   res.send(' the result is on the consle')
});
router.get('/solu2/', function (req,res){
    let arry =[33,34,35,36,38];
    let min=Math.min(...arry);
    let max=Math.max(...arry);
    for(let i = min;i<max;i++){
        if (arry.includes(i)==false){
            let result=i;
            console.log(result)
        }
    }
         res.send("on console")
        });
