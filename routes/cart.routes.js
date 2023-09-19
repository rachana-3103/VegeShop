const express = require("express");
const router = express.Router();

const cartController = require("../controllers/cart/cart.controller");
const cartValidator = require("../controllers/cart/cart.validator");
const { authorization , authorizationUser} = require("../helpers/helpers");

router.post(
  "/add",
  authorizationUser,
  cartValidator.addCart,
  cartController.addCart
);

router.get("/list-order", authorizationUser, cartController.listOrder);
router.post("/cancel-order", authorizationUser, cartController.cancelOrder);
router.get("/details/:id", authorizationUser, cartController.getOrderDetails);

// router.delete("/delete", authorization, groupController.deleteGroup);

// router.put(
//   "/update",
//   authorization,
//   groupValidator.updateGroup,
//   groupController.updateGroup
// );

module.exports = router;
