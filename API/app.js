const express=require("express");
const router = require("./src/routes/api");

const app=new express();

app.use("/v1/api/",router)

module.exports=app;