//const courseController = require("../controllers/course.controller");

var express = require("express");

var router = express.Router();

router.post("/authenticate", (req, res, next) => {
	res.status(200).send({
		result: true,
		token: "ye7hh-2832ey2-2e7237ey27e-2727272-377whd7whwed",
	});
});
module.exports = router;
