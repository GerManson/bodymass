const secret = require('./secret');

process.env.MONGO_DB_URL = 'mongodb://localhost/bodymass';
process.env.JWT_SECRET = '4ebd0208-8328-5d69-8c44-ec50939c0967';
process.env.JWT_ISSUER = 'BodyMass';
process.env.IP = 'localhost';
process.env.PORT = '4040';
process.env.DOMAIN = 'http://localhost:4040';

process.env.MAILGUN_API_KEY = secret.MAILGUN_API_KEY;
process.env.MAILGUN_DOMAIN = secret.MAILGUN_DOMAIN;

console.log('Environment variables set for Development');
