//connect mongodb
const mongoose = require('mongoose');

//create  schema
const Schema = mongoose.Schema;

//create const variabe for product
const shippingSchema = new  Schema({
    
    fullname :{
        type:String,
        required: true //backend validation
    },
    address:{
        type:String,
        required:true
    },
    country:{
        type:String,
        required:true
    },
    city:{
        type:String,
        required:true
    },
    postalcode:{
        type:Number,
        required:true
    }

})

//pass dta to db
const shipping = mongoose.model("shipping",shippingSchema);

//export module
module.exports = shipping;
