const router = require('express').Router();
const passport = require('passport');

// auth login 
router.get('/login', (req,res) =>{
    // local engine ejs
    res.render('login',{user:req.user})
    
    // deployment
    // res.send('login',{user:req.user})
})

//auth logout 
router.get('/logout',(req,res) =>{
    req.logout();
    res.redirect(process.env.REACT_FRONT_END)
})

//auth with google
router.get('/google', passport.authenticate('google',{
    scope: ['profile', 'email']
}) )

router.get('/google/redirect',passport.authenticate('google', { failureRedirect: '/login' }), (req, res) => {
    console.log(`you are logging in ${req.user.username}`)
    return res.redirect('/protected/network')
})

    // res.send('you reached the callback URL')
    // if the user has these fields completed (whether or not they were already a user) direct to appropriate path
    // need to build logic to return falsey value for all fields that are incomplete
    // need to work out those fields that we request completed
    // also need a route to direct back to full sign up page if user has signed in with google previously (and therefore is already a user)
    // res.send(req.user.myBusinessSkills[0]);
    // if (req.user.myBusinessSkills[0]) {
        //     res.redirect('/protected/completed-profile')
        // } else {
            //     res.redirect('/protected/incomplete-profile')
            // }
        
        // The OAuth 2.0 provider has redirected the user back to the application.
        // Finish the authentication process by attempting to obtain an access
        // token.  If authorization was granted, the user will be logged in.
        // Otherwise, authentication has failed.
        // router.get('/google/redirect',
        //   passport.authenticate('google', { successRedirect: '/protected',
        //                                       failureRedirect: '/login' }));
        // callback routes for google to redirect to
        // check if user is in DB - handled in passportSetup.js for the Google credentials only
        
        
module.exports = router;