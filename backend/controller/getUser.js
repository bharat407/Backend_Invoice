const User = require("../models/User");

exports.getUser = async (req, res) => {
  const { email } = req.body; // Assuming email and password are sent in the request body

  try {
    // Check if the provided email and password match any user in the database
    const userData = await User.findOne({ email });

    if (!userData) {
      return res.status(404).json({
        success: false,
        message: "User not found or invalid credentials",
      });
    }
   

    res.json({ success: true, data: userData });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};
