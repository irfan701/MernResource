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
router.get('/ReadStudent',StudentsController.ReadStudent);
router.post('/UpdateStudent/:id',StudentsController.UpdateStudent);
router.get('/DeleteStudent/:id',StudentsController.DeleteStudent);

module.exports=router;