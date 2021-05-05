require('dotenv').config()
const express = require('express');
const app =express();
const mongoose = require('mongoose');
const connectDB = require('./db')


connectDB();


app.get("/",(req, res)=>{
    res.send("API Created")
})

port = process.env.PORT

app.listen(port,()=>{
    console.log(`server at port ${port}`);
})