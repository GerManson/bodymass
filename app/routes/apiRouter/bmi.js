const express = require('express');
const clientRouter = express.Router();
const bmiController = require('../../controllers/bmiController');

clientRouter.post('/', bmiController.calculate);

module.exports = clientRouter;
