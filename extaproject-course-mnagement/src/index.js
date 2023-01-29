const express=require("express");
const mongoose=require("mongoose");
mongoose.set("strictQuery",true)
const route=require("./router/router")
const app=express();
app.use(express.json());


mongoose.connect("mongodb+srv://jassu_172:jassusharma123@cluster0.fhbdfgf.mongodb.net/courseMangement",{
        useNewUrlParser: true

})
.then(()=> console.log("mongoDb is connected"))
.catch((err) => console.log(err));

app.use("/",route)
app.listen(3000, function(){
    console.log("express is unning on port 300")
});