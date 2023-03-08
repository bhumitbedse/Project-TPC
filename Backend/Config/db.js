const mongoose = require('mongoose');
require('dotenv').config();
const mongoString = process.env.DATABASE_URL || "mongodb+srv://bhumitbedse:Bb%40635153@cluster0.m0z7qux.mongodb.net/TPC?authSource=admin&replicaSet=atlas-1lzdwd-shard-0&readPreference=primary&appname=MongoDB%20Compass&ssl=true";

mongoose.set('strictQuery', false);
mongoose.connect(mongoString,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
});
const database = mongoose.connection;
database.on('error', (error) => {
    console.log(error)
})

database.once('connected', () => {
    console.log('Database Connected');
})