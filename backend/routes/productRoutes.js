const express = require("express");

const router = express.Router();
const {
	getallProducts,
	getProductbyId,
} = require("../controller/productController.js");
//get all products
//route /api/products
router.get("/", getallProducts);

//get by id
//route /api/products/:Lid
router.get("/:id", getProductbyId);

module.exports = router;
