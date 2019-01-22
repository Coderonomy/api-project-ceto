const express = require('express');
const seedData = require('./seedData')
const cors = require('cors')
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/ceto')
const User = require('./models/User')


const app = new express();
const port = 5000;
app.use(cors())
app.use(express.json());


app.get('/' ,(req,res) => {
    res.send('api is live')
})

app.get('/data' ,(req,res) => {
    res.send(seedData)
})

app.post('/user', (req,res) => {
    const {username, email, location, gender, bio, pic, readyToMatch, CEO, CTO, myBusinessStage, myBusinessSkills, techSkillsRequired, equityOffered, myTechSkills, businessSkillsRequired, connections} = req.body
    User.create({username, email, location, gender, bio, pic, readyToMatch, CEO, CTO, myBusinessStage, myBusinessSkills, techSkillsRequired, equityOffered, myTechSkills, businessSkillsRequired, connections},(err, doc) => {
        console.log(err, doc)
        return res.send(doc)
    })
})


app.listen(port, () => console.log(`listening on http://localhost:${port}`));