const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('authorized')
})

router.get('/completed-profile', (req, res) => {
    res.send('have hit the complete-profile route, this is where we will add the logic to get the matches')
})

router.get('/incomplete-profile', (req, res) => {
    res.send('have hit the incomplete-profile route, this is because user has not completed enough form fields, will return only the top level data to profile, and prompt user to complete remaining fields')
})

module.exports = router;