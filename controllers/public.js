const express = require('express');
const router = express.Router();

const User = require('../models/User')


//testing api
router.get('/' ,(req,res) => {
    res.send('api is live in public')
})

// auth login 
router.get('/login', (req,res) =>{
    res.render('login')
})

//DB post test
router.post('/user', (req,res) => {
    const {
        username, 
        email, 
        location, 
        gender, 
        bio, 
        pic, 
        readyToMatch, 
        CEO, 
        CTO, 
        myBusinessStage, 
        myBusinessSkills, 
        techSkillsRequired, 
        equityOffered, 
        myTechSkills, 
        businessSkillsRequired, 
        connections} = req.body

    User.create({
        username, 
        email, 
        location, 
        gender, 
        bio, 
        pic, 
        readyToMatch, 
        CEO, 
        CTO, 
        myBusinessStage, 
        myBusinessSkills, 
        techSkillsRequired, 
        equityOffered, 
        myTechSkills, 
        businessSkillsRequired, 
        connections},(err, doc) => {
        console.log(err, doc)
        return res.send(doc)
    })
})

module.exports = router;