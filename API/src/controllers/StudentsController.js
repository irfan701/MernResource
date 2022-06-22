const StudentsModel=require('../models/StudentsModel')

exports.InsertStudent=(req,res)=>{
    let reqBody=req.body; //like Model Schema

 //res.status(200).json({status:"200",data:reqBody})
    StudentsModel.create(reqBody,(err,data)=>{
        if(err){
            res.status(400).json({status:"fail",data:err})
        }else{
            res.status(201).json({status:"success",data:data})
        }
    })
}