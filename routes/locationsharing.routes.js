const express = require("express");
const router = express.Router();

const locationSharingController = require("../controllers/locationsharing/locationsharing.controller");
const locationSharingValidator = require("../controllers/locationsharing/locationsharing.validator");
const { authorization } = require("../middleware/authorization");

router.post(
  "/static",
  authorization,
  locationSharingValidator.locationSharing,
  locationSharingController.locationSharing
);

module.exports = router;
