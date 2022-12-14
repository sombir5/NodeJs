// const express = require("express");
const Product = require("../modal/product.modal");

const addProduct = async (req, res) => {
  const { name, price } = req.body;
  try {
    let productExist = await Product.findOne({ name });
    if (productExist) {
      return res.send("Product already exist");
    }
    let product = await Product.create({ name, price });
    product.save();
    res.send({ product, message: "Product Added" });
  } catch (error) {
    console.log(error.message);
  }
};
const AllProduct = async (req, res) => {
  try {
    let products = await Product.find({});
    res.send({ products, message: "All product" });
  } catch (error) {
    console.log(error.message);
  }
};
const ProductID = async (req, res) => {
  const id = req.params.id;
  try {
      let product = await Product.findOne({_id:id}).populate("hero");
    console.log(product)     
    return res.send({ product});
    
  } catch (error) {
    console.log(error.message);
  }
};
const UpdateProduct = async (req, res) => {
      const id = req.params.id;
  try {
    let product = await Product.findByIdAndUpdate(
      id,
      { $set: req.body },
      { new: true }
    );
    res.send({ product, message: "UpdateProduct" });
  } catch (error) {
    console.log(error.message);
  }
};
const DeleteProduct = async (req, res) => {
      const id = req.params.id;
  try {
    let product = await Product.findByIdAndDelete(id);
    res.send({ message: "Delete Product" });
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = {
  addProduct,
  AllProduct,
  ProductID,
  UpdateProduct,
  DeleteProduct,
};
