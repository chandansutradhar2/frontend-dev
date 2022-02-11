const usersController = require("../controller/user.controller");
//const middleware = require("../services/jwtinterceptor.service");
var express = require("express");

var router = express.Router();

router.post("/authenticate", usersController.getUserByEmail);

module.exports = router;
