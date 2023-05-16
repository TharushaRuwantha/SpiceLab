//connect mongodb
const mongoose = require('mongoose');


//create  schema
const Schema = mongoose.Schema;




//create const variabe for item
const itemSchema = new Schema({

    Fullname :{
        type: String,
        required: true  //backend validation
    },

    Weight :{
        type:Number,
        required:true
    },

    price:{
        type:Number,
        required:true
    },
    Description:{
        type:String,
        required:true
    }
});


//pass dta to db
const item = mongoose.model("item",itemSchema);

//export module
module.exports = item;
