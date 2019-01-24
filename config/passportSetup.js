const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20');
require('dotenv').config() 

passport.use(
    new GoogleStrategy({
        //passport google keys required here
        callbackURL:'/auth/google/redirect',
        clientID: process.env.GOOGLE_CLIENTID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET

    },(accessToken, refreshToken, profile, done)=>{
        //passport callback function
        console.log('passport callback function fired')
    })
)
