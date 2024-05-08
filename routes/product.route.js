const express = require("express");
const Product = require("../models/product.model.js");
const router = express.Router();
const {getProducts, getProduct, createProduct, updateProduct, deleteProduct} = require('../controllers/product.controller.js');

// show all products
router.get('/', getProducts);

// show one product
router.get("/:id", getProduct);

// create one product
router.post("/", createProduct);

// update one product
router.put("/:id", updateProduct);

// delete one product
router.delete("/:id", deleteProduct);




module.exports = router;