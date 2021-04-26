const Product = require("../models/Product.js");

const getallProducts = async (req, res) => {
	try {
		const products = await Product.find({});
		res.json(products);
	} catch (error) {
		console.error(error);
		res.status(500).json({ message: "Server error" });
	}
};

const getProductbyId = async (req, res) => {
	try {
		const product = await Product.findById(req.params.id);
		res.json(product);
	} catch (error) {
		console.error(error);
		res.status(500).json({ message: "Server error" });
	}
};

module.exports = { getallProducts, getProductbyId };
