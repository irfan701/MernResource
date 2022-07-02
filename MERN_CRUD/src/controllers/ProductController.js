
const ProductModel=require("../models/ProductModel")
//C=Create

exports.CreateProduct=(req,res)=>{
    let reqBody=req.body;
    ProductModel.create(reqBody,(err,data)=>{
        if (err){
            res.status(400).json({status:"fail",data:err})
        }else{
            res.status(200).json({status:"success",data:data})
        }
    })
}

//R=READ


exports.ReadProduct=(req,res)=>{
    let Query={}
    let Projection="product_name product_code img unit_price qty total_price"
    ProductModel.find(Query,Projection,(err,data)=>{
        if (err){
            res.status(400).json({status:"fail",data:err})
        }else{
            res.status(200).json({status:"success",data:data})
        }
    })
}