const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const incomeSchema = new Schema({
        
    itemid : {
        type : String,
        required: true
    },
    name : {
        type : String,
        required: true
    },
    quantity:{
        type: String,
        required: true
    },
    pamount: {
        type : String,
        required: true
    }
    
})

const Income = mongoose.model("Income",incomeSchema);

module.exports = Income;