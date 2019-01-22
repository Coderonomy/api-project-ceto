const express = require('express');
// const dummyData = require('./dummyData')
const cors = require('cors')
const mongoose = require('mongoose');

const app = new express();
const port = 5000;
app.use(cors())
app.use(express.json());


app.get('/' ,(req,res) => {
    res.send('api is live')
})

app.get('/data' ,(req,res) => {
    res.send(dummyData)
})



app.listen(port, () => console.log(`listening on http://localhost:${port}`));