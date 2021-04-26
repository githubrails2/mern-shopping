require("dotenv").config("../.env");
const express = require("express");
const connectDB = require("./config/db.js");
const productRoutes = require("./routes/productRoutes.js");
connectDB();
const app = express();

app.use(express.json());
app.use("/products", productRoutes);
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`SERVER RUNNING on ${PORT}`));
