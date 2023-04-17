const router = require("express").Router();
let Income = require("../models/Income");

//Add Income records to the database.

router.route("/add").post((req,res)=> {

    const itemid = req.body.itemid;
    const name = req.body.name;
    const quantity = req.body.quantity;
    const pamount = req.body.pamount;

    const newIncome = new Income({

        itemid,
        name,
        quantity,
        pamount

    })

    newIncome.save().then(() => {
        res.json("Income Added")
    }).catch((err) => {
        console.log(err);
    })
})

//Fetched All Data from Database.

router.route("/").get((req,res) => {

    Income.find().then((incomes) =>{
        res.json(incomes)
    }).catch((err)=>{
        console.log(err)
    })
})

//Update  Specific Income Record(one record Data) in Database.

router.route("/update/:id").put(async (req, res) => {
    let userId = req.params.id;
    const {itemid,name,quantity,pamount} = req.body;

    const updateIncome = {
        itemid,
        name,
        quantity,
        pamount
    }

    await Income.findByIdAndUpdate(userId, updateIncome)
    .then(() =>{
        res.send({status: "User updated"});
    }).catch((err) => {
        console.log(err);
        res.status(500).send({status: "Error with updating data", error: err.message});
    })

})

//Delete Specific (User Data) Asset Data from database.

router.route("/delete/:id").delete(async(req, res) => {
    let userId = req.params.id;

    await Income.findByIdAndDelete(userId)
    .then(() => {
        res.status(200).send({status: "User deleted"});
    }).catch((err) => {
        console.log(err.message);
        res.status(500).send({status: "Error with delete user", error: err.message});
    })
})

//Fetched Specific user Data from Database by providing it's Id.

router.route("/get/:id").get(async (req, res) => {
    let userId = req.params.id;
    const user = await Income.findById(userId)
    .then((income) => {
        res.status(200).send({status: "User fetched",income})
    }).catch((err) =>{
        console.log(err.message);
        res.status(500).send({status: "Error with get user", error: err.message});
    })
})

//This code segment use to extract specific jason object from String array

router.route("/totalincome").get((req,res) => {

    Income.find().then((incomes) =>{

        let total_incomes = 0;

        for (let i = 0; i < incomes.length; i++) {
            total_incomes += parseInt(incomes[i].value);
        }

        res.json(total_incomes);
        
    }).catch((err)=>{
        console.log(err)
    })
})

module.exports = router;