const mongoose=require('mongoose')

const DataSchema=mongoose.Schema({

    Name:String,
    Roll:String,
    Class:String,
    Remarks:String
})
//students is a collection/table name
const StudentsModel=mongoose.model('students',DataSchema);
module.exports=StudentsModel;