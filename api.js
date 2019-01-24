const express = require('express');
const cors = require('cors')
const mongoose = require('mongoose');
const router = express.Router();
const auth = require('./controllers/auth');
const passportSetup = require('./config/passportSetup');


mongoose.connect('mongodb://localhost:27017/ceto',{ useNewUrlParser: true });
mongoose.connection.on('connected', () => {
  console.log('connected to mongod');
});
mongoose.connection.on('error', () => {
    console.log('failed to connect to mongod');
});


const app = new express();

const port = process.env.PORT || 5000;

//ejs 
app.set('view engine', 'ejs')


app.use(cors())
app.use(express.json());

app.use('/auth', auth);
app.use(require('./controllers'));

app.listen(port, () => console.log(`listening on http://localhost:${port}`));