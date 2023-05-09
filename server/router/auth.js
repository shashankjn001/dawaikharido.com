const express = require("express");
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const authenticate = require('../middleware/authenticate');
require("../db/conn");
const User = require("../model/userSchema");

router.get("/", (req, res) => {
  res.send("This is Home Page");
});

//USING PROMISES

// router.post('/register',(req,res)=>{

//     const {name, email, phone, address, password, cpassword } = req.body;

//     if(!name || !email || !phone || !address || !password || !cpassword){
//         return res.status(422).json({error:"Please fill the field properly"});
//     }

//     //here the first email is of database and another is which user enters
//     User.findOne({email:email})
//     .then((userExist)=>{
//         if(userExist){
//             return res.status(422).json({error:"Email already exist"});
//         }
//         // it is saved as name:name | first is of database and 2nd which user entered
//         const user = new User({name, email, phone, address, password, cpassword });
//         user.save().then(()=>{
//             res.status(201).json({message: "Successfully Registered"});
//         }).catch((err)=>{res.status(500).json({error:"Failed to register"})});
//     }).catch(err => {console.log(err);});

//USING ASYNC-AWAIT
//Register Route
router.post("/signup", async (req, res) => {
  const { name, email, phone, address, password, cpassword } = req.body;

  if (!name || !email || !phone || !address || !password || !cpassword) {
    return res.status(422).json({ error: "Please fill the field properly" });
  }

  try {
    //here the first email is of database and another is which user enters
    const userExist = await User.findOne({ email: email });
    if (userExist) {
      return res.status(422).json({ error: "Email already exist" });
    }
    // it is saved as name:name | first is of database and 2nd which user entered
    const user = new User({ name, email, phone, address, password, cpassword });

    const userRegister = await user.save();
    if (userRegister) {
      res.status(201).json({ message: "Successfully Registered" });
    } else {
      res.status(500).json({ error: "Failed to register" });
    }
  } catch (err) {
    console.log(err);
  }
});

//Login Route
router.post('/signin', async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ error: "Please fill the Data" });
    }
    const userLogin = await User.findOne({ email: email });
    if (userLogin) {
      //Password Check
      const isMatch = await bcrypt.compare(password, userLogin.password);

      //Creating Web Token
      const token = await userLogin.generateAuthToken();
      console.log(token);

      //Sending token to cookie
      res.cookie("jwtoken", token, {
        expires: new Date(Date.now() + 25892000000),
        httpOnly: true
      });

      if (!isMatch) {
        res.status(400).json({ message: "User not Found" });
      } else {
        res.status(200).json({ message: "User Signin Successfully", token });
      }
    } else {
      res.status(400).json({ message: "User not Found" });
    }


  }
  catch (err) {
    console.log(err);
  }
});

router.get('/about', authenticate, async (req, res) => {
  res.send(req.rootUser);
});

module.exports = router;
