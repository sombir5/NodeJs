const express = require("express");
const { addProduct, AllProduct, ProductID, UpdateProduct, DeleteProduct } = require("../controller/product");
const { createReview,getReviews} = require("../controller/review");

const app = express.Router();

app.post("/addProduct",addProduct)
app.get("/allProduct",AllProduct)
app.get("/product/:id",ProductID)
app.put("/updateProduct/:id",UpdateProduct)
app.delete("/deleteProduct/:id", DeleteProduct);

app.post("/createReview",createReview)
app.get("/getReview",getReviews)
module.exports = app;