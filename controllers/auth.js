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
router.get('/google/redirect',passport.authenticate('google'), (req, res) => {
    // res.send(req.user)
    res.redirect('/profile')
    
// check if user is in DB 
// if user is true in DB, redirect to community/profile
//else send to sign up form
})


module.exports = router;