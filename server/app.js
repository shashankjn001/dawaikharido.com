const dotenv = require('dotenv');
const express = require('express');
const app = express();
dotenv.config({path: './config.env'});
require('./db/conn.js');
// const User = require('./model/userSchema.js');

//To allow our application to understand JSON we use
app.use(express.json());

//Require Router
app.use(require('./router/auth'));

//Adding port
const PORT = process.env.PORT;

//Middileware
const middileware = (req,res,next) =>{
    console.log(`Hello Middileware`);
    next();
};



//Creating Server
app.listen(PORT,()=>{
    console.log(`Server is running on Port ${PORT}`);
})