require("dotenv").config();
const productsData = require("./data/products");

const connectDB = require("./config/db.js");

const Product = require("./models/Product.js");

connectDB();

const importData = async () => {
	try {
		await Product.deleteMany({});
		await Product.insertMany(productsData);
		console.log("Data Seeded");
		process.exit();
	} catch (error) {
		console.error("Error with Seeding");
		process.exit(1);
	}
};

importData();
