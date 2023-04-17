const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const expenditureSchema = new Schema({

    code : {
        type : String,
        required: true
    },
    description : {
        type : String,
        required: true
    },
    vamount:{
        type: String,
        required: true
    }
})

const Expenditure = mongoose.model("Expenditure",expenditureSchema);

module.exports = Expenditure;