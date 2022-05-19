const express = require("express");
const router = express.Router();

const userController = require("../controllers/user/user.controller");
const userValidator = require("../controllers/user/user.validator");
const { authorization } = require("../middleware/authorization");

router.get("/", (req, res) => {
  res.send({ message: "Hello World!!" });
});

router.post("/signup", userValidator.signupValidator, userController.signup);
router.post("/login", userValidator.loginValidator, userController.login);
router.post(
  "/refresh-token",
  userValidator.refreshValidator,
  userController.refreshToken
);
router.post(
  "/forgot-password",
  userValidator.forgotValidator,
  userController.forgotPassword
);
router.post(
  "/reset-password",
  authorization,
  userValidator.resetValidator,
  userController.resetPassword
);
router.post(
  "/code-verify",
  userValidator.codeVerifyValidator,
  userController.codeVerify
);

router.post(
  "/update-code",
  authorization,
  userValidator.updateCodeValidator,
  userController.updateCode
);

router.put(
  "/update-number",
  authorization,
  userValidator.updateNumberValidator,
  userController.updateNewNumber
);


module.exports = router;
