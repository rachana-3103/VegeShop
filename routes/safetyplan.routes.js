const express = require("express");
const router = express.Router();

const safetyPlanController = require("../controllers/safetyplan/safetyplan.controller");
const safetyPlanValidator = require("../controllers/safetyplan/safetyplan.validator");
const { authorization } = require("../helpers/helpers");

router.post(
  "/add",
  authorization,
  safetyPlanValidator.addSafetyPlan,
  safetyPlanController.addSafetyPlan
);

router.put(
  "/update",
  authorization,
  safetyPlanValidator.updateSafetyPlan,
  safetyPlanController.updateSafetyPlan
);

router.put(
  "/cancel",
  authorization,
  safetyPlanController.cancelSafetyPlan
);

router.put(
  "/complete",
  authorization,
  safetyPlanController.completeSafetyPlan
);

router.get("/details", authorization, safetyPlanController.getSafetyPlan);

router.post(
  "/alert",
  authorization,
  safetyPlanValidator.alertSafetyPlan,
  safetyPlanController.alertSafetyPlan
);

router.post(
  "/check-in-out",
  authorization,
  safetyPlanController.checkInOut
);

router.post(
  "/extend",
  authorization,
  safetyPlanController.extend
);

module.exports = router;
