import './ShippingPayment.css';
import React from "react";
import Grid from '@mui/material/Grid';


function ShippingPayment(){
     return(

   <div class="container text-center">
      <div class="row align-items-center">

        <div class="col">
        <h4 class="card-title">Shipping Address</h4>
           <div class="card">
                <div class="card-body">
                    <form>
                        <div class="rg-3">
                            <label class="form-label">Full Name</label>
                            <input type="email" class="form-control" id="exampleInputEmail1"></input>
                            <label class="form-label">Address</label>
                            <input type ="address" class="form-control" id="exampleInputaddress1" ></input>
                            <label class="form-label">Country</label>
                            <input type ="country" class="form-control" id="exampleInputcountry" ></input>
                            <label class="form-label">City</label>
                            <input type ="address" class="form-control" id="exampleInputcity" ></input>
                            <label class="form-label">Postal Code</label>
                            <input type ="address" class="form-control" id="exampleInputpostalcode" ></input>
                            <button type="button" class="btn">Continue</button>

                        </div>
                    </form>
                

                </div>
            </div>
        </div>

        <div class="col">
        <h4 class="card-title2">Payments</h4>
           <div class="card">
                <div class="card-body">
                    <form>
                        <div class="rg-3">
                            
                            <input type="email" class="form-control" id="exampleInputEmail1"placeholder="Email Address"></input>
                            <br></br>
                            <input type ="address" class="form-control" id="exampleInputaccountno" placeholder="Account No"></input>
                            <br></br>
                            <input type ="date" class="form-control2" id="exampleInputdate" placeholder="Date"></input>

                            <input type ="cvv" class="form-control2" id="exampleInputcvv" placeholder="CVV"></input>
                            <button type="button" class="btn2">Pay</button>


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