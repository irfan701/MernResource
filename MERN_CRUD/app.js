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

let URI='mongodb+srv://<username>:<password>@cluster0.hx69h.mongodb.net/crud?retryWrites=true&w=majority';
let OPTION={user:'testuser123',  pass:'testuser123'}

mongoose.connect(URI,OPTION,(error)=>{
    console.log("Connection Success")
    console.log(error)
});

// //UNDEFINED ROUTE
//
// app.route("*",(req,res)=>{
//     res.status(404).json({status:"Fail",data:"Not Found"})
// })

//Routing Implementation
app.use('/api/v1',router)



//UNDEFINED ROUTE

app.route("*",(req,res)=>{
    res.sendFile(path.resolve(__dirname,'client','build','index.html'))
})


module.exports=app