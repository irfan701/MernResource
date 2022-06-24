const mongoose=require('mongoose')

const DataSchema=mongoose.Schema({

    Name:{type:String}, //type casting validation
    Roll:{type:Number,required:true}, //required validation
    Class:{type:String,unique:true}, //unique validation
    Remarks:{type:String,default:"No Remarks"},

    height:{
        type:Number,
        min:[5,'Min 5 & Max 12,But Supplied Value is {VALUE}'],
        max:[12,'Min 5 & Max 12,But Supplied Value is {VALUE}']

    },
    phone:{   //custom validation
        type:String,
        validate:{
            validator:function (value) {
                if (value.length===11){
                    return true
                }else{
                    return false
                }
            },
            message:"11 digit mobile number required"
        }
    },

    mobile:{  //regex validation
        type:String,
        validate:{
            validator:function (value) {
                return /^(?:(?:\+|00)88|01)?\d{11}$/.test(value)
            },
            message: "Invalid Bangladeshi Mobille Number !"
        }

    }

},{versionKey:false})
//students is a collection/table name
const StudentsModel=mongoose.model('students',DataSchema);
module.exports=StudentsModel;