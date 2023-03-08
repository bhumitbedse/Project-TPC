const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const User = new Schema({
    Email:{
        type: String,
    },
    Name :{
        type:String,
    },
    Password:{
        type :String,
    },
    Role: {
        type: String,
        required: true,
        enum: ['Admin', 'TPC Cordinator','Student']
    }
});

module.exports = mongoose.model('User', User);