"use-strict";
let express = require('express'),
    path = require('path'),
    logger = require('morgan'),
    bodyParser = require('body-parser'),
    app = express();
    //MailchimpService = require('./mailchimp-service');

const PORT = process.env.PORT || 4000;

//let mailChimpService = new MailchimpService();

app.use(function(req,res,next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
})

app.use(logger('dev'));
app.use(bodyParser.json());

app.listen(PORT);

module.exports = app;
