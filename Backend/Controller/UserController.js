const express = require("express");
const User = require("../Models/User");
const bcrypt = require("bcryptjs");

//  to get all user
const getAllUser = async (req, res, next) => {
  res.set("Access-Control-Allow-Origin", "*");
  let users;
  try {
    users = await User.find();
  } catch (err) {
    console.log(err);
  }
  if (!users) {
    return res.status(404).json({ message: "users are not found" });
  }
  return res.status(200).json({ users });
};

const signUp = async (req, res, next) => {
  res.set("Access-Control-Allow-Origin", "*");
  console.log(req.body);
  const { UserType, Email, Password } = req.body;
  console.log(Password,Email,UserType);
  let existingUser;
  console.log("In SignUp");
  try {
    existingUser = await User.findOne({ Email });
  } catch (e) {
    console.log(err);
  }

  if (existingUser) {
    return res
      .status(202)
      .json({ success: false, message: "User is already exists!" });
  }
  const hashedPassword = bcrypt.hashSync(Password, 10);
  console.log("Password hased : ", hashedPassword);
  const user = new User({
    UserType,
    Email,
    Password: hashedPassword,
  });

  try {
    user.save();
    return res.status(201).json({ success: true, user });
  } catch (e) {
    console.log(e);
  }
};

const logIn = async (req, res, next) => {
  res.set("Access-Control-Allow-Origin", "*");
  const { Email, Password } = req.body;
  let existingUser;

  try {
    existingUser = await User.findOne({ Email });
  } catch (e) {
    console.log(e);
  }
  if (!existingUser) {
    return res
      .status(202)
      .json({ success: false, message: "User is not found" });
  }

  const isPasswordCorrect = bcrypt.compareSync(Password, existingUser.Password);

  if (!isPasswordCorrect) {
    return res
      .status(203)
      .json({ success: false, message: "Incorrect Password!" });
  }

  return res.status(200).json({ success: true, user: existingUser });
};

module.exports = { getAllUser, logIn, signUp };
