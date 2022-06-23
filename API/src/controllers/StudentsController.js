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

exports.ReadStudent=(req,res)=> {

    let Query={};
    let Projection="Name Roll Class Remarks"
    StudentsModel.find(Query,Projection,(err,data)=>{
        if(err){
            res.status(400).json({status:"fail",data:err})
        }else{
            res.status(201).json({status:"success",data:data})
        }
    })
}

exports.UpdateStudent=(req,res)=>{
    let id=req.params.id;
    let reqBody=req.body;
    let Query={_id:id}
    StudentsModel.updateOne(Query,reqBody,(err,data)=>{
        if(err){
            res.status(400).json({status:"fail",data:err})
        }else{
            res.status(200).json({status:"success",data:data})
        }
    })
}

exports.DeleteStudent=(req,res)=>{
    let id=req.params.id;
    let Query={_id:id}
    StudentsModel.remove(Query,(err,data)=>{
        if (err){
            res.status(400).json({status:"fail",data:err})
        }else{
            res.status(200).json({status:"success",data:data})
        }
    })
}