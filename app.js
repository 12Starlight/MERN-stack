// Import Express Mongoose
const express = require('express');
const app = express();
const mongoose = require('mongoose');

const db = require('./config/keys').mongoURI; // Gives us an object back, we want the mongoURI key
const users = require('./routes/api/users'); // After we created our routes they need to be imported
const notes = require('./routes/api/notes');
const User = require('./models/User');
const bodyParser = require('body-parser'); // Tells our app what sorts of requests, it should respond to


mongoose 
  .connect(db, { useNewUrlParser: true }) // Connecting to the database, 2nd arg config object 
  .then(() => console.log('Connected to MongoDB successfully'))
  .catch(err => console.log(err));

app.use(bodyParser.urlencoded({ extended: false })); // App responds to other software like postman, Takes an options object
app.use(bodyParser.json()); // Told our app we want it to respond to json requests

app.get('/', (req, res) => {
  // console.log(res); 
  // debugger; 
  const user = new User({
    handle: 'starlight',
    email: 'starlight@gmail.com',
    password: 'starlight123'
  })
  user.save()
  res.send('Hello World! We are building a Google Keep clone')
});

// Express Router
app.use('/api/users', users); // After we import the routes, we need to use them in app.js in order for them to work
app.use('/api/notes', notes);
  


const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server is running on port ${port}`));