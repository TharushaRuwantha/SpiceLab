import './ShippingPayment.css';
import React, { useState } from 'react';
import axios from "axios";



function ShippingPayment() {
    const [fullname, setFullname] = useState("");
    const [address, setAddress] = useState("");
    const [country, setCountry] = useState("");
    const [city, setCity] = useState("");
    const [postalcode, setPostalcode] = useState("");
    

    
function sendData(e) {
    e.preventDefault();
    
    

   
    const newShipping = {
        fullname,
        address,
        country,
        city,
        postalcode
      }
   

    axios.post("http://localhost:8070/add", newShipping)
      .then(() => {
        alert("Shipping Address Added");
      }).catch((err) => {
        alert(err);
      });

}


return (
    <div className="container text-center">
      <div className="row align-items-center">
        <div className="col">
          <h4 className="card-title">Shipping Address</h4>
          <div className="card">
            <div className="card-body">
              <form onSubmit={sendData}>
                <div className="form-group">
                  <label className="form-label">Full Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    onChange={(e) => {
                      setFullname(e.target.value);
                    }}
                  />
                  <label className="form-label">Address</label>
                  <input
                    type="address"
                    className="form-control"
                    id="exampleInputaddress1"
                    onChange={(e) => {
                      setAddress(e.target.value);
                    }}

                    />
                    <label className="form-label">Country</label>
                    <input
                      type="country"
                      className="form-control"
                      id="exampleInputcountry"
                      onChange={(e) => {
                        setCountry(e.target.value);
                      }}
                    />


                  <label className="form-label">City</label>
                  <input
                    type="address"
                    className="form-control"
                    id="exampleInputcity"
                    onChange={(e) => {
                      setCity(e.target.value);
                    }}
                  />
                  
                  <button type="button" className="btn">Continue</button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="col">
          <h4 className="card-title2">Payments</h4>
          <div className="card">
            <div className="card-body">
              <form>
                <div className="rg-3">
                  <input
                    type="email"
                    className="form-control"
                    id="exampleInputEmail1"
                    placeholder="Email Address"
                  />
                  <br />
                  <input
                    type="address"
                    className="form-control"
                    id="exampleInputaccountno"
                    placeholder="Account No"
                  />
                  <br />
                  <input
                    type="date"
                    className="form-control2"
                    id="exampleInputdate"
                    placeholder="Date"
                  />
                  <input
                    type="cvv"
                    className="form-control3"
                    id="exampleInputcvv"
                    placeholder="CVV"
                  />
                  <button type="button" className="btn2">Pay</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

                 
    </div>

                           


     )
}

export default ShippingPayment;