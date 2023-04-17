const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const farmerSchema = new Schema({

    fullname : {
        type : String,
        require : true
    },

    password :{
        type : String,
        require : true
    },

    address :{
        type : String,
        require :true
    },

    zipcode :{
        type : String,
        require : true
    },

    contactnumber:{
        type : String,
        require : true
    },

    email :{
        type : String,
        require: true
    },

    website:{
        type: String,
        require: false
    }

})

const Farmer = mongoose.model("Farmer",farmerSchema);

module.exports = Farmer;