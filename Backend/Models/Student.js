const mongoose = require("mongoose");
const Address = require("./Address");
const Education = require("./Education");

const Schema = mongoose.Schema;

const Student = new Schema({
  Name: {
    type: String,
  },
  ID: {
    type: String,
  },
  Email: {
    type: String,
  },
  Password: {
    type: String,
  },
  Mobile: {
    type: String,
  },
  Department: {
    type: String,
  },
  YearofPassing: {
    type: String,
  },
  EligibleforPlacement: {
    type: String,
  },
  PlacementStatus: {
    type: String,
  },
  Resume: {
    type: String,
  },
  Education: {
    type: Education,
  },
  Address: {
    type: Address,
  },
  UserID: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
});

module.exports = mongoose.model("Student", Student);
