const express = require("express");
const router = express.Router();

const groupController = require("../controllers/group/group.controller");
const groupValidator = require("../controllers/group/group.validator");
const { authorization } = require("../middleware/authorization");

router.post(
  "/add",
  authorization,
  groupValidator.addGroup,
  groupController.addGroup
);

router.get("/list", authorization, groupController.listGroup);

router.get("/details/:id", authorization, groupController.getGroupDetails);

router.delete("/delete", authorization, groupController.deleteGroup);

router.put(
  "/update",
  authorization,
  groupValidator.updateGroup,
  groupController.updateGroup
);

module.exports = router;
