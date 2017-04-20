const app = require('express')();
const helmet = require('helmet');
const compression = require('compression');
const mongoose = require('mongoose');

// Environment
if (process.env !== 'production') {
  require('./config/dev_environment');
}

const db = require('./config/db');
const config = require('./config');

// Mongoose
mongoose.Promise = global.Promise;
mongoose.connect(db.url);

// Config app
require('./config/passport');
app.use(helmet());
app.use(compression());

// Routes
require('./app/routes')(app);

app.listen(config.port, config.ip);
console.log(`Running on http://${config.ip}:${config.port}`);
