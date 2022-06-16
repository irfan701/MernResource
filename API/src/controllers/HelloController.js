exports.Hello=(req,res)=>{
    res.status(200).json({status:"200",data:"This is my 1st express rest api"})
}

exports.HelloGet=(req,res)=>{
    res.status(200).json({status:"200",data:"GET"})
}

exports.HelloPost=(req,res)=>{
    res.status(201).json({status:"200",data:"POST"})
}