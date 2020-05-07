const JwtStrategy = require('passport-jwt').Strategy; // Lets us use this strategy for handling jsonwebtokens
const ExtractJwt = require('passport-jwt').ExtractJwt;
const mongoose = require('mongoose');
const User = mongoose.model('users');
const keys = require('./keys');


const options = {};
options.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken(); // Extracts jsonwebtoken from the header
options.secretOrKey = keys.secretOrKey;


module.exports = (passport) => {
  passport.use(new JwtStrategy(options, (jwt_payload, done)  => {
    console.log(jwt_payload);
    done(); 
  }))
}