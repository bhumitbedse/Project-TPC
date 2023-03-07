const mongoose = require('mongoose');
const Student = require('./Student')
const Schema = mongoose.Schema;

const Tpc = new Schema({
    StudentDetail:{
        type:Student
    },
    TPCRole:{
        type:String
    }
})

module.exports = mongoose.model("Tpc", Tpc);
