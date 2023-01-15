const express=require("express");
const mongoose=require("mongoose");
const bodyParser=require("body-parser");
mongoose.set("strictQuery",true);
const route=require("./router/router");
const app=express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));



mongoose.connect("mongodb+srv://jassu_172:jassusharma123@cluster0.fhbdfgf.mongodb.net/blockchain", {
    useNewUrlParser: true
})
.then( () => console.log("MongoDb is connected"))
.catch ( err => console.log(err) );


app.use('/',route)
app.listen(3000,function(){

    console.log('express is running on port 3000')})

