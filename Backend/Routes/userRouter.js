const express = require("express")
const User = require("../Models/User.js")
const userRouter = express.Router();
const {getAllUser , logIn , signUp} = require("../Controller/UserController");

userRouter.get("/",getAllUser);
userRouter.post("/login", logIn);
userRouter.post("/signup",signUp);
module.exports = userRouter;