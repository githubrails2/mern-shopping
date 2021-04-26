require("dotenv").config();
const mongoose = require("mongoose");

const connectDB = async () => {
	try {
		await mongoose.connect(process.env.MONGOURI, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
		});
		console.log("Mongo established");
	} catch (error) {
		console.error("Mongo failed ");
		process.exit(1);
	}
};

module.exports = connectDB;
