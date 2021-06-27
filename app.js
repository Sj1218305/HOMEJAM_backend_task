const express = require('express');
const mongoose = require('mongoose');
const authStudent = require('./routes/authStudent');
const authInstructor = require('./routes/authInstructor');
const cookieParser = require('cookie-parser');
const { requireAuth, checkUser } = require('./middleware/authMiddleware');

const app = express();

// middleware
app.use(express.json());
app.use(cookieParser());

// view engine
app.set('view engine', 'ejs');

// database connection
const dbURI = 'mongodb+srv://Shobhit:Jokers123@@cluster0.0kqcx.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex:true })
  .then((result) => app.listen(3000))
  .catch((err) => console.log(err));

// routes
// app.get('*', checkUser);
app.get('/', (req, res) => res.send('home'));
app.get('/test', requireAuth, (req, res) => res.send('you are logged in '));
app.use(authStudent);
app.use(authInstructor);