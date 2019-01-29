const router = require('express').Router();
const passport = require('passport');

// auth login 
router.get('/login', (req,res) =>{
    res.render('login')
})

//auth logout 
router.get('/logout',(req,res) =>{
    //handle with passport
    res.send('logging out')
})

//auth with google
router.get('/google', passport.authenticate('google',{
    scope: [
        'openid',
        'profile',
        'email'
    ]
}) )

//callback routes for google to redirect to
// check if user is in DB - handled in passportSetup.js
router.get('/google/redirect',passport.authenticate('google'), (req, res) => {
    // if the user has these fields completed (whether or not they were already a user) direct to appropriate path
    // need to build logic to return falsey value for all fields that are incomplete
    // need to work out those fields that we request completed
    if (req.user.myBusinessSkills[0]) {
        res.redirect('/protected/completed-profile')
    } else {
        res.redirect('/protected/incomplete-profile')
    }
})



module.exports = router;