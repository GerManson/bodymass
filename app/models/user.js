const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');
const crypto = require('crypto');
const jwt = require('jsonwebtoken');
const moment = require('moment');
const ApiError = require('../util/ApiError');
const commonModelOptions = require('../util/commonModelOptions');
const mailgun = require('mailgun-js')({
  apiKey: process.env.MAILGUN_API_KEY,
  domain: process.env.MAILGUN_DOMAIN
});

const RecoveryTokenSchema = new Schema({
  token: { type: String, required: true },
  expires_at: { type: Date, required: true }
}, {
  _id: false
});

const UserSchema = new Schema({
  created_at: { type: Date, default: Date.now, select: false },
  name: { type: String, required: true },
  email: { type: String, unique: true, required: true, trim: true, lowercase: true },
  password: { type: String, required: true, select: false },
  recovery_token: { type: RecoveryTokenSchema, select: false },
  referralId: {
    microsoft: String
  }
}, commonModelOptions);

UserSchema.statics.register = function (data) {
  return this.count({ email: data.email })
    .then(count => {
      if (count > 0) return Promise.reject(ApiError.Forbidden('Ya existe un usuario registrado con ese correo electrónico'));
      return this.checkWhitelisted(data.email);
    })
    .then(_ => this.generateHash(data.password))
    .then(hashedPassword => {
      data.password = hashedPassword;
      return this.create(data);
    })
    .then(user => user.sendWelcomeEmail());
};

UserSchema.statics.checkWhitelisted = function (email) {
  if (process.env.NODE_ENV === 'production') {
    // TODO: Connect to CTI API and validate the email as a registered distributor
  }
  return Promise.resolve(true);
};

UserSchema.statics.generateHash = function (text) {
  return bcrypt.genSalt(8)
    .then(salt => bcrypt.hash(text, salt));
};

UserSchema.methods.isValidPassword = function (password) {
  return bcrypt.compare(password, this.password);
};

UserSchema.methods.sendWelcomeEmail = function () {
  return mailgun.messages().send({
    from: 'German de BodyMass <germanson@gmail.com>',
    to: this.email,
    subject: 'Bienvenido(a) a BodyMass',
    text: `Hola ${this.name},\n\nBienvenido a BodyMass. Esta herramienta te permitirá saber tu masa corporal de una forma fácil y divertida.\n\nMuchas Gracias.\n\n- El equipo de BodyMass.`
  });
};

UserSchema.methods.jwtToken = function () {
  return jwt.sign(
    { userId: this.id },
    process.env.JWT_SECRET,
    { expiresIn: '365d', issuer: process.env.JWT_ISSUER }
  );
};

module.exports = mongoose.model('User', UserSchema);
