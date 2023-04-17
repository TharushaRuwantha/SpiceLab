//import package
const router = require("express").Router();

//import student model
let product = require("../models/product");

//create function
router.route("/add").post((req,res)=>{
    
    //get data from body as request
    const name = req.body.name;
    const price = Float(req.body.price);
    const quantity = Number(req.body.quantity);
    const total = Float(req.body.Total);

    //create an object using product  model
    const newProduct = new product({

        //initialize propeties
        name,
        price,
        quantity,
        total
    })

    //insert the object to db
    newProduct.save().then(()=>{
        //if success, execute the body
        res.json("Product Added")
        
        //unsuccess,show the error
    }).catch((err)=>{
        console.log(err);
    })
})


//call bckend url
router.route("/").get((req,res)=>{
    
    //get(read) product details from db
    student.find().then((product)=>{
        res.json(products)

    }).catch((err)=>{
        console.log(err);
    })
})

//update 
router.route("/update/:id").put(async (req,res) =>{
    //fetch parameter vlue
    let UserId= req.params.pname;
    const{name,price,quantity,total}=req.body;

    //create object
    const updateProduct = {
        name,
        price,
        quantity,
        total
       

    }
    const update = await product.findOneAndUpdate(name,updateProduct).then(() =>{
        //If successfully updated
        res.status(200).send({status:"product Updted",product:update})
    }).catch((err)=>{
        console.log(err);
        //Show erre msg in frontend
        res.status(500).send({status:"Error with updating data"});
    })
 })
    
    
//Delete
router.route("/delete/:id").delete(async(req,res) =>{
    //get product name
    let UserId = req.params.pname;

    await product.findOneAndDelete(id).then(() =>{
        res.status(200).send({status:"product deleted"})
    }).catch((err)=>{
        console.log(err);
        //Show erre msg in frontend
        res.status(500).send({status:"Error with delete data",error:err.message});
    })

    //get details from oneuser
    router.route("/get/:id").delete(async(req,res) =>{
        //get user id
        let UserId = req.params.pid;
        await product.findByOne(pnm).then(() =>{
            res.status(200).send({status:"product fetched",user:user})
        }).catch((err)=>{
            console.log(err);
            //Show erre msg in frontend
            res.status(500).send({status:"Error ",error:err.message});
        })
})


module.exports = router;