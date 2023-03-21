const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RequestSchema = new Schema({
    category:{
        type:String,
        required : true
    },
    pickup:{
        type:Boolean,
        required : true
    },
    amount:{
        type:Number,
        required : true
    },
    address:{
        type:String,
        required : true
    },
    zipcode:{
        type:String,
        required : true
    },
    otherNotes:{
        type:String,
        required : true
    },
})

const Request = mongoose.model("Request",RequestSchema);
module.exports = Request;