const router = require("Express").Router();
let Company = require("../models/company");

router.route("/add").post((req,res)=>{
    const name = req.body.name;
    const password = req.body.password;
    const address = req.body.address;
    const zip = req.body.zip;
    const contactNo = req.body.contactNo;
    const email = req.body.email;
    const webSite = req.body.webSite;

    const newCompany = new Company({
        name,
        password,
        address,
        zip,
        contactNo,
        email,
        webSite
    });

    newCompany.save().then(()=>{
        res.json("Company Added")
    }).catch((err)=>{
        console.log(err);
    })
})

router.route("/").get((req,res)=>{
    Company.find().then((companies)=>{
        res.json(companies)
    }).catch((err)=>{
        console.log(err);
    })
})

router.route("/update/:id").put(async(req,res)=>{
    let companyId = req.params.id;
    const {name,password,address,zip,contactNo,email,webSite} = req.body;
    const updateCompany = {
        name,
        password,
        address,
        zip,
        contactNo,
        email,
        webSite
    }
    const update = await Company.findbyIdAndUpdate(companyId,updateCompany).then(()=>{
        res.status(200).send({status:"Company updated"}).catch((err)=>{
            console.log(err);
            res.status(500).send({status:"Error with updating data",error: err.message});
        })
    })
})

router.route ("/delete/:id").delete(async(req,res)=>{
    let companyId = req.params.id;
    await comapany.findByIdAndDelete(companyId).then(()=>{
        res.status(200).send({status:"Company Deletes"});
    }).catch((err)=>{
        console.log(err.message);
        res.status(500).send({status:"Error with deleting company", error:err.message});
    })
})


router.route('/get/:id').get(async(req,res)=>{
    let companyId = req.params.id;
    const company = await Company.findById(companyId).then((company)=>{
        res.status(200).send({status:"Company fetches",company}).catch((err)=>{
            console.log(err.message);
            res.status(500).send({status:"Erorr with geting company",error:err.message});
        })
    })
})

module.exports =router;