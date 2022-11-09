const express=require('express');
const app =express();
const passport = require('passport');
const authRoutes=require('./routes/auth-routes');
const passportSetup=require('./config/passport-setup');
const mongoose = require('mongoose');
const session = require("express-session");
const bodyParser = require('body-parser');
const cors = require("cors");
app.set('view engine','ejs');


//connecting to db
mongoose.connect(
    "mongodb+srv://m001-student:m001-student-basics@sandbox.mfza7u2.mongodb.net/?retryWrites=true&w=majority'", {
        useUnifiedTopology: true,
        useNewUrlParser: true,
       
    },
    (err) => {
        if (err) console.log(err);
        else console.log("DB connection established");
    });
    
    
// cors
var corsOptions = {
  origin: true,
  //origin: "*",
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  credentials: true,
};
app.use(cors(corsOptions));
app.use((req, res, next) => {
  //Change this later to restrict it to react app only
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, PUT, DELETE"
  );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Content-Type, Authorization, x-auth-token, Origin, Accept"
  );
  next();
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


app.use(bodyParser.json());
// set up routes
app.use('/api/about', require('./routes/about'));
app.use('/api/books', require('./routes/books'));
app.use('/api/collaborator', require('./routes/collaborator'));
app.use('/api/experimentalFacilities', require('./routes/experimentalFacilities'));
app.use('/api/groupMembers', require('./routes/groupMembers'));
app.use('/api/invitedTalks', require('./routes/invitedTalks'));
app.use('/api/journalPublications', require('./routes/journalPublications'));
app.use('/api/keyResearchAreas', require('./routes/keyReasearchArea'));
app.use('/api/miscellaneous', require('./routes/miscellaneous'));
app.use('/api/pastMembers', require('./routes/pastMember'));
app.use('/api/projects', require('./routes/projects'));
app.use('/api/publishedConferencePapers', require('./routes/publishedConferencePaper'));
app.use('/api/simulationSoftwares', require('./routes/simulationSoftwares'));
app.use('/api/updates', require('./routes/updates'));

app.use('/auth',authRoutes);


app.use(function(err, req, res, next){
    // console.log(err);
    res.status(422).send({error: err.message});
});


// create home route
app.get('/',(res,req)=>{
    res.render('home');
})
const port=process.env.PORT
app.listen( port || 3000,()=>{
    console.log(`The server is listening at 3000`)
})
