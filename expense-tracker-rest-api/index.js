const express = require("express");
const app = express();
const investmentRoutes = require("./routes/investment-routes");

app.use(express.json());

app.use((req, res, next) => {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Methods", "GET,POST,HEAD,OPTIONS,PUT,PATCH");
	res.header(
		"Access-Control-Allow-Headers",
		"Origin,X-Requested-With,Content-Type,Accept,token",
	);
	next();
});

app.use("/investment", investmentRoutes);

app.listen(8000, () => {
	console.log("server started and listening on port 8000");
});
