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
const mongoose=require("mongoose")
//Security Middleware Implement

app.use(cors())
app.use(helmet())
app.use(mongoSanitize())
app.use(xss())
app.use(hpp())


//Request Rate Limiting

const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // Limit each IP to 100 requests per `window` (here, per 15 minutes)
    standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
    legacyHeaders: false, // Disable the `X-RateLimit-*` headers
})

// Apply the rate limiting middleware to all requests
app.use(limiter)

//MONGO DB DATABASE CONNECTION

let URI='mongodb://127.0.0.1:27017/schools'
let OPTION={user:'',  pass:''}



mongoose.connect(URI,OPTION,(error)=>{
    console.log("Connection Success")
    console.log(error)
})


app.use("/v1/api/",router)

//undefined route
app.use("*",(req,res)=>{
    res.status(404).json({status:"Fail",data:"Not Found"})
});

module.exports=app;