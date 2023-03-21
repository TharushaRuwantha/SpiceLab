const router = require("express").Router(); 
let user = require("../models/user");

router.route("/add").post((req,res)=>{
    const name = req.body.name;
    const newUser = new user({name});
    newUser.save().then(()=>{
        res.json("User Added")
    }).catch((err)=>{
        console.log(err); 
    })
    
})

router.route("/").get((req,res)=>{
    user.find().then((users)=>{
        res.json(users)
    }).catch((err)=>{
        console.log(err);
    })
})

router.route("/update/:id").put(async(req,res)=>{

    let userId = req.params.id;
    const {name} = req.body;
    const updateuser = {
        name,
    }
    const update = await user.findByIdAndUpdate(userId,updateuser).then(()=>{
        res.status(200).send({status:"User updated",user:update}).catch((err)=>{
            console.log(err);
            res.status(500).send({status:"Error with updating data",error:err.message});
        })
    })
})

router.route("/delete/:id").delete(async(req,res)=>{
    let userId = req.params.id;
    await user.findByIdAndDelete(userId).then(()=>{
        res.status(200).send({status:"User deleted"});
    }).catch((err)=>{
        console.log(err.message);
        res.status(500).send({status:"Error with deleting user",error:err.message});
    })
})

router.route("/get/:id").get(async(req,res)=>{
    let userId = req.params.id;
    const user = await user.findById(userId).then((user)=>{
        res.status(200).send({status:"User fetched",user})
    }).catch((err)=>{
        console.log(err.message);
        res.status(500).send({status:"Error with get user",error:err.message});
    })
}) 

module.exports = router; 