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

  router.post('/user', (req,res) => {
    const {
        username,
        isCeo,
        isNetworker,
        location,
        remote, 
        gender, 
        bio,
        pic,
        ctoSpecifics,
        ceoSpecifics
    } = req.body

    User.findOne({email: req.user.email}, function(err, doc) {
        doc.username = username
        doc.isCeo = isCeo
        doc.isNetworker = isNetworker
        doc.location = location
        doc.remote = remote
        doc.gender = gender
        doc.bio = bio
        doc.pic = pic
        doc.ctoSpecifics = ctoSpecifics
        doc.ceoSpecifics = ceoSpecifics
        doc.save((err, doc) => {
            console.log(err, doc)
            return res.send(doc)
        })

    })
})


router.get('/', isAuthed,(req, res) => {
    res.send('profile')
    console.log(`you are logged in ${ req.user.username}`)
})

router.get('/profile', isAuthed,(req, res) => { 

  User.findOne({email: req.res.email})
  .then(doc => {
      console.log(doc)
    res.send(req.user)
  })
})
    
router.get('/network', isAuthed, function (req,res) {
    User.findOne({email: req.user.email})
    .then(doc => {
        console.log(!doc.username)
        if (!doc.username){
            // console.log(doc.username)
            return res.redirect(`${process.env.REACT_FRONT_END}/signup`)
        } else {
            // console.log(doc.username)
            return res.redirect(`${process.env.REACT_FRONT_END}/network`)
        }
    })
    .catch(err => console.log(err))
  })

router.get('/users', isAuthed, (req, res) => {
  User.find({})
  .then(doc => res.send(doc))
})

router.get('/matches', isAuthed, (req, res) => {
    User.findOne({email: req.user.email})
    .then(doc => {
        if (doc.isCeo) {
            const skills = doc.specificTechRequired.concat(doc.generalTechRequired)
            // skills.map()
            User.find({isCeo: false})
            .then(doc => {
                res.send(doc)
            })
        } else if (!doc.isCeo) {
            User.find({isCeo: true})
            .then(doc => {
                res.send(doc) })
        } else {
            res.send('fill out profile')
        }
    })
    
  //find users that match what I need and send them back to display
  
})

module.exports = router;