const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const User = new Schema({
    Email:{
        type: String,
    },
    Password:{
        type :String,
    },
    UserType: {
        type: String,
        required: true,
        enum: ["Admin", "Student","TPC"]
    }
});

module.exports = mongoose.model('User', User);