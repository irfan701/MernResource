var express=require('express')

var app=express()
app.use(express.json())


app.get('/',(req,res)=>{
    res.send("Hello Express Js")
});


const books=[
    { id:1,name:'irfan',age:'21',price:'1000' },
    { id:2,name:'samiya',age:'29',price:400 },
    { id:3,name:'jenny',age:'23',price:'2000' },
]

app.get('/books',(req,res)=>{

    console.log(req.query)

    if (req.query.show=='all'){
       return res.json(books)
    }

    if (req.query.price=='500'){
        const result=books.filter(x=>x.price <=500)
        //res.json(books)
        return res.json(result)
    }

    if (req.query.price=='1000'){
        const result=books.filter(x=>x.price <=1000)
        return res.json(result)
    }
    return res.json(books)
})


app.post('/books',(req,res)=>{

    console.log(req.body)
    const book=req.body
    books.push(book)
    res.json(books);
})




app.listen('4000',()=>{
    console.log("SERVER RUN SUCEES")
});