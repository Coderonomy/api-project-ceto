const router = require('express').Router();
const passport = require('passport');

// auth login 
router.get('/login', (req,res) =>{
    // local engine ejs
    // res.render('login',{user:req.user})
    
    // deployment
    res.send('login',{user:req.user})
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

router.get('/google/redirect',passport.authenticate('google', { failureRedirect: `${process.env.REACT_FRONT_END}/login` }), (req, res) => {
    console.log(`you are logging in ${req.user.username}`)
    return res.redirect(`/protected/network`)
})


        
module.exports = router;