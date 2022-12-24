const express = require('express');
const bodyParser = require('body-parser');
const route = require('./routes/route.js');
const { default: mongoose } = require('mongoose');
mongoose.set('strictQuery', true)
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
//const middleware=require("./middlewares/commonMiddlewares.js");


mongoose.connect("mongodb+srv://jassu_172:jassusharma123@cluster0.fhbdfgf.mongodb.net/test", {
    useNewUrlParser: true
})
.then( () => console.log("MongoDb is connected"))
.catch ( err => console.log(err) )


//app.use(middleware.midw);
app.use('/', route);
// unreach


app.listen(process.env.PORT || 3000, function () {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});
