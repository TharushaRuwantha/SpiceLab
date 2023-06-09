//import package
const router = require("express").Router();

//import student model
let  shipping= require("../models/shipping");

//Insert address details
//create function
router.route("/add").post((req,res)=>{
    
    //get data from body as request
    const fullname = req.body.fullname;
    const address = req.body.address;
    const country= req.body.country;
    const city= req.body.city;
    const postalcode= Number(req.body.postalcode);

    //create an object using product  model
    const newshipping = new shipping({

        //initialize propeties
        fullname,
        address,
        country,
        city,
        postalcode
        
    })


     //insert the object to db
     newshipping.save().then(()=>{
        //if success, execute the body
        res.json("shipping detail Added")
        
        //unsuccess,show the error
    }).catch((err)=>{
        console.log(err);
    })
})

//call backend url
router.route("/").get((req,res)=>{
    
    //get(read) shipping details from db
    shipping.find().then((shippings)=>{
        res.json(shippings)

    }).catch((err)=>{
        console.log(err);
    })
})


//update shipping detail(use put method for it)
router.route("/update/:id").put(async (req,res) =>{
    //fetch parameter value

    let userId= req.params.id;

    const{fullname,address,country,city,postalcode}=req.body;

    //create object
    const updateshipping = {
        fullname,
        address,
        country,
        city,
        postalcode
    }
    const update = await shipping.findByIdAndUpdate(userId,updateshipping).then(() =>{

        //If successfully updated
        res.status(200).send({status:"shipping Updted"});
    }).catch((err)=>{
        console.log(err);
        //Show erre msg in frontend
        res.status(500).send({status:"Error with updating data"});
    })
 })


//Delete
//await for promise request
router.route("/delete/:id").delete(async(req,res) =>{
    
    let userId = req.params.id;

    await shipping.findByIdAndDelete(userId).then(() =>{
    await shipping.findByIdAndDelete(shippingId).then(() =>{
        res.status(200).send({status:"shipping deleted"})
    }).catch((err)=>{
        console.log(err);
        //Show erre msg in frontend
        res.status(500).send({status:"Error with delete data",error:err.message});
    })
})


    //get details from Oneshipping
    router.route("/get/:id").get(async(req,res) =>{
        //get shipping id

        let userId  = req.params.id;
        const shipping =  await shipping.findById(userId).then(() =>{
            res.status(200).send({status:"shipping fetched",user:user})

      
        }).catch((err)=>{
            console.log(err);
            //Show error msg in frontend
            res.status(500).send({status:"Error ",error:err.message});
        })

    })





module.exports = router;