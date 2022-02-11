const { MongoClient } = require("mongodb");
const jwt = require("jsonwebtoken");

const client = new MongoClient(
	"mongodb+srv://admin:hisyCn$AhkX5Ggz@lab-cluster-1.ihxrn.mongodb.net/test?authSource=admin&replicaSet=atlas-nmhvza-shard-0&readPreference=primary&appname=MongoDB%20Compass&ssl=true",
	{
		useNewUrlParser: true,
		useUnifiedTopology: true,
	},
);

exports.getUserByEmail = (req, res) => {
	if (req.body.email && req.body.password) {
		client.connect(async () => {
			//initialize connection with database collection
			const cursor = await client.db("finance-guru").collection("users").find({
				email: req.body.email,
				password: req.body.password,
			});
			//wait for read to complete
			const docs = await cursor.toArray();
			//check to ensure if the documents array has any document in it
			if (docs.length > 0) {
				//return token
				let token = jwt.sign({ user: docs }, "somesecret", {
					expiresIn: "1h",
				});
				res.status(200).send(token);
			} else {
				res.status(401).send("invalid credentials");
			}
		});
	} else {
		res.status(401).send("email and password is required");
	}
};
