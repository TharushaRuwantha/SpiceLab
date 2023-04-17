//connect mongodb
const mongoose = require('mongoose');

//create  schema
const Schema = mongoose.schema;

//create const variabe for product
const productSchema = new Schema({
    
    name :{
        type : String,
        required: true //backend validation
    },
    price:{
        type:float,
        required:true
    },
    quantity:{
        type:Number,
        required:true
    },
    total:{
        type:float,
        required:true
    }



})

//pass dta to db
const product = mongoose.model("product",productSchema);

//export module
module.exports = product;