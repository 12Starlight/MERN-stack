const JwtStrategy = require('passport-jwt').Strategy; // Lets us use this strategy for handling jsonwebtokens
const ExtractJwt = require('passport-jwt').ExtractJwt;
const mongoose = require('mongoose');
const User = mongoose.model('users');
const keys = require('./keys');


const options = {};
options.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken(); // Extracts jsonwebtoken from the header
options.secretOrKey = keys.secretOrKey;


module.exports = passport => {
  passport.use(new JwtStrategy(options, (jwt_payload, done) => {
    // This payload includes the items we specified earlier
    User.findById(jwt_payload.id)
      .then(user => {
        if (user) {
          // return the user to the frontend
          return done(null, user);
        }
        // return false since there is no user
        return done(null, false);
      })
      .catch(error => console.log(error));
  }));
};