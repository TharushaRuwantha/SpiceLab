import React, { useEffect, useState } from "react";
import "../editBuyingReqPage/editBuyingPage.css";

function EditBuyingReq() {
  const [requests, setRequests] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8070/request")
      .then((response) => response.json())
      .then((data) => {
        setRequests(data);
      })
      .catch((error) => console.error(error));
  }, []);

  const deleteRequest = (id) => {
    fetch(`http://localhost:8070/request/delete/${id}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data); // Optional: Log the response data
        const updatedRequests = requests.filter((request) => request._id !== id);
        setRequests(updatedRequests);
      })
      .catch((error) => console.error(error));
  };

  const handleAddRequest = () => {
    window.location.href = "/addrequest";
  };

  return (
    <div>
      <div className="row">
        <div className="col-10">
          <h3 className="Topic-Text">Add Request</h3>
        </div>
        <div className="col-2">
          <button className="add-button" onClick={handleAddRequest}> + </button>
        </div>
      </div>
      <div className="container">
        {requests.map((request) => (
          <div className="row listRow" key={request._id}>
            <div className="col-2">
              <label>{request.category}</label>
            </div>
            <div className="col-2">
              <label>{request.amount}</label>
              <label>KG</label>
            </div>
            <div className="col-4">
              {request.pickup ? "You should Pick-up" : "You should Deliver"}
            </div>
            <div className="col-2">
              <button className="savebtn">Edit</button>
            </div>
            <div className="col-2">
              <button className="savebtn" onClick={() => deleteRequest(request._id)}>Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default EditBuyingReq;
