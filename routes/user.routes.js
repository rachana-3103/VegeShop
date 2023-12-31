const express = require("express");
const router = express.Router();

const userController = require("../controllers/user/user.controller");
const userValidator = require("../controllers/user/user.validator");
const { authorization, authorizationUser} = require("../helpers/helpers");

router.post("/signup", userValidator.signup, userController.signup);
router.post("/login", userValidator.login, userController.login);
router.post(
  "/change-password",
  authorization,
  userValidator.changePassword,
  userController.changePassword
);
router.put(
  "/update-profile",
  authorization,
  userValidator.updateProfile,
  userController.updateProfile
);

router.get("/logout", authorizationUser, userController.logout);

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

router.post(
  "/token",
  authorization,
  userValidator.deviceTokenUpdate,
  userController.deviceTokenUpdate
);

router.post("/notification-send", userController.notificationSend);



router.delete(
  "/delete-account",
  authorization,
  userController.deleteAccount
);

router.post(
  "/settings",
  userValidator.settings,
  userController.settings
);

router.post(
  "/notification",
  authorization,
  userController.notification
);

module.exports = router;
