const express = require('express');
const cors = require('cors')
const mongoose = require('mongoose');
const router = express.Router();

mongoose.connect('mongodb://localhost:27017/ceto');
mongoose.connection.on('connected', () => {
  console.log('connected to mongod');
});

mongoose.connection.on('error', () => {
    console.log('failed to connect to mongod');
});


const app = new express();
const port = 5000;
app.use(cors())
app.use(express.json());


app.use(require('./controllers'));

app.listen(port, () => console.log(`listening on http://localhost:${port}`));