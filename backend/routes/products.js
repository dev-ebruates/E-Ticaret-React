const express = require("express");
const router = express.Router();
const Product = require("../models/Product.js");

//Product oluşturma
router.post("/", async (req, res) => {
  try {
    const newProduct = new Product(req.body);
    await newProduct.save();

    res.status(201).json(newProduct);
  } catch (error) {
    console.log(error);
  }
});

//tüm ürünleri getirme (Read All)
router.get("/", async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
    console.log(`Gönderilen product sayısı: ${products.length}`);
  } catch (error) {
    res.status(500).json({ error: "Server Error" });
  }
});

//belirli bir product getirme (read-single)
router.get("/:productId", async (req, res) => {
  try {
    try {
      const productId = req.params.productId;
      const product = await Product.findById(productId);
      res.status(200).json(product);
    } catch (error) {
      res.status(404).json({ error: "Product not found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Server Error" });
  }
});



module.exports = router;