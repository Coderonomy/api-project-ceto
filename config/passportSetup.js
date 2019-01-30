const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20');
const User = require('../models/User')
require('dotenv').config() 

//stores user id inside cookie
passport.serializeUser((user,done) => {
    done(null,user.id);
})

//finds id from cookie returned from browser
passport.deserializeUser((id,done) => {
    User.findById(id).then((user) => {
        done(null,id)
    })
})

passport.use(
    new GoogleStrategy({
        //passport google keys required here
        callbackURL:'/auth/google/redirect',
        clientID: process.env.GOOGLE_CLIENTID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET

    },(accessToken, refreshToken, profile, done)=>{
        
        //check if user already exists in our DB
        User.findOne({googleId:profile.id}).then((currentUser) => {
            if (currentUser){
                //already have user
                console.log(`already have user ${currentUser.username}`)
                done(null,currentUser)
            }else {
                // create user in our DB
                // console.log(profile)
                new User({
                    username: profile.name.familyName,
                    googleId: profile.id,
                    email: profile.emails[0].value,
                    gender: profile.gender
                }).save().then((newUser) => { 
                    console.log(`new user created ${newUser}`)
                    done(null,newUser)
                })  
            }
        })

        
    })
)
