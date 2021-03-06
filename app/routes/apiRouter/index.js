const express = require('express');
const apiRouter = express.Router();
const apiErrorHandler = require('../../middleware/apiErrorHandler');
const auth = require('../../middleware/auth');

apiRouter.use(auth.jwt);
apiRouter.use(apiErrorHandler);
apiRouter.use('/bmi', require('./bmi'));

module.exports = apiRouter;
