const express = require("express");
const router = express.Router();

const safetyPlanController = require("../controllers/safetyplan/safetyplan.controller");
const safetyPlanValidator = require("../controllers/safetyplan/safetyplan.validator");
const { authorization } = require("../middleware/authorization");

router.post(
  "/add",
  authorization,
  safetyPlanValidator.safetyPlanValidator,
  safetyPlanController.addSafetyPlan
);

router.put(
  "/cancel",
  authorization,
  safetyPlanValidator.safetyPlanStatusValidator,
  safetyPlanController.cancelSafetyPlan
);

router.put(
  "/complete",
  authorization,
  safetyPlanValidator.safetyPlanStatusValidator,
  safetyPlanController.completeSafetyPlan
);

router.get("/details/:id", authorization, safetyPlanController.getSafetyPlan);

module.exports = router;
