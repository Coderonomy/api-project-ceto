require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const router = express.Router();
const auth = require('./controllers/auth');
const passportSetup = require('./config/passportSetup');
const cookieSession = require('cookie-session');
const passport = require('passport');
// const ejs = require('ejs');
const multer = require('multer')
const { uploadFile } = require('./utils/cloudinary')

mongoose.connect(process.env.DB_URL,{ useNewUrlParser: true });
mongoose.connection.on('connected', () => {
  console.log('connected to mongod');
});
mongoose.connection.on('error', () => {
    console.log('failed to connect to mongod');
});

const app = new express();
const port = process.env.PORT || 5000;
const storage = multer.memoryStorage()
const upload = multer({ storage })

//ejs 
// app.set('view engine', 'ejs')

//encrypts cookie for 24h
app.use(cookieSession({
  maxAge: 24*60*60*1000,
  keys: process.env.COOKIE_KEY
}))

// initialize passport
app.use(passport.initialize())
app.use(passport.session())

app.use(cors())
app.use(express.json());

app.use('/auth', auth);
app.use(require('./controllers'));

app.get('/google131742fa08bd8639.html', (req, res) => {
  res.sendFile(`${__dirname}/google131742fa08bd8639.html`)
});

app.post('/upload', upload.single('file'), (req, res) => {
  const { buffer } = req.file
  // console.log(buffer)
  uploadFile(buffer)
      .then(resp => {
          // console.log(resp.secure_url)
          // const user = new User({ username: 'jon', profileAvatar: resp.secure_url })
          // user.save(doc => res.send(doc))
          res.send(resp)
      })
      .catch(err => res.status(500).send('There was an error with Cloudinary'))
})

app.listen(port, () => console.log(`listening on http://localhost:${port}`));