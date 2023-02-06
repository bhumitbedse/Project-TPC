const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Admin = new Schema({
  Email: {
    type: String,
  },
  Password: {
    type: String,
  },
  Name: {
    type: String,
  },
  Designation: {
    type: String,
  },
  Mobile: {
    type: Number,
  },
  UserID: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
});

module.exports = mongoose.model("Admin", Admin);
