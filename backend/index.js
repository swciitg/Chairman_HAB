const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');


const app = express();

mongoose.connect('mongodb+srv://m001-student:m001-student-basics@sandbox.mfza7u2.mongodb.net/?retryWrites=true&w=majority');
mongoose.Promise = global.Promise;

app.use(bodyParser.json());

app.use('/api', require('./routes/groupMembers'));

app.use(function(err, req, res, next){
    // console.log(err);
    res.status(422).send({error: err.message});
});



app.listen(3000, function(){
    console.log('now listening for requests');
});