const Product = require("../models/Product");
exports.getProduct = async (req, res) => {
  try {
    const productData = await Product.find({});
    res.json({ success: true, data: productData });
  } catch (error) {
    res.status(500).json({ success: false, error: error });
  }
};
