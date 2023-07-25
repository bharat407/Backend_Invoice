const express = require("express");
const router = express.Router();
const { createCustomer } = require("../controller/createCustomer");

router.post("/createCustomer", createCustomer);

module.exports = router;
