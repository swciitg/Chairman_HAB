
const passport = require("passport");
const AzureAdOAuth2Strategy = require("passport-azure-ad-oauth2").Strategy;
const User = require("../models/user");
// const { OUTLOOK_CLIENT_ID, OUTLOOK_CLIENT_SECRET, BASEAPI } = process.env;
const jwt = require("jsonwebtoken");
const keys=require('./keys');

passport.serializeUser(function(user, done) {
    console.log("user", user)
    if(typeof(user)==='object')
        done(null, user.id);
});

passport.deserializeUser(function(id, done) {
    console.log(id);
    User.findById(id, function(err, user) {
        done(err, user);
    });
});



passport.use(
    new AzureAdOAuth2Strategy({
            clientID: keys.outlook.clientID,
            clientSecret: keys.outlook.clientSecret,
            callbackURL: '/auth/outlook/redirect',
        },
        async(accessToken, refresh_token, params, profile,  done) => {
            try {
                console.log("found here")
                var waadProfile = jwt.decode(params.id_token);

                // const user = await User.findOne({ email: waadProfile.upn });
                // if (user) return done(null, user);
                console.log(waadProfile.upn);

                const newUser = new User({
                    outlookId: waadProfile.oid,
                    name: waadProfile.name,
                    email: waadProfile.upn,
                    accessToken: accessToken,
                    // isverified: true,
                });
                if (refresh_token) newUser.refreshToken = refresh_token;

                const users = await User.find({});
                if (users.length == 0) {
                    newUser.isAdmin = true;
                }

                console.log("done checking 1")
                await newUser.save();
                return done(null, newUser);
            } catch (error) {
                console.log(error.message);
            }
        }
    )
);