const express = require('express');
const mongoose = require('mongoose');
const authStudent = require('./routes/authStudent');
const authInstructor = require('./routes/authInstructor');
const Instructor = require('./routes/instructor');
const Student = require('./routes/student');
const cookieParser = require('cookie-parser');
const { requireAuth, checkUser } = require('./middleware/authMiddleware');

const app = express();

// middleware
app.use(express.json());
app.use(cookieParser());

// view engine
app.set('view engine', 'ejs');

// database connection
const dbURI = 'mongodb://localhost:27017/ClassManagement'
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex:true })
  .then((result) => app.listen(3000))
  .catch((err) => console.log(err));

// routes
app.get('*', checkUser);
app.get('/', (req, res) => res.send('home'));
app.use(authStudent);
app.use(authInstructor);
app.use(Instructor);
app.use(Student);