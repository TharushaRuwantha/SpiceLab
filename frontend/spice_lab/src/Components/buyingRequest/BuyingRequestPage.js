import React, { useState, useEffect } from "react";
import "../buyingRequest/BuyingRequestPage.css";
import { Input } from "@mui/material";

function BuyingRequest() {
  const [requests, setRequests] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    fetch("http://localhost:8070/request/")
      .then((response) => response.json())
      .then((data) => setRequests(data))
      .catch((error) => console.error(error));
  };

  const handleInputChange = (index, event) => {
    const { value } = event.target;
    const updatedRequests = [...requests];
    const maxAmount = requests[index].amount;
    const newValue = value > maxAmount ? maxAmount : value;
    updatedRequests[index] = {
      ...updatedRequests[index],
      inputValue: newValue,
    };
    setRequests(updatedRequests);
  };

  const saveRequest = (id) => {
    const requestToUpdate = requests.find((request) => request._id === id);
    if (requestToUpdate) {
      const { amount } = requestToUpdate;
      const inputValue = requestToUpdate.inputValue || 0;
      const updatedAmount = amount - inputValue;
      fetch(`http://localhost:8070/request/update/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ amount: updatedAmount }),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          fetchData(); // Fetch updated data from the backend
        })
        .catch((error) => console.error(error));
    }
  };

  return (
    <div>
      <div className="row">
        <div className="col-10">
          <h3 className="Topic-Text">Buying Requests</h3>
        </div>
        <div className="col-2">
          <button className="add-button"> + </button>
        </div>
      </div>
      <div className="container">
        {requests.map((request, index) => (
          <div className="row listRow" key={request._id}>
            <div className="col-2">
              <label>{request.category}</label>
            </div>
            <div className="col-2">
              <label>{request.amount}</label>
              <label>KG</label>
            </div>
            <div className="col-2">
              {request.pickup
                ? "They will pick the product"
                : "You should deliver the product"}
            </div>
            <div className="col-2">{request.address}</div>
            <div className="col-4 buttonCol">
              <input
                type="number"
                value={request.inputValue || ""}
                max={request.amount}
                onChange={(e) => handleInputChange(index, e)}
              />
              <button
                className="savebtn"
                onClick={() => saveRequest(request._id)}
              >
                Save
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BuyingRequest;
