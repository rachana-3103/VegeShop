const express = require("express");
const router = express.Router();

const locationController = require("../controllers/location/location.controller");
const locationValidator = require("../controllers/location/location.validator");
const { authorization } = require("../helpers/helpers");

router.post(
  "/add",
  authorization,
  locationValidator.addLocation,
  locationController.addLocation
);

router.get("/list", authorization, locationController.getLocation);

router.delete("/delete", authorization, locationController.deleteLocation);

router.put(
  "/update",
  authorization,
  locationValidator.updateLocation,
  locationController.updateLocation
);

router.get("/details/:id", authorization, locationController.getLocationDetails);

module.exports = router;
