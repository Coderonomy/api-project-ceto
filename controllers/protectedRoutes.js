// const express = require('express');
const router = require('express').Router();
const User = require('../models/User')

const isAuthed = (req, res, next) => {
    if (!req.user) {
        console.log('not authed')
    //  res.status(403).send('not authed');
     return res.redirect(`${process.env.REACT_FRONT_END}/login`)
    } else {
        console.log('authorized')
        next();
    }
  }

router.get('/', isAuthed,(req, res) => {
    res.send('profile')
    // res.send('you are logged in ' + req.user.username)
    console.log(`you are logged in ${ req.user.username}`)
})


router.get('/network', isAuthed, function (req,res) {
    // User.find({}, function (err,users) {
    //     res.json(users[0].username)    
    // console.log(users[0].username)
    res.redirect(`${process.env.REACT_FRONT_END}/network`)
    // res.send('what up!? its yo network page!')

    })

router.get('/users', isAuthed, (req, res) => {
  User.find({})
  .then(doc => res.send(doc))
})

router.get('/matches', isAuthed, (req, res) => {
  //find users that match what I need and send them back to display
})



// router.get('/completed-profile', (req, res) => {
//     res.send('have hit the complete-profile route, this is where we will add the logic to get the matches')
// })

// router.get('/incomplete-profile', (req, res) => {
//     res.send('have hit the incomplete-profile route, this is because user has not completed enough form fields, will return only the top level data to profile, and prompt user to complete remaining fields')
// })
module.exports = router;