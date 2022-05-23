const express = require("express");
const router = express.Router();

const userController = require("../controllers/user/user.controller");
const userValidator = require("../controllers/user/user.validator");
const { authorization } = require("../helpers/helpers");

router.get("/", (req, res) => {
  res.send({ message: "Hello World!!" });
});

router.post("/signup", userValidator.signup, userController.signup);
router.post("/login", userValidator.login, userController.login);
router.get("/logout", authorization, userController.logout);

router.post(
  "/refresh-token",
  userValidator.refresh,
  userController.refreshToken
);
router.post(
  "/forgot-password",
  userValidator.forgot,
  userController.forgotPassword
);
router.post(
  "/reset-password",
  authorization,
  userValidator.reset,
  userController.resetPassword
);
router.post(
  "/code-verify",
  userValidator.codeVerify,
  userController.codeVerify
);

router.post(
  "/update-code",
  authorization,
  userValidator.updateCode,
  userController.updateCode
);

router.put(
  "/update-number",
  authorization,
  userValidator.updateNumber,
  userController.updateNewNumber
);

module.exports = router;
