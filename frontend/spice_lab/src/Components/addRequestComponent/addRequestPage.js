import React, { useState } from "react";
import "../addRequestComponent/addRequestPage.css";
import { Container } from "@mui/material";

function AddRequest() {
  const [formData, setFormData] = useState({
    category: "",
    pickup: false,
    amount: "",
    address: "",
    zipcode: "",
    otherNotes: "",
  });

  const handleInputChange = (event) => {
    const { name, value, type, checked } = event.target;
    const fieldValue = type === "checkbox" ? checked : value;

    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: fieldValue,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    };

    fetch("http://localhost:8070/request/add", requestOptions)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        // Reset the form data
        setFormData({
          category: "",
          pickup: false,
          amount: "",
          address: "",
          zipcode: "",
          otherNotes: "",
        });
        alert("Request is added to the list");
        window.location.href = "/editbuyingpage";
      })
      .catch((error) => console.error(error));
  };

  return (
    <div>
      <div className="row">
        <div className="col">
          <h3 className="Topic-Text">Add Request</h3>
        </div>
      </div>
      <div className="container">
      <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-md-6">
              <label htmlFor="category" className="form-label">
                Category
              </label>
              <input
                type="text"
                className="form-control"
                id="category"
                name="category"
                value={formData.category}
                onChange={handleInputChange}
              />
              <div className="form-text undertextCategory">error in category</div>
            </div>
            <div className="checkboxrow col-md-6">
              <div className="row">
                <div className="col-6">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="pickup"
                    name="pickup"
                    checked={formData.pickup}
                    onChange={handleInputChange}
                  />
                  <label className="form-check-label" htmlFor="pickup">
                    Pick-up
                  </label>
                </div>
                <div className="col-6">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="delivery"
                    name="pickup"
                    checked={!formData.pickup}
                    onChange={handleInputChange}
                  />
                  <label className="form-check-label" htmlFor="delivery">
                    Delivery
                  </label>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <label htmlFor="amount" className="form-label">
                Amount
              </label>
              <input
                type="text"
                className="form-control"
                id="amount"
                name="amount"
                value={formData.amount}
                onChange={handleInputChange}
              />
              <div className="form-text undertextAmount">error in Amount</div>
            </div>
            <div className="col-md-6">
              <label htmlFor="address" className="form-label">
                Address
              </label>
              <input
                type="text"
                className="form-control"
                id="address"
                name="address"
                value={formData.address}
                onChange={handleInputChange}
              />
              <div className="form-text undertextAddress">error in Address</div>
            </div>
            <div className="col-md-6">
              <label htmlFor="otherNotes" className="form-label">
                Other Notes
              </label>
              <textarea
                className="form-control"
                id="otherNotes"
                name="otherNotes"
                rows="3"
                value={formData.otherNotes}
                onChange={handleInputChange}
              ></textarea>
              <div className="form-text undertextAddress">error in other note</div>
            </div>
            <div className="col-md-6">
              <label htmlFor="zipcode" className="form-label">
                Zip Code
              </label>
              <input
                type="text"
                className="form-control"
                id="zipcode"
                name="zipcode"
                value={formData.zipcode}
                onChange={handleInputChange}
              />
              <div className="form-text undertextAmount">error in zip code</div>
            </div>
          </div>
          <div className="row">
            <div className="Postbtnrow container-fluid">
              <button type="submit" className="Postbtn btn btn-primary ">
                Post
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddRequest;
