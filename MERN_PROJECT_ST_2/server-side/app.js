const express=require('express')
const router=require('./src/routes/api')
const app=new express()
const bodyParser=require('body-parser')


//SECURITY MIDDLEWARE


const rateLimit=require('express-rate-limit')
const helmet=require('helmet')
const mongoSanitize=require('express-mongo-sanitize');
const hpp=require('hpp')
const xss=require('xss-clean')
const cors=require('cors')

//DATABASE
const mongoose=require('mongoose')

//SECURITY MIDDLEWARE IMPLEMENTATION

app.use(cors())
app.use(helmet())
app.use(mongoSanitize())
app.use(xss())
app.use(hpp())

//Body Parser
app.use(bodyParser.json())

//RATE LIMITER

const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // Limit each IP to 100 requests per `window` (here, per 15 minutes)
})

//DATABASE


//Managing Front End Routing
app.use(express.static('client/build'))
app.get("*",(req,res)=>{
    req.sendFile(path.resolve(__dirname,'client','build','index.html'))
})
//Managing BackEnd API Routing
app.use("/api/v1",router)

module.exports=app;




