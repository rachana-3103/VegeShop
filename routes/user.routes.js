const express = require('express');

const router = express.Router();

// const userController = require('../controllers/user/user.controller');
// const userValidator = require('../controllers/user/user.validator');

router.get('/', (req, res) => {
  res.send({ message: 'Hello World!!' });
});

// router.post('/register', userValidator.registerValidator, userController.register);
// router.post('/login', userValidator.loginValidator, userController.login);

module.exports = router;
