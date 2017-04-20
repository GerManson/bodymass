const passport = require('passport');
const ApiError = require('../util/ApiError');
const validator = require('validator');
const User = require('../models/user');

const login = (req, res, next) => {
  passport.authenticate('local', (err, user, info) => {
    if (err) return next(err);
    if (!user) return next(info);
    res.cookie('jwt', user.jwtToken(), { httpOnly: true });
    res.json({ ok: true });
  })(req, res, next);
};

const logout = (req, res, next) => {
  console.log('logging out');
  res.cookie('jwt', '');
  res.json({ ok: true });
};

const register = (req, res, next) => {
  let data = req.body;

  data.email = data.email ? data.email.toLowerCase().trim() : '';
  data.name = data.name ? data.name.trim() : '';
  // Start validating
  if (!data.email) return next(new ApiError(400, 'Ingresa tu correo electrónico'));
  if (!data.name) return next(new ApiError(400, 'Ingresa tu nombre completo'));
  if (!data.password) return next(new ApiError(400, 'Ingresa tu contraseña'));
  if (!data.confirm) return next(new ApiError(400, 'Ingresa la confirmación de tu contraseña'));
  if (data.password !== data.confirm) return next(new ApiError(400, 'La contraseña y la confirmación no coinciden'));
  if (!validator.isEmail(data.email)) return next(new ApiError(400, 'La dirección de correo electrónico no es válida'));
  if (data.password.length < 8) return next(new ApiError(400, 'La contraseña debe incluir mínimo 8 caracteres'));

  User.register(data)
    .then(_ => res.json({ ok: true }))
    .catch(next);
};

const userInfo = (req, res, next) => {
  res.json(req.user);
};

const authController = {
  login,
  logout,
  register,
  userInfo
};

module.exports = authController;
