const express=require("express");
const router = require("./src/routes/api");

const app=new express();

//Security Middleware Import

const rateLimit=require("express-rate-limit")
const helmet=require("helmet")
const mongoSanitize=require("express-mongo-sanitize")
const xss=require("xss-clean")
const hpp=require("hpp")
const cors=require("cors")


//Security Middleware Implement

app.use(cors())
app.use(helmet())
app.use(mongoSanitize())
app.use(xss())
app.use(hpp())


app.use("/v1/api/",router)

//undefined route
app.use("*",(req,res)=>{
    res.status(404).json({status:"Fail",data:"Not Found"})
});

module.exports=app;