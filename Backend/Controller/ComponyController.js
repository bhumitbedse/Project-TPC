const Compony = require('../Models/Compony')
const mongoose = require("mongoose");

const getAllComponies = async (req,res,next) => {
    let compony;
    try{
        compony = await Compony.find();
    }catch(err){
        console.log(err);
    }
    if (!compony) {
        return res.status(404).json({ message: "Compony are not found" });
      }
      return res.status(200).json({ compony });
}

const addNewCompony = async (req, res, next) => {
    res.set("Access-Control-Allow-Origin", "*");
    const {
        ComponyName,
        Description,
        Location,
        Qualification,
        Eligibility,
        Website,
        Email,
        Attachments,
      } = req.body;

    let compony;
    try {
      let existCompony = await Compony.findOne({ ComponyName: ComponyName }).exec();
      //if already exist then not create
      if (existCompony) {
        return res.status(400).json({
          message: "Compony Already exists",
        });
      }
  
      const newCompony = new Compony({
        ComponyName,
        Description,
        Location,
        Qualification,
        Eligibility,
        Website,
        Email,
        Attachments
      });
  
      const session = await mongoose.startSession();
      session.startTransaction();
      compony = await newCompony.save();
      session.commitTransaction();
    } catch (error) {
      console.log(error);
      return res.status(400).json({
        success: false,
        response: {
          message: "Fail,Some Error Occurred !!",
          error,
        },
      });
    }
    return res.status(200).json({
      success: true,
      response: {
        code: "Compony Added Successfully !!",
      },
    });
  };

  const getComponyById = async (req, res, next) => {
    res.set("Access-Control-Allow-Origin", "*");
  
    const componyID = req.params.id;
  
    let compony;
    console.log("componyID:" + componyID);
    try {
        compony = await Compony.find({ _id: componyID });
      console.log(compony);
    } catch (e) {
      console.log("Exception: " + e);
      return res.status(400).json({
        success: false,
        response: {
          message: e,
        },
      });
    }
  
    if (!compony) return res.status(500).json({ message: "Not Found !!" });
  
    return res.status(200).json({ success: true, compony });
  };

  module.exports = {
    getAllComponies,
    addNewCompony,
    getComponyById,
  };
  