const passport = require('passport');
const ApiError = require('../util/ApiError');

function isAuthenticated (req, res, next) {
  if (req.isAuthenticated()) return next();
  next(new ApiError(401, 'Unauthenticated'));
}

function optionalJwt (req, res, next) {
  if (req.cookies && req.cookies.jwt) {
    return passport.authenticate('jwt', { session: false }, (err, user, info) => {
      if (err) return next(err);
      req.user = user;
      return next();
    })(req, res, next);
  }
  return next();
}

module.exports = {
  jwt: passport.authenticate('jwt', { session: false }),
  isAuthenticated,
  optionalJwt
};
