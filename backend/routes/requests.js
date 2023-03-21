const route = require('express').Router();
const { findByIdAndUpdate } = require('../models/request');
let Request = require('../models/request');

route.route('/add').post((req, res) => {
    const category = req.body.category;
    const pickup = req.body.pickup;
    const amount = req.body.amount;
    const address = req.body.address;
    const zipcode = req.body.zipcode;
    const otherNotes = req.body.otherNotes;

    const newRequest = new Request({
        category,
        pickup,
        amount,
        address,
        zipcode,
        otherNotes
    });

    newRequest.save().then(() => {
        res.json("Request Added")
    }).catch((err) => {
        console.log(err);
    })

})

route.route('/').get((req, res) => {
    Request.find().then((requests) => {
        res.json(requests)
    }).catch((err) => {
        console.log(err);
    })
})

route.route('/update/:id').put(async (req, res) => {
    let requestId = req.params.id;
    const { category, pickup, amount, address, zipcode, otherNotes } = req.body;
    const updateRequest = {
        category,
        pickup,
        amount,
        address,
        zipcode,
        otherNotes
    }
    const update = await Request.findByIdAndUpdate(RequestId, updateRequest).then(() => {
        res.status(200).send({ status: "Request updated" }).catch((err) => {
            console.log(err);
            res.status(500).send({ status: "Error with updating data", error: err.message });
        })
    })
})

route.route('/delete/:id').delete(async (req, res) => {
    let requestId = req.params.id;
    await request.findByIdAndDelete(requestId).then(() => {
        res.status(200).send({ status: "Request deleted" }).catch((err) => {
            console.log(err.message);
            res.status(500).send({ status: "Error with deleting request", error: err.message });
        })
    })
})

route.route('/get/:id').get(async (req, res) => {
    let requestId = req.params.id;
    const request =await request.findById(requestId).then((request) => {
        res.status(200).send({ status: "Request fetched", request }).catch((err) => {
            console.log(err.message);
            res.status(500).send({ status: "Error with get request", error: err.message });
        })
    })
})

module.exports = route;