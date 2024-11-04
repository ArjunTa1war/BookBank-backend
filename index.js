require("dotenv").config()
const connectToMongo =require("./db");
// connectToMongo();
const express = require("express")
var fetchuser = require("./middleware/fetchUser")
const app  = express();
const port = 4000;
const { body, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs")
const User = require("./models/user")
const Book = require("./models/book")
var jwt = require("jsonwebtoken")
const JWT_SECRET = process.env.JWT_SECRET
const cors = require('cors');


app.use(cors());
app.use(express.json());


app.get("/",(req,res)=>{
  res.json({message:"connection established"});
})


app.listen(port,()=>{
    console.log("server started on port 4000");
})
