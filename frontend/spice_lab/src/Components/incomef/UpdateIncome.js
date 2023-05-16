import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import '../../styles/UpdateIncome.css';

export default function UpdateIncome() {


    const [itemid, setItemid] = useState("");
    const [name, setName] = useState("");
    const [quantity, setQuantity] = useState("");
    const [pamount, setPamount] = useState("");

    const {id} = useParams();


    const getIncome = () => {
        axios.get("http://localhost:8070/incomes/get/"+id).then((res) =>{
            const UpdateIncomes = {
                itemid: res.data.income.itemid,
                name: res.data.income.name,
                quantity: res.data.income.quantity,
                pamount: res.data.income.pamount,
            }
    
            setItemid(UpdateIncomes.itemid);
            setName(UpdateIncomes.name);
            setQuantity(UpdateIncomes.quantity);
            setPamount(UpdateIncomes.pamount);
    
            console.log(res);
        }).catch((err) =>{
            alert(err.message);
        });
       }

       useEffect(() => getIncome(), []);

    return(

        <div className="container">
            <h1>Update Income</h1>
            <form onSubmit={(e) => {
                    e.preventDefault();

                        const newIncome = {
                            itemid,
                            name,
                            quantity,
                            pamount
                        }
                        axios.put("http://localhost:8070/incomes/update/"+id, newIncome).then(() =>{
                            alert("Item Updated");
                            window.location.replace("/income/list");
                        }).catch((err)=>{
                            alert(err);
                        })
                    }}>

                        <div class="form-group">
                        <label htmlFor="itemid" className="form-label">Item No</label>
                        <input type="text" className="form-control" id="itemid" value={itemid} placeholder="Item No" onChange={(e)=>{
                            
                            setItemid(e.target.value);
                        }} required/>
                        </div>
                                
                        <div className="form-group">
                        <label htmlFor="name" className="form-label">Product Name</label>
                        <input type="text" className="form-control" id="name" value={name} placeholder="Product Name" onChange={(e)=>{
                                
                            setName(e.target.value);
                        }} required/>
                        </div>
                                
                        <div className="form-group">
                        <label htmlFor="quantity" className="form-label">Quantity</label>
                        <input type="text" className="form-control" id="quantity" value={quantity} placeholder="Quantity" onChange={(e)=>{
                                
                            setQuantity(e.target.value);
                        }} required/>
                        </div>

                        <div className="form-group">
                        <label htmlFor="pamount" className="form-label">Product Amount</label>
                        <input type="text" className="form-control" id="pamount" value={pamount} placeholder="Product Amount" onChange={(e)=>{
                                
                            setPamount(e.target.value);
                        }} required/>
                        </div>

                        <div className="form-group text-right submit-button">
                            <button type="submit" className="button-submit">
                                Submit
                            </button>
                        </div>
                </form>
        </div>
    );
}