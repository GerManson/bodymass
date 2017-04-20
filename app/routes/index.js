const path = require('path');
const express = require('express');
const authRouter = require('./authRouter');
const apiRouter = require('./apiRouter');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const auth = require('../middleware/auth');

module.exports = function (app) {
  app.use(bodyParser.json({ limit: '100kb' }));
  app.use(cookieParser());
  app.use('/auth', authRouter);
  app.use('/api', apiRouter);

  // routing static assets from build
  app.use(express.static(path.resolve(__dirname, '../../build')));

  // webpack hot reloading hack
  if (process.env.NODE_ENV === 'hot') {
    const webpack = require('webpack');
    const webpackConfig = require('../../webpack.config');
    const compiler = webpack(webpackConfig);

    app.use(require('webpack-dev-middleware')(compiler, {
      noInfo: true, publicPath: webpackConfig.output.publicPath
    }));
    app.use(require('webpack-hot-middleware')(compiler));
  }

  app.get('*', auth.optionalJwt, function (req, res, next) {
    if (req.user) {
      return res.sendFile(path.resolve(__dirname, '../../build/dashboard/index.html'));
    }
    return res.sendFile(path.resolve(__dirname, '../../build/public/index.html'));
  });
};
