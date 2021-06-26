const express = require('express');
const mongoose = require('mongoose');
const authRoutes = require('./routes/authRoutes');
const app = express();

// middleware
app.use(express.static('public'));
app.use(express.json());

// view engine
app.set('view engine', 'ejs');

// database connection
const dbURI = 'mongodb+srv://Shobhit:Jokers123@@cluster0.0kqcx.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex:true })
  .then((result) => app.listen(3000))
  .catch((err) => console.log(err));

// routes
app.get('/', (req, res) => res.send('home'));
app.get('/smoothies', (req, res) => res.send('smoothies'));
app.use(authRoutes);