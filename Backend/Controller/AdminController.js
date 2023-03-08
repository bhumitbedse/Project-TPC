const Admin = require("../Models/Admin");
const User = require("../Models/User");
const bcrypt = require("bcryptjs");
const mongoose = require("mongoose");

const getAllAdmins = async (req, res, next) => {
  let admin;
  try {
    admin = await Admin.find();
  } catch (err) {
    console.log(err);
  }
  if (!admin) {
    return res.status(404).json({ message: "Admin are not found" });
  }
  return res.status(200).json({ admin });
  //new comment
};

const addNewAdmin = async (req, res, next) => {
  res.set("Access-Control-Allow-Origin", "*");
  let { Email, Password, Name, Designation, Mobile } = req.body;

  const UserType = "Admin";
  let user;
  try {
    let existUser = await User.findOne({ Email: Email }).exec();
    //if already exist then not create
    if (existUser) {
      return res.status(400).json({
        message: "User Already exists",
      });
    }

    //encrypt password
    let EncrptPassword = bcrypt.hashSync(Password);
    const newUser = new User({
      Email,
      EncrptPassword,
      UserType,
    });

    const session = await mongoose.startSession();
    session.startTransaction();
    user = await newUser.save();
    const UserID = user._id;
    console.log("ID : "+UserID);
    const newAdmin = new Admin({
      Email,
      EncrptPassword,
      Name,
      Designation,
      Mobile,
      UserID
    });
    await newAdmin.save();
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
      code: "Admin Added Successfully !!",
    },
  });
};

const getAdminById = async (req, res, next) => {
  res.set("Access-Control-Allow-Origin", "*");

  const adminID = req.params.id;

  let admin;
  console.log("AdminID:" + adminID);
  try {
    admin = await Admin.find({ userId: adminID });
  } catch (e) {
    console.log("Exception: " + e);
    return res.status(400).json({
      success: false,
      response: {
        message: e,
      },
    });
  }

  if (!admin) return res.status(500).json({ message: "Not Found !!" });
  return res.status(200).json({ success: true, admin });
};

const updateAdmin = async (req, res, next) => {
  res.set("Access-Control-Allow-Origin", "*");
  const { adminid, Email, Password, Name, Designation, Mobile } = req.body;

  try {
    const update = {
      Email,
      Password,
      Name,
      Designation,
      Mobile,
    };

    await Admin.findOneAndUpdate({ userId: adminid }, update);
  } catch (error) {
    console.log(error);
    return res.status(400).json({
      success: false,
      response: {
        error,
      },
    });
  }
  return res.status(200).json({
    success: true,
    response: {
      code: "Admin Details Updated Successfully !!",
      data: {},
    },
  });
};
module.exports = {
  getAllAdmins,
  addNewAdmin,
  getAdminById,
  updateAdmin,
};
