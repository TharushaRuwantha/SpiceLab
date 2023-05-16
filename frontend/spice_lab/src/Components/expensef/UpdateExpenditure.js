import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import '../../styles/UpdateExpenditure.css';


export default function UpdateExpenditure(){


    const [code, setCode] = useState("");
    const [description, setDescription] = useState("");
    const [vamount, setVamount] = useState("");

    const {id} = useParams();



    const getExpenditure = () => {
        axios.get("http://localhost:8070/expenditure/get/"+id).then((res) =>{
            const UpdateExpenditures = {
                code: res.data.expenditure.code,
                description: res.data.expenditure.description,
                vamount: res.data.expenditure.vamount,
            }
    
            setCode(UpdateExpenditures.code);
            setDescription(UpdateExpenditures.description);
            setVamount(UpdateExpenditures.vamount);
    
            console.log(res);
        }).catch((err) =>{
            alert(err.message);
        });
       }

       useEffect(() => getExpenditure(), []);

    return(

        <div className="container">
            <h1>Update Expenditure</h1>
            <form onSubmit={(e) => {
                    e.preventDefault();

                        const newExpenditure = {
                            code,
                            description,
                            vamount
                        }
                        axios.put("http://localhost:8070/expenditure/update/"+id, newExpenditure).then(() =>{
                            alert("Item Updated");
                            window.location.replace("/expense/list");
                        }).catch((err)=>{
                            alert(err);
                        })
                    }}>

                        <div class="form-group">
                        <label htmlFor="code" className="form-label">Code No</label>
                        <input type="text" className="form-control" id="code" value={code} placeholder="Code No" onChange={(e)=>{
                            
                            setCode(e.target.value);
                        }} required/>
                        </div>
                                
                        <div className="form-group">
                        <label htmlFor="description" className="form-label">Description</label>
                        <input type="text" className="form-control" id="description" value={description} placeholder="Description" onChange={(e)=>{
                                
                            setDescription(e.target.value);
                        }} required/>
                        </div>
                                
                        <div className="form-group">
                        <label htmlFor="vamount" className="form-label">Value Amount</label>
                        <input type="text" className="form-control" id="vamount" value={vamount} placeholder="Value Amount" onChange={(e)=>{
                                
                            setVamount(e.target.value);
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