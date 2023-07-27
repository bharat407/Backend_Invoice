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

// Delete Customer by Email
router.delete("/deleteCustomer/:email", async (req, res) => {
  const customerEmail = req.params.email;
  try {
    const deletedCustomer = await AddCustomer.findOneAndDelete({
      email: customerEmail,
    });
    if (deletedCustomer) {
      console.log("Deleted customer:", deletedCustomer);
      res
        .status(200)
        .json({ success: true, message: "Customer deleted successfully." });
    } else {
      console.log("Customer not found");
      res.status(404).json({ success: false, message: "Customer not found." });
    }
  } catch (error) {
    console.error("Error deleting customer:", error);
    res
      .status(500)
      .json({ success: false, message: "Failed to delete customer." });
  }
});

// Update Customer by Email
router.put("/updateCustomer/:email", async (req, res) => {
  const customerEmail = req.params.email;
  console.log("Customer Email:", customerEmail);
  console.log("Update data:", req.body);
  try {
    const updatedCustomer = await Customer.findOneAndUpdate(
      { email: customerEmail },
      req.body,
      { new: true }
    );
    if (updatedCustomer) {
      console.log("Updated customer:", updatedCustomer);
      res.status(200).json(updatedCustomer);
    } else {
      console.log("Customer not found");
      res.status(404).json({ error: "Customer not found" });
    }
  } catch (err) {
    console.error("Error updating customer:", err);
    res.status(500).json({ error: "Error updating customer" });
  }
});

module.exports = router;
