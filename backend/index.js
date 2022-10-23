const express=require('express');
const app =express();
const passport = require('passport');
const authRoutes=require('./routes/auth-routes');
const passportSetup=require('./config/passport-setup');
const mongoose = require('mongoose');
const session = require("express-session");

app.set('view engine','ejs');


//connecting to db
mongoose.connect(
    "mongodb+srv://siddhant:1q2w3e4r5t6y@cluster1.0o57uys.mongodb.net/?retryWrites=true&w=majority", {
        useUnifiedTopology: true,
        useNewUrlParser: true,
       
    },
    (err) => {
        if (err) console.log(err);
        else console.log("DB connection established");
    });


    //secret 
    app.use(
        session({
            secret: "sheesssh ",
            cookie: { maxAge: 180 * 60 * 1000 },
            resave: false,
            saveUninitialized: false
        })
    );
    

    app.use(passport.initialize());
    app.use(passport.session());



// set up routes

app.use('/auth',authRoutes);

// create home route
app.get('/',(res,req)=>{
    res.render('home');
})
const port=process.env.PORT
app.listen( port || 3000,()=>{
    console.log(`The server is listening at 3000`)
})