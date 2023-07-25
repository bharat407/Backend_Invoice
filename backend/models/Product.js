const mongoose = require("mongoose");

const ListProduct = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },

  price: {
    type: Number,
    require: true,
  },

  details: {
    type: String,
    required: true,
  },

  taxrates: {
    type: [String],
    require: true,
  },

  taxmethod: {
    type: String,
    require: true,
  },
});

module.exports = mongoose.model("ListProduct", ListProduct);
