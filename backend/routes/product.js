const express = require("express");
const router = express.Router();
const { createProduct } = require("../controller/createProduct");
// const { getUser } = require("../controller/getUser");

router.post("/createProduct", createProduct);
// router.get("/getUsers", getUser);

module.exports = router;
