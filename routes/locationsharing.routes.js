const express = require("express");
const router = express.Router();

const locationSharingController = require("../controllers/locationsharing/locationsharing.controller");
const locationSharingValidator = require("../controllers/locationsharing/locationsharing.validator");
const { authorization } = require("../helpers/helpers");

router.post(
  "/static",
  authorization,
  locationSharingValidator.locationSharing,
  locationSharingController.locationSharing
);

router.post(
  "/status",
  authorization,
  locationSharingValidator.status,
  locationSharingController.status
);

module.exports = router;
