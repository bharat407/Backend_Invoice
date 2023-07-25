const Product = require("../models/Customer");

exports.createCustomer = async (req, res) => {
  try {
    console.log("req body", req.body);
    const {
      name,
      company,
      email,
      phone,
      address,
      city,
      postal,
      state,
      country,
    } = req.body;
    if (
      !name ||
      !company ||
      !email ||
      !phone ||
      !address ||
      !city ||
      !postal ||
      !state ||
      !country
    ) {
      console.log("Not all fields...");
      return res.status(400).json({
        status: 400,
        message: "Please fill all fields",
      });
    }
    const product = await Product.create({
      name,
      company,
      email,
      phone,
      address,
      city,
      postal,
      state,
      country,
    });
    return res.status(200).json({
      status: 201,
      message: "Custromer created successfully",
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
