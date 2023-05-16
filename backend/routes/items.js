//import package
const router = require("express").Router();

//import student model
let item = require("../models/item");

//create function
router.route("/add").post((req,res)=>{

    //get data from body as request
    const Fullname = req.body.Fullname;
    const Weight = Number(req.body.Weight);
    const price = Number(req.body.price);
    const Description = req.body.Description;

    //create an object using product  model
    const newItem = new item({

        //initialize propeties
        Fullname,
        Weight,
        price,
        Description
    })

    //insert the object to db
    newItem.save().then(()=>{
        //if success, execute the body
        res.json("Item Added")
        
        //unsuccess,show the error
    }).catch((err)=>{
        console.log(err);
    })
})


//update 
router.route("/update/:id").put(async (req,res) =>{
    //fetch parameter vlue
    let ItemId= req.params.pname;
    const{Fullname,Weight,price,Description}=req.body;

    //create object
    const updateItem = {
        Fullname,
        Weight,
        price,
        Description
       

    }
    const update = await item.findByIdAndUpdate(ItemId,updateItem).then(()=>{
        res.status(200).send({status:"Item updated"
    }).catch((err)=>{
            console.log(err);
            res.status(500).send({status:"Error with updating data",error: err.message});
        })
    })
})

//Delete
router.route ("/delete/:id").delete(async(req,res)=>{
    let itemId = req.params.id;
    await item.findByIdAndDelete(itemId).then(()=>{
        res.status(200).send({status:"Item Deletes"});
    }).catch((err)=>{
        console.log(err.message);
        res.status(500).send({status:"Error with deleting item", error:err.message});
    })
})

//get item by id
router.route('/get/:id').get(async(req,res)=>{
    let ItemId = req.params.id;
    const item = await item.findById(ItemId).then((item)=>{
        res.status(200).send({status:"item fetches",item}).catch((err)=>{
            console.log(err.message);
            res.status(500).send({status:"Erorr with geting item",error:err.message});
        })
    })
})


//get all items by id
router.route("/").get((req,res)=>{
    item.find().then((items)=>{
        res.json(items)
    }).catch((err)=>{
        console.log(err);
    })
})

module.exports =router;
