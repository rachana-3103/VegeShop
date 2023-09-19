const express = require("express");
const router = express.Router();

const productController = require("../controllers/product/product.controller");
const productValidator = require("../controllers/product/product.validator");
const { authorization , authorizationUser} = require("../helpers/helpers");

router.post(
  "/add-product",
  authorization,
  productValidator.addProduct,
  productController.addProduct
);

router.get("/list", authorizationUser, productController.listProduct);

router.get("/details/:id", authorizationUser, productController.getProductDetails);

// router.delete("/delete", authorization, groupController.deleteGroup);

// router.put(
//   "/update",
//   authorization,
//   groupValidator.updateGroup,
//   groupController.updateGroup
// );

module.exports = router;
