const express = require("express");
const router = express.Router();

const safetyPlanController = require("../controllers/safetyplan/safetyplan.controller");
const safetyPlanValidator = require("../controllers/safetyplan/safetyplan.validator");
const { authorization } = require("../middleware/authorization");

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
  safetyPlanValidator.safetyPlanStatus,
  safetyPlanController.cancelSafetyPlan
);

router.put(
  "/complete",
  authorization,
  safetyPlanValidator.safetyPlanStatus,
  safetyPlanController.completeSafetyPlan
);

router.get("/details/:id", authorization, safetyPlanController.getSafetyPlan);

module.exports = router;
