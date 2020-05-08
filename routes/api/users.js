const express = require('express');
const router = express.Router();

const User = require('../../models/User');
const bcrypt = require('bcryptjs'); 
const keys = require('../../config/keys');
const jwt = require('jsonwebtoken');
const validateRegisterInput = require('../../validation/register');
const validateLoginInput = require('../../validation/login');


router.get('/test', (req, res) => res.json({ msg: 'This is the users route'}));


// Express Controller
router.post('/register', (req, res) => {
  const { errors, isValid } = validateRegisterInput(req.body);

  if (!isValid) {
    return res.status(400).json(errors);
  }
  
  User.findOne({ email: req.body.email })
    .then(user => { 
      if (user) {
        return res.status(400).json({ msg: 'A user is already registered with that email' })
      } else {
        const newUser = new User({
          handle: req.body.handle,
          email: req.body.email,
          password: req.body.password
        })

        // Use bcrypt to hash and generate salt
        bcrypt.genSalt(10, (err, salt) => {
          bcrypt.hash(newUser.password, salt, (err, hash) => {
            if (err) throw err; 
            newUser.password = hash;
            newUser.save()
              .then(user => res.json(user))
              .catch(err => console.log(err))   
          })
        })  
      }
    })
}) 

router.post('/login', (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  User.findOne({ email }) // returns a promise, the one object
    .then(user => {
      if (!user) {
        return res.status(404).json({ email: 'This user does not exist.' });
      }

      bcrypt.compare(password, user.password)
        .then(isMatch => {
          if (isMatch) {
            // res.json({ msg: 'Success!'})
            const payload = {
              id: user.id,
              handle: user.handle,
              email: user.email 
            }
            jwt.sign( // Successfully created the jwt and sent it back to the user
              payload,
              keys.secretOrKey,
              { expiresIn: 3600 },
              (err, token) => {
                res.json({
                  success: true,
                  token: 'Bearer ' + token
                })
              }
            )
          } else {
            return res.status(400).json({ password: 'Incorrect password' });
          }
        })
    })
})


module.exports = router; 