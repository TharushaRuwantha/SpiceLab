import React from "react";
import "../addRequestComponent/addRequestPage.css"
import { Container } from "@mui/material";

function AddRequest(){

    return(
        <div>
            <div className="row">
                <div className="col">
                    <h3 className="Topic-Text">Add Request</h3>
                </div>
            </div>
           <div className="container">
            <form>
            <div className="row">
                <div className="col-md-6">
                     <label for="exampleInputEmail1" class="form-label">Category</label>
                     <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                     <div id="emailHelp" class="form-text undertextCategory">error in category</div>
                </div>
                <div className="checkboxrow col-md-6">
                    <div className=" row ">
                    <div className="col-6">
                        <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                        <label class="form-check-label" for="exampleCheck1">Pick-up</label>                   
                    </div>
                    <div className="col-6">
                        <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                        <label class="form-check-label" for="exampleCheck1">Delivary</label>
                    </div>
                    </div>

                </div>
                <div className="col-md-6">
                     <label for="exampleInputEmail1" class="form-label">Amount</label>
                     <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                     <div id="emailHelp" class="form-text undertextAmount">error in Amount</div>
             

                </div>
                <div className="col-md-6">
                     <label for="exampleInputEmail1" class="form-label">Address</label>
                     <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                     <div id="emailHelp" class="form-text undertextAddress">error in Address</div>
             
                </div>
                <div className="col-md-6">
                     
                     <label for="exampleFormControlTextarea1">Other Notes</label>
                     <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                     <div id="emailHelp" class="form-text undertextAddress">error in other note</div>
             

                </div>
                <div className="col-md-6">
                     <label for="exampleInputEmail1" class="form-label">Zip Code</label>
                     <input type="" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                     <div id="emailHelp" class="form-text undertextAmount">error in zip code</div>
                </div>
                
            </div>
            <div className="row">
            <div className="Postbtnrow container-fluid">
                    <button type="submit" class="Postbtn btn btn-primary ">Post</button>
                </div>
            </div>
            </form>
           </div>
        </div>
    );

}

export default AddRequest;