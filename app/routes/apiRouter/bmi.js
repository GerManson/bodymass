const express = require('express');
const bmiRouter = express.Router();
const bmiController = require('../../controllers/bmiController');
const apiErrorHandler = require('../../middleware/apiErrorHandler');

bmiRouter.post('/', bmiController.calculate);
bmiRouter.use(apiErrorHandler);

module.exports = bmiRouter;
