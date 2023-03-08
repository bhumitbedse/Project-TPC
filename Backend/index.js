const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser')
const userRoute = require("./Routes/userRouter");
const adminRoute = require('./Routes/adminRouter');
const componyRoute = require('./Routes/componyRouter');
const roleRoute = require('./Routes/jobRoleRouter');

require("./Config/db");
require('dotenv').config();

const app = express();

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(cors({
    origin: ["http://localhost:4200"],
    methods: ["GET","POST","PUT","DELETE"],
    credentials: true,
  }))

app.use('/api/user',userRoute);
app.use('/api/admin',adminRoute);
app.use('/api/compony',componyRoute);
app.use('/api/jobrole',roleRoute);

app.get('/',(req,res)=>{
    res.send("Hello");
})

app.listen(5000, () => {
    console.log(`Server Started at ${5000}`)
})