const route = require('express').Router();
const Request = require('../models/request');

route.route('/add').post((req, res) => {
  const { category, pickup, amount, address, zipcode, otherNotes } = req.body;

  const newRequest = new Request({
    category,
    pickup,
    amount,
    address,
    zipcode,
    otherNotes
  });

  newRequest.save()
    .then(() => {
      res.json("Request Added");
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send({ status: "Error with adding request", error: err.message });
    });
});

route.route('/').get((req, res) => {
  Request.find()
    .then((requests) => {
      res.json(requests);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send({ status: "Error with fetching requests", error: err.message });
    });
});

route.route('/update/:id').put((req, res) => {
  const requestId = req.params.id;
  const { category, pickup, amount, address, zipcode, otherNotes } = req.body;
  const updateRequest = {
    category,
    pickup,
    amount,
    address,
    zipcode,
    otherNotes
  };

  Request.findByIdAndUpdate(requestId, updateRequest)
    .then(() => {
      res.status(200).send({ status: "Request updated" });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send({ status: "Error with updating request", error: err.message });
    });
});

route.route('/delete/:id').delete((req, res) => {
  const requestId = req.params.id;

  Request.findByIdAndDelete(requestId)
    .then(() => {
      res.status(200).send({ status: "Request deleted" });
    })
    .catch((err) => {
      console.log(err.message);
      res.status(500).send({ status: "Error with deleting request", error: err.message });
    });
});

route.route('/get/:id').get((req, res) => {
  const requestId = req.params.id;

  Request.findById(requestId)
    .then((request) => {
      if (!request) {
        return res.status(404).send({ status: "Request not found" });
      }
      res.status(200).send({ status: "Request fetched", request });
    })
    .catch((err) => {
      console.log(err.message);
      res.status(500).send({ status: "Error with fetching request", error: err.message });
    });
});

module.exports = route;
