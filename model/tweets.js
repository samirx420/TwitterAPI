const mongoose = require('mongoose');

//user Schema
const tweetSchema = new mongoose.Schema({
    userName:{
        type: String,
        required: true
    },
    content:{
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Tweet', tweetSchema);
