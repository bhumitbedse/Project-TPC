const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Compony = new Schema({
  ComponyName: {
    type: String,
  },
  Description: {
    type: String,
  },
  Location: {
    type: String,
  },
  Qualification: {
    type: String,
  },
  Eligibility: {
    type: String,
  },
  Website: {
    type: String,
  },
  Email: {
    type: String,
  },
  Attachments:{
    type:[String],
  }
});

module.exports = mongoose.model("Compony", Compony);
