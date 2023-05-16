import React, { useState } from "react";
import axios from "axios";
import '../../styles/AddIncome.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function AddIncome() {

    const [itemid, setItemid] = useState("");
    const [name, setName] = useState("");
    const [quantity, setQuantity] = useState("");
    const [pamount, setPamount] = useState("");

    function sendData(e){
        e.preventDefault();

        const newIncome ={
            itemid,
            name,
            quantity,
            pamount
        }

        axios.post("http://localhost:8070/incomes/add",newIncome).then(()=>{
            alert("Income Added");
            window.location.replace("/income/list");
        }).catch((err)=>{
            alert(err)
        })
    }

    return (
        <div className="container">
          <form onSubmit={sendData}>
            <div className="form-group">
              <label htmlFor="itemid">Item Id</label>
              <input type="text" className="form-control" id="itemid" placeholder="Item Code"
              onChange ={(e)=>{
                    setItemid(e.target.value);
                }} required/>
    
            </div>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" className="form-control" id="name" placeholder="Name"
              onChange ={(e)=>{
                    setName(e.target.value);
                }} required/>
    
            </div>
            <div className="form-group">
              <label htmlFor="quantity">Quantity</label>
              <input type="text" className="form-control" id="quantity" placeholder="Quantity"
              onChange ={(e)=>{
                    setQuantity(e.target.value);
                }} required/>
    
            </div>
            <div className="form-group">
              <label htmlFor="pamount">Product Amount</label>
              <input type="text" className="form-control" id="pamount" placeholder="Product Amount"
              onChange ={(e)=>{
                    setPamount(e.target.value);
                }} required/>
    
            </div>
    
            <div className="form-group text-right submit-button">
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </div>
          </form>
        </div>
      );


}