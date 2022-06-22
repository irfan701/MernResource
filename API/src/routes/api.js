const express=require("express")
const HelloController = require("../controllers/HelloController");
const StudentsController = require("../controllers/StudentsController");
const router=express.Router();

router.get('/hello',HelloController.Hello);
router.get('/hello-get',HelloController.HelloGet);
router.post('/hello-post',HelloController.HelloPost);


//Mongoose

// router.post('/InsertStudent',(req,res)=>{
//     res.status(200).json({status:"200",data:req.body})
// });

router.post('/InsertStudent',StudentsController.InsertStudent);

module.exports=router;