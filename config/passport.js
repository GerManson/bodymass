const passport = require('passport');
const JwtStrategy = require('passport-jwt').Strategy;
const LocalStrategy = require('passport-local').Strategy;
const ApiError = require('../app/util/ApiError');
const User = require('../app/models/user');

var jwtCookieExtractor = function (req) {
  var token = null;
  if (req && req.cookies) token = req.cookies.jwt;
  return token;
};

const jwtOptions = {
  issuer: process.env.JWT_ISSUER,
  secretOrKey: process.env.JWT_SECRET,
  jwtFromRequest: jwtCookieExtractor
};

passport.use(new JwtStrategy(jwtOptions, function (payload, done) {
  if (!payload.userId) return done(ApiError.Unauthorized());
  User.findOne({ _id: payload.userId })
    .then(user => {
      if (!user) return done(ApiError.Unauthorized());
      done(null, user);
    })
    .catch(done);
}));

passport.use(new LocalStrategy({
  usernameField: 'email',
  passwordField: 'password'
}, (email, password, done) => {
  email = email.trim().toLowerCase();
  if (!email || !password) return done(new ApiError(400, 'Please type your email address'));
  var user;
  User.findOne({ email }).select('+password')
    .then(foundUser => {
      if (!foundUser) return Promise.reject(ApiError.Unauthorized('User not found'));
      user = foundUser;
      return user.isValidPassword(password);
    })
    .then(isValid => {
      if (!isValid) return Promise.reject(ApiError.Unauthorized('Wrong password'));
      done(null, user);
    })
    .catch(done);
}));
