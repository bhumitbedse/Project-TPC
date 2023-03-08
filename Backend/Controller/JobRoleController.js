const JobRole = require("../Models/JobRole");
const mongoose = require("mongoose");

const getAllJobRoles = async (req, res, next) => {
  let roles;
  try {
    roles = await JobRole.find();
  } catch (err) {
    console.log(err);
  }
  if (!roles) {
    return res.status(404).json({ message: "JobRole are not found" });
  }
  return res.status(200).json({ roles });
};


const addNewJobRole = async (req, res, next) => {
  res.set("Access-Control-Allow-Origin", "*");
  const {
    Compony,
    Role_Title,
    Role_Description,
    Role_Qualification,
    Role_Eligibility,
    Role_CTC,
    Role_InHand,
    Role_VariablePay,
    Location,
    Interview_Rounds_details,
    Deadline,
    Bond_year,
    Bond_Secuirty,
    Internship,
    Additional_Info,
    Attachments,
  } = req.body;

  let role;
  try {
    const session = await mongoose.startSession();
    session.startTransaction();
     const newJobRole = new JobRole({
      Compony,
      Role_Title,
      Role_Description,
      Role_Qualification,
      Role_Eligibility,
      Role_CTC,
      Role_InHand,
      Role_VariablePay,
      Location,
      Interview_Rounds_details,
      Deadline,
      Bond_year,
      Bond_Secuirty,
      Internship,
      Additional_Info,
      Attachments
    });
    await newJobRole.save();
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
      code: "Job-Role Added Successfully !!",
    },
  });
};

const getRoleById = async (req, res, next) => {
  res.set("Access-Control-Allow-Origin", "*");

  const roleID = req.params.id;

  let role;
  console.log("roleID:" + roleID);
  try {
    role = await JobRole.find({ _id: roleID });
    console.log(role);
  } catch (e) {
    console.log("Exception: " + e);
    return res.status(400).json({
      success: false,
      response: {
        message: e,
      },
    });
  }

  if (!role) return res.status(500).json({ message: "Not Found !!" });

  return res.status(200).json({ success: true, role });
};

const updateRole = async (req, res, next) => {
  res.set("Access-Control-Allow-Origin", "*");
  const {
    RoleID,
    Compony,
    Role_Title,
    Role_Description,
    Role_Qualification,
    Role_Eligibility,
    Role_CTC,
    Role_InHand,
    Role_VariablePay,
    Location,
    Interview_Rounds_details,
    Deadline,
    Bond_year,
    Bond_Secuirty,
    Internship,
    Additional_Info,
    Attachments,
  } = req.body;

  try {
    const update = {
      Compony,
      Role_Title,
      Role_Description,
      Role_Qualification,
      Role_Eligibility,
      Role_CTC,
      Role_InHand,
      Role_VariablePay,
      Location,
      Interview_Rounds_details,
      Deadline,
      Bond_year,
      Bond_Secuirty,
      Internship,
      Additional_Info,
      Attachments
    };

    await JobRole.findOneAndUpdate({ _id: RoleID }, update);
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
      code: "Job Role Details Updated Successfully !!",
      data: update,
    },
  });
};

const deleteRole = async (req, res, next) => {
  res.set("Access-Control-Allow-Origin", "*");

  const roleid = req.params.id;
  let role;
  try {
    role = await JobRole.findByIdAndDelete(roleid);
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
      code: "Role Deleted Successfully !!",
      data: role,
    },
  });
};

module.exports = {
  getAllJobRoles,
  addNewJobRole,
  getRoleById,
  updateRole,
  deleteRole,
};
