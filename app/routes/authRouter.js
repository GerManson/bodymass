const express = require('express');
const authRouter = express.Router();
const authController = require('../controllers/authController');
const apiErrorHandler = require('../middleware/apiErrorHandler');
const auth = require('../middleware/auth');

authRouter.get('/', auth.jwt, authController.userInfo);
authRouter.post('/', authController.login);
authRouter.delete('/', authController.logout);
authRouter.get('/logout', authController.logout);
authRouter.post('/users', authController.register);

authRouter.use(apiErrorHandler);

module.exports = authRouter;
