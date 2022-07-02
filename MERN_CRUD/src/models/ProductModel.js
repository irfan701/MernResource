const mongoose = require('mongoose')
const DataSchema = mongoose.Schema({
        product_name: {type: String},
        product_code: {type: String},
        img: {type: String},
        unit_price: {type: String},
        qty: {type: String},
        total_price: {type: String},
        created_at: {type: Date, default: Date.now()},

    },
    {
        versionKey: false
    })

const ProductModel=mongoose.model('products', DataSchema)
module.exports=ProductModel;