const express = require("express");
const roleRouter = express.Router();
const {
  getAllJobRoles,
  addNewJobRole,
  getRoleById,
  updateRole,
  deleteRole,
} = require("../Controller/JobRoleController");

roleRouter.get("/", getAllJobRoles);
roleRouter.post("/addNew", addNewJobRole);
roleRouter.get("/getById/:id", getRoleById);
roleRouter.post('/update',updateRole);
roleRouter.delete('/delete/:id',deleteRole);

module.exports = roleRouter;
