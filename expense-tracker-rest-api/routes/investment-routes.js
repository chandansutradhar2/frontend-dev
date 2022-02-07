//const courseController = require("../controllers/course.controller");

var express = require("express");

var router = express.Router();

router.get("/mutualfunds", (req, res, next) => {
	res.status(200).json([
		{
			id: 1,
			name: "Axis Long growth fund",
			establishedYear: 40179,
			fundValue: 5600000,
			fundManager: "Mr X",
			avgReturn: 25,
			riskCategory: "balanced",
		},
		{
			id: 2,
			name: "Icici potential",
			establishedYear: 35917,
			fundValue: 589097000,
			fundManager: "Mr Y",
			avgReturn: 22,
			riskCategory: "low",
		},
		{
			id: 3,
			name: "icici max rturn",
			establishedYear: 43383,
			fundValue: 75000000,
			fundManager: "Mr Z",
			avgReturn: 23,
			riskCategory: "high",
		},
		{
			id: 4,
			name: "citi liquid fund",
			establishedYear: 42005,
			fundValue: 10000000,
			fundManager: "Mr K",
			avgReturn: 19,
			riskCategory: "low",
		},
		{
			id: 5,
			name: "ostwal prime fund",
			establishedYear: 42736,
			fundValue: 2600000,
			fundManager: "mr L",
			avgReturn: 10,
			riskCategory: "balanced",
		},
	]);
});
module.exports = router;
