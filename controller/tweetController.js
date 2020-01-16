const express = require('express');
const Tweet = require('../model/tweets');

function createTweet(req, res, next){
    Tweet.create({
       userName: req.body.userName,
       content: req.body.content
    }).then((tweets) => {
        res.json({ status: "Tweet success!"});
    }).catch(next);
}

function retrieveTweet(req,res,next){
    console.log(req.body)
    Tweet.find({userName: req.body._id})
    .then((tasks)=>{
        res.json(tasks);
    }).catch((err)=>next(err))
}

module.exports = {
    createTweet,
    retrieveTweet
}