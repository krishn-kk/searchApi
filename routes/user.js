const express = require("express");
const router = express.Router();
const getDataByField = require("../controller/user");

router.get("/user/:field", getDataByField);

module.exports = router;
