const router = require("express").Router();
let Expenditure = require("../models/Expenditure");

//Add Expenditure records to database.

router.route("/add").post((req,res)=> {

    const code = req.body.code;
    const description = req.body.description;
    const vamount = req.body.vamount;

    const newExpenditure = new Expenditure({

        code,
        description,
        vamount

    })

    newExpenditure.save().then(() => {
        res.json("Expenditure Added")
    }).catch((err) => {
        console.log(err);
    })
})

//Fetched All data from Database.

router.route("/").get((req,res) => {

    Expenditure.find().then((expenditures) =>{
        res.json(expenditures)
    }).catch((err)=>{
        console.log(err)
    })
})

//Update Expenditure data in Database.

router.route("/update/:id").put(async (req, res) => {
    let userId = req.params.id;
    const {code,description,vamount} = req.body;

    const updateExpenditure = {
        code,
        description,
        vamount
    }

    const update = await Expenditure.findByIdAndUpdate(userId, updateExpenditure)
    .then(() =>{
        res.status(200).send({status: "User updated"})
    }).catch((err) => {
        console.log(err);
        res.status(500).send({status: "Error with updating data", error: err.message});
    })

})

//Delete expenditure record from Database.

router.route("/delete/:id").delete(async(req, res) => {
    let userId = req.params.id;

    await Expenditure.findByIdAndDelete(userId)
    .then(() => {
        res.status(200).send({status: "User deleted"});
    }).catch((err) => {
        console.log(err.message);
        res.status(500).send({status: "Error with delete user", error: err.message});
    })
})

//Fetched Specific user data from Database.

router.route("/get/:id").get(async (req, res) => {
    let userId = req.params.id;
    const user = await Expenditure.findById(userId)
    .then((expenditure) => {
        res.status(200).send({status: "User fetched",expenditure})
    }).catch((err) =>{
        console.log(err.message);
        res.status(500).send({status: "Error with get user", error: err.message});
    })
})

//This code segment use to extract specific jason object from String array
//In this case it's extract all the salary values from every jason object, and getting the Total value by Addition.
//After that it will pass the value to the client side.

router.route("/expenditures").get((req,res) => {

    Expenditure.find().then((expenditures) =>{

        let total_expenditures = 0;

        for (let i = 0; i < expenditures.length; i++) {
            total_expenditures += parseInt(expenditures[i].salary);
        }

        res.json(total_expenditures);
        
    }).catch((err)=>{
        console.log(err)
    })
})

module.exports = router;