const mongoose=require("mongoose")
const DataSchema=mongoose.Schema({

        email:{type:String,unique:true},
        first_name:{type: String},
        last_name:{type: String},
        mobile:{type: String},
        password:{type: String},
        photo:{type: String},
        created_at:{type: Date,default:Date.now()},

},{versionKey:false})

const UsersModel=mongoose.model('users',DataSchema)
module.exports=UsersModel