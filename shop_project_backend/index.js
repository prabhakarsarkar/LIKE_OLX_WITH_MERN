const express = require("express");
const app = express();
const db = require("./databasesConnection/connection")
const userSignup = require("./router/auth")
const products = require("./router/products")
const env=require('dotenv').config()
app.use(express.json())

app.use("/",userSignup)
app.use("/",products)


app.listen(3001,()=>{
    console.log("server is working port 3000");
})

