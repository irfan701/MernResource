const express=require('express')
app=express();


app.use(express.static(__dirname+'/public'))

const simpleLogger=(req,res,next)=>{
    console.log( `${req.url} - ${req.method} - ${new Date().toISOString()}`)
    const name=req.query.name
    if(name==='irfan'){
     return res.json({"message":"bad request"})
    }
    next()
}


app.get('/',simpleLogger,(req,res,next)=>{

    res.json({"message":"Hello world"})
})

app.get('/sweet',simpleLogger,(req,res,next)=>{

    res.json({"message":"Sweet Mango"})
})


app.listen('4000',function (){
    console.log("4000 Port Running")
})