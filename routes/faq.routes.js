const express = require("express");
const router = express.Router();

const faqController = require("../controllers/faq/faq.controller");
const { authorization } = require("../helpers/helpers");

router.post("/send", authorization, faqController.sendFaq);

module.exports = router;
