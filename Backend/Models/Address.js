const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Address = new Schema({
  LocalAddress: {
    HouseNo: {
      type: String,
    },
    Landmark: {
      type: String,
    },
    City: {
      type: String,
    },
    District: {
      type: String,
    },
    Pincode: {
      type: String,
    },
    State: {
      type: String,
    },
    Country: {
      type: String,
    },
  },
  CurrentAddress: {
    HouseNo: {
      type: String,
    },
    Landmark: {
      type: String,
    },
    City: {
      type: String,
    },
    District: {
      type: String,
    },
    Pincode: {
      type: String,
    },
    State: {
      type: String,
    },
    Country: {
      type: String,
    },
  },
});

module.exports = mongoose.model("Address", Address);
