import React, { useState } from "react";
import axios from "axios";
import '../../styles/AddExpenditure.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function AddExpenditure() {

    const [code, setCode] = useState("");
    const [description, setDescription] = useState("");
    const [vamount, setVamount] = useState("");

    function sendData(e){
        e.preventDefault();

        const newExpenditure ={
            code,
            description,
            vamount
        }

        axios.post("http://localhost:8070/expenditure/add",newExpenditure).then(()=>{
            alert("Expenditure Added");
            window.location.replace("/expense/list");
        }).catch((err)=>{
            alert(err)
        })
    }

    return (
    <div className="container">
      <form onSubmit={sendData}>
        <div className="form-group">
          <label htmlFor="code">Code</label>
          <input type="text" className="form-control" id="code" placeholder="Code"
          onChange ={(e)=>{
                setCode(e.target.value);
            }} required/>

        </div>
        <div className="form-group">
          <label htmlFor="description">Description</label>
          <input type="text" className="form-control" id="description" placeholder="Description"
          onChange ={(e)=>{
                setDescription(e.target.value);
            }} required/>

        </div>
        <div className="form-group">
          <label htmlFor="valueAmount">Value Amount</label>
          <input type="text" className="form-control" id="valueAmount" placeholder="Value Amount"
          onChange ={(e)=>{
                setVamount(e.target.value);
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