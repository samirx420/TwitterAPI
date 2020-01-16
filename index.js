const express = require('express');
const dotenv = require('dotenv').config();
const mongoose = require('mongoose');
var morgan = require('morgan');
var multer = require('multer');
var upload = multer();
var cors = require('cors');
var tweetController = require('./controller/tweetController')
var userController = require('./controller/users');
var imageController = require('./controller/imageController');


const app = express();
app.use(morgan('tiny'));
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(upload.array()); 
app.use(express.static('public'));

app.use(express.static(__dirname + "/public"));

mongoose.connect(process.env.URL, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true })
    .then(() => console.log("Mongodb connected"))
    .catch(err => console.log(err));

app.post('/registerUser', userController.register);

app.post('/imageUpload', imageController.image, imageController.imageFileName);

app.post('/login', userController.login);


app.post('/createTweet', tweetController.createTweet);

app.get('/retriveTweet', tweetController.retrieveTweet);

app.listen(process.env.PORT, () => {
    console.log(`App is running at localhost:${process.env.PORT}`);
});