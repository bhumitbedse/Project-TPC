const express = require("express")
const componyRouter = express.Router();
const {getAllComponies , addNewCompony , getComponyById} = require("../Controller/ComponyController");

componyRouter.get("/",getAllComponies);
componyRouter.post("/addNew",addNewCompony);
componyRouter.get("/getById/:id",getComponyById);

module.exports = componyRouter;