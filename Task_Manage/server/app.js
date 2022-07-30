const express=require("express")
const app=new express()

const router=require("./src/routes/api")
const bodyParser=require("body-parser")

//Security Middleware Lib Import
const cors=require("cors")
const hpp=require("hpp")
const helmet=require("helmet")
const xss=require("xss-clean")

const mongoSanitize=require("express-mongo-sanitize")
const rateLimit=require("express-rate-limit")

//Database Lib Import
const mongoose=require("mongoose")


//Security Middleware Implement

app.use(cors())
app.use(hpp())
app.use(helmet())
app.use(xss())
app.use(mongoSanitize())

//Body Parser Implement

app.use(bodyParser.json())

//Request Rate Limit
const limiter = rateLimit({ windowMs: 15 * 60 * 1000,max: 3000})
app.use(limiter)
//MongoDB Database Connection

let URI="mongodb://localhost:27017/todo";
let OPTION={user:'',pass:'',autoIndex:true}
mongoose.connect(URI,OPTION,(error)=>{
    console.log("Connection Success")
    console.log(error)
})

//Routing Implementation
app.use("api/v1",router)

//Undefined Route Implementation
app.use("*",(req,res)=>{
res.status(404).json({status:"Fail",data:"Not Found"})
})

module.exports=app
