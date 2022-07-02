const express=require('express')
const router=require('./src/routes/api')

const app=new express();
const bodyParser=require('body-parser')


//Security Middleware Import
const rateLimit=require('express-rate-limit')
const cors=require('cors')
const helmet=require('helmet')
const hpp=require('hpp')
const xss=require('xss-clean')
const mongoSanitize=require('express-mongo-sanitize')
const cookieParser=require('cookie-parser')

const mongoose=require('mongoose')


//Security Middleware Implemet
app.use(cors())
app.use(helmet())
app.use(mongoSanitize())
app.use(hpp())
app.use(xss())
app.use(cookieParser())
app.use(bodyParser.json())

//Request Rate Limiting
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // Limit each IP to 100 requests per `window` (here, per 15 minutes)
    standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
    legacyHeaders: false, // Disable the `X-RateLimit-*` headers
})

app.use(limiter)

//MONGO DB DATABASE CONNECTION

let URI='mongodb://127.0.0.1:27017/schools'
let OPTION={user:'',  pass:''}

mongoose.connect(URL,OPTION,(error)=>{
    console.log("Connection Success")
    console.log(error)
});

//UNDEFINED ROUTE

app.route("*",(req,res)=>{
    res.status(404).json({status:"Fail",data:"Not Found"})
})


app.use('api/v1',router)


module.exports=app