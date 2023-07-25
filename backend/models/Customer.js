const mongoose = require("mongoose");

const AddCustomer = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },

  company: {
    type: String,
    require: true,
  },

  email: {
    type: String,
    required: true,
    unique: true,
  },

  phone: {
    type: String,
    require: true,
    unique: true,
  },

  address: {
    type: String,
    require: true,
  },

  city: {
    type: String,
    require: true,
  },

  postal: {
    type: String,
    require: true,
  },

  state: {
    type: String,
    require: true,
  },

  country: {
    type: String,
    require: true,
  },
});

module.exports = mongoose.model("AddCustomer", AddCustomer);
