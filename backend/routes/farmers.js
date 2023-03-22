
const Company = require("../models/company");
let Farmer = require("../models/farmer");


router.route("/add").post((req,res)=>{
    const fullname = req.body.fullname;
    const password = req.body.password;
    const address = req.body.address;
    const zipcode = req.body.zipcode;
    const contactnumber = req.body.contactnumber;
    const email = req.body.email;
    const website = req.body.website;

    const newFarmer = new Farmer({
        fullname,
        password,
        address,
        zipcode,
        contactnumber,
        email,
        website
    });

    newFarmer.save().then(()=>{
        res.json("Farmer Added")
    }).catch((err)=>{
        console.log(err);
    })
    
})



router.route("/").get((req,res)=>{
    Farmer.find().then((farmers)=>{
        res.json(farmers)
    }).catch((err)=>{
        console.log(err);
    })
})



router.route("/update/:id").put(async(req,res)=>{
    let farmerId = req.params.is;
    const {fullname,password,address,zipcode,contactnumber,email,website} =req.body;
    const updateFarmer = {
        fullname,
        password,
        address,
        zipcode,
        contactnumber,
        email,
        website
        
    }

    const update = await Farmer.findByIdAndUpdate(farmerId,updateFarmer).then(()=>{
        res.status(200).send({status:"Farmer Updated"}).catch((err)=>{
            console.log(err);
            res.status(500).send({status:"Error with updatig data",error: err.message});

        })
    })
})



router.route("/delete/:id").delete(async(req,res)=>{
    let farmerId = req.params.is;
    await Farmer.findByIdAndDelete(farmerId).then(()=>{
        res.status(200).send({status:"Farmer Deletes"});

    }).catch((err)=>{
        console.log(err.message);
        res.status(500).send({status:"Error with deleting farmer", error:err.message});

    })  
})


router.route("/get/:id").get(async(req,res)=>{
    let farmerId = req.params.is;
    const farmer = await Farmer.findById(farmerId).then((farmer)=>{
        res.status(200).send({status:"Farmer fetches",farmer}).catch((err)=>{
            console.log(err);
            res.status(500).send({status:"Error with updatig data",error: err.message});
        })
    })
  
})

module.exports = router;




