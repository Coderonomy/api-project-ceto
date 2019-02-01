const express = require('express');
const router = express.Router();

const User = require('../models/User')


//testing api
router.get('/' ,(req,res) => {
    res.send('home',{user:req.user})
})

// auth login 
router.get('/login', (req,res) =>{
    res.send('login')
})

//DB post test
router.post('/user', (req,res) => {
    const {
        googleID,
        username,
        email,
        isCeo,
        isCto,
        isNetworker,
        location,
        openToRemoteConnections, 
        genderIdentity, 
        bio,
        pic,
        ctoSpecifics,
        ceoSpecifics,
        message
    } = req.body

    User.create({
        googleID,
        username,
        email,
        isCeo,
        isCto,
        isNetworker,
        location,
        openToRemoteConnections, 
        genderIdentity, 
        bio,
        pic,
        ctoSpecifics,
        ceoSpecifics,
        message 
    },(err, doc) => {
        console.log(err, doc)
        return res.send(doc)
    })
})

module.exports = router;



// previous data fields:
        // username, 
        // email, 
        // location, 
        // gender, 
        // bio, 
        // pic, 
        // readyToMatch, 
        // CEO, 
        // CTO, 
        // myBusinessStage, 
        // myBusinessSkills, 
        // techSkillsRequired, 
        // equityOffered, 
        // myTechSkills, 
        // businessSkillsRequired, 
        // connections 