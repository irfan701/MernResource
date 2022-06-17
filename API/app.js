const express=require("express");
const router = require("./src/routes/api");

const app=new express();

app.use("/v1/api/",router)

//undefined route
app.use("*",(req,res)=>{
    res.status(404).json({status:"Fail",data:"Not Found"})
});

module.exports=app;