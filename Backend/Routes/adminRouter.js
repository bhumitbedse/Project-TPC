const express = require("express")
const adminRouter = express.Router();
const {getAllAdmins , addNewAdmin , getAdminById , updateAdmin} = require("../Controller/AdminController");

adminRouter.get("/",getAllAdmins);
adminRouter.post("/addNew",addNewAdmin);
adminRouter.get("/getById/:id",getAdminById);
adminRouter.post("/update/:id",updateAdmin);

module.exports = adminRouter;