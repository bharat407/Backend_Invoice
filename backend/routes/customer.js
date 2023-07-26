const express = require("express");
const router = express.Router();
const AddCustomer = require("../models/Customer");
const { createCustomer } = require("../controller/createCustomer");
const { getCustomer } = require("../controller/getCustomers");
const Customer = require("../models/Customer");

// Customer Added in DB

router.post("/createCustomer", createCustomer);

// Fething All Customers from DB

router.get("/getallCustomer", getCustomer);

router.delete("/deleteCustomer", async (req, res) => {
  const { email } = req.body;
  try {
    await AddCustomer.deleteOne({ email: { $in: email } });
    // Send a success response
    // Customer was found and deleted successfully
    res
      .status(200)
      .json({ success: true, message: "Customers deleted successfully." });
  } catch (error) {
    // If there's an error during deletion, send an error response
    console.error("Error deleting customers:", error);
    res
      .status(500)
      .json({ success: false, message: "Failed to delete customers." });
  }
});

// Customer with the given ID was Update or not found

router.put("/updateCustomer/:email", (req, res) => {
  const customerEmail = req.params.email;
  console.log("Customer Email:", customerEmail);
  console.log("Update data:", req.body);
  Customer.findOneAndUpdate({ email: customerEmail }, req.body, { new: true })
    .then((updatedCustomer) => {
      if (updatedCustomer) {
        console.log("Updated customer:", updatedCustomer);
        res.status(200).json(updatedCustomer);
      } else {
        console.log("Customer not found");
        res.status(404).json({ error: "Customer not found" });
      }
    })
    .catch((err) => {
      console.error("Error updating customer:", err);
      res.status(500).json({ error: "Error updating customer" });
    });
});

module.exports = router;
