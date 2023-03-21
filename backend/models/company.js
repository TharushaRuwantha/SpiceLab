const mongoose =require ('mongoose');
const Schema = mongoose.Schema;

const CompanySchema = new Schema({
    name:{
        type:String,
        required :true
    },
    passwrord:{
        // TODO: hash the password
        type:String,
        required :true
    },
    address:{
        type:String,
        required :true
    },
    zip:{
        type:String,   
        required :true
    },
    contactNo:{
        type:String,    
        required :true
    },
    email:{
        type:String,
        required :true
    },
    webSite:{
        type:String,
    }

})

const Company = mongoose.model("Company",CompanySchema);
module.exports = Company;