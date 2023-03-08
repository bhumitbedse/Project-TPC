const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Compony = require("./Compony");

const JobRole = new Schema({
  Compony: {
    type: Schema.Types.ObjectId,
    required:true,
    ref:'Compony'
  },
  Role_Title: {
    type: String,
  },
  Role_Description: {
    type: String,
  },
  Role_Qualification: {
    type: String,
  },
  Role_Eligibility: {
    type: String,
  },
  Role_CTC: {
    type: String,
  },
  Role_InHand: {
    type: String,
  },
  Role_VariablePay: {
    type: String,
  },
  Location: {
    type: String,
  },
  Interview_Rounds_details: {
    type: String,
  },
  Deadline: {
    type: String,
  },
  Bond_year: {
    type: String,
  },
  Bond_Secuirty: {
    type: String,
  },
  Internship: {
    Internship_Period: {
      type: String,
    },
    Stidend: {
      type: String,
    },
  },
  Additional_Info: {
    type: String,
  },
  Attachments:{
    type:[String],
  }
});

module.exports = mongoose.model("JobRole", JobRole);
