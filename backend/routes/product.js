const express = require("express");
const router = express.Router();
const ListProduct = require("../models/Product");
const { createProduct } = require("../controller/createProduct");
const { getProduct } = require("../controller/getProduct");

// Product Added in DB

router.post("/createProduct", createProduct);

// Fething All Products from DB

router.get("/getallProduct", getProduct);

router.delete("/deleteProduct/:id", async (req, res) => {
  const productId = req.params.id;

  try {
    const deletedProduct = await ListProduct.findByIdAndDelete(productId);

    if (deletedProduct) {
      // Product was found and deleted successfully
      res
        .status(200)
        .json({ success: true, message: "Product deleted successfully." });
    } else {
      // Product with the given ID was not found
      res.status(404).json({ success: false, message: "Product not found." });
    }
  } catch (error) {
    // If there's an error during deletion, send an error response
    console.error("Error deleting Product:", error);
    res
      .status(500)
      .json({ success: false, message: "Failed to delete Product." });
  }
});

// Product with the given ID was Update or not found

router.put("/updateProduct/:id", (req, res) => {
  const productId = req.params.id;
  console.log("Product ID:", productId);
  console.log("Update data:", req.body);
  ListProduct.findByIdAndUpdate(productId, req.body, { new: true })
    .then((updatedProduct) => {
      if (updatedProduct) {
        console.log("Updated Product:", updatedProduct);
        res.status(200).json(updatedProduct);
      } else {
        console.log("Product not found");
        res.status(404).json({ error: "Product not found" });
      }
    })
    .catch((err) => {
      console.error("Error updating Product:", err);
      res.status(500).json({ error: "Error updating Product" });
    });
});

module.exports = router;
