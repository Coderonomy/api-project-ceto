const express = require('express');
const router = express.Router();

//testing api
router.get('/' ,(req,res) => {
    res.send('home')
})

// auth login 
router.get('/login', (req,res) =>{
    res.send('login')
})

module.exports = router;