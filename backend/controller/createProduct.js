const Product = require("../models/Product");

exports.createProduct = async (req, res) => {
  try {
    console.log("req body", req.body);
    const { name, price, details, taxrates, taxmethod } = req.body;
    if (!name || !price || !details || !taxrates || !taxmethod) {
      console.log("Not all fields...");
      return res.status(400).json({
        status: 400,
        message: "Please fill all fields",
      });
    }
    const product = await Product.create({
      name,
      price,
      details,
      taxrates,
      taxmethod,
    });
    return res.status(200).json({
      status: 201,
      message: "Product created successfully",
      data: product,
    });
  } catch (error) {
    console.log("error", error);
    return res.status(500).json({
      status: 500,
      message: error.message,
    });
  }
};
