const Student = require("../Models/Student");
const User = require("../Models/User");
const bcrypt = require("bcryptjs");
const mongoose = require("mongoose");

const getAllStudents = async (req, res, next) => {
  let student;
  try {
    student = await Student.find();
  } catch (err) {
    console.log(err);
  }
  if (!student) {
    return res.status(404).json({ message: "Student are not found" });
  }
  return res.status(200).json({ student });
  //new comment
};

const addNewStudent = async (req, res, next) => {
  res.set("Access-Control-Allow-Origin", "*");
  const {
    Name,
    ID,
    Email,
    Password,
    Mobile,
    Department,
    YearofPassing,
    EligibleforPlacement,
    PlacementStatus,
    Resume,
    Education,
    Address,
  } = req.body;

  const UserType = "Student";
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
    Password = bcrypt.hashSync(Pass);
    const newUser = new User({
      Email,
      Password,
      UserType,
    });

    const session = await mongoose.startSession();
    session.startTransaction();
    user = await newUser.save();
    const userId = user._id;
    const newStudent = new Student({
      Name,
      ID,
      Email,
      Password,
      Mobile,
      Department,
      YearofPassing,
      EligibleforPlacement,
      PlacementStatus,
      Resume,
      Education,
      Address,
      userId,
    });
    await newStudent.save();
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
      code: "Student Added Successfully !!",
    },
  });
};

const getStudentById = async (req, res, next) => {
  res.set("Access-Control-Allow-Origin", "*");

  const studentID = req.params.id;

  let student;
  console.log("studentID:" + studentID);
  try {
    student = await Student.find({ userId: studentID });
    console.log(student);
  } catch (e) {
    console.log("Exception: " + e);
    return res.status(400).json({
      success: false,
      response: {
        message: e,
      },
    });
  }

  if (!student) return res.status(500).json({ message: "Not Found !!" });

  return res.status(200).json({ success: true, student });
};

const updateStudent = async (req, res, next) => {
  res.set("Access-Control-Allow-Origin", "*");
  const {
    studentid,
    Name,
    ID,
    Email,
    Password,
    Mobile,
    Department,
    YearofPassing,
    EligibleforPlacement,
    PlacementStatus,
    Resume,
    Education,
    Address,
  } = req.body;

  try {
    const update = {
      Name,
      ID,
      Email,
      Password,
      Mobile,
      Department,
      YearofPassing,
      EligibleforPlacement,
      PlacementStatus,
      Resume,
      Education,
      Address,
    };

    await Student.findOneAndUpdate({ userId: studentid }, update);
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
      code: "Student Details Updated Successfully !!",
      data: {},
    },
  });
};

const deleteStudent = async (req, res, next) => {
  res.set("Access-Control-Allow-Origin", "*");

  const studentID = req.params.id;
  let student;
  try {
    student = await Student.findByIdAndDelete(studentID);
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
      code: "Student Deleted Successfully !!",
      data: student,
    },
  });
};
module.exports = {
  getAllStudents,
  addNewStudent,
  getStudentById,
  updateStudent,
  deleteStudent
};
