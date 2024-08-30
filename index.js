const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config({path: "./config.env"})


app.get("/", (req, res)=> {
    res.send("Hi there I am fine");
})

app.listen(process.env.PORT, ()=>{
    console.log("the server is running on port 3000.")
})