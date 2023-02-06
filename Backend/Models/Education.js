const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const SchoolInfo = new Schema({
  School: {
    type: String,
  },
  MarksObtained: {
    type: Number,
  },
  Percentage: {
    type: Number,
  },
  Board: {
    type: String,
  },
});

const Education = new Schema({
  SPI: {
    1: { type: Number },
    2: { type: Number },
    3: { type: Number },
    4: { type: Number },
    5: { type: Number },
    6: { type: Number },
    7: { type: Number },
    8: { type: Number },
  },
  CPI: {
    1: { type: Number },
    2: { type: Number },
    3: { type: Number },
    4: { type: Number },
    5: { type: Number },
    6: { type: Number },
    7: { type: Number },
    8: { type: Number },
  },
  Secondory: {
    type: SchoolInfo,
  },
  HigherSecondory: {
    type: SchoolInfo,
  },
  Gujcet: {
    Score: {
      type: Number,
    },
  },
  JEE: {
    Score: {
      type: Number,
    },
  },
  isDiplomaStudent: {
    type: Boolean,
  },
  DiplomaDetails: {
    College: {
      type: String,
    },
    SPI: {
      type: Number,
    },
    University: {
      type: String,
    },
    StartYear: {
      type: String,
    },
    EndYear: {
      type: String,
    },
    Course: {
      type: String,
    },
  },
  BacklogStatus:{
    type:Boolean,
  },
});

module.exports = mongoose.model("Education", Education);
