require('dotenv').config()
const mongoose = require('mongoose');
const URI = process.env.URI

const connectDB = async() => {
try{
    await mongoose.connect(URI,{
        useNewUrlParser:true,
        useUnifiedTopology:true,
        useCreateIndex:true
    })
    console.log("Database Connected")
}catch{
    err=>console.log(err)
}
}

module.exports = connectDB;