const express = require('express');

const router = express.Router();

const userController = require('../controllers/user/user.controller');
const userValidator = require('../controllers/user/user.validator');

router.get('/', (req, res) => {
  res.send({ message: 'Hello World!!' });
});

router.post('/signup', userValidator.signupValidator, userController.signup);
router.post('/login', userValidator.loginValidator, userController.login);
router.post('/forgot-password',  userController.forgotPassword);
router.post('/reset-password',  userController.resetPassword);



module.exports = router;
