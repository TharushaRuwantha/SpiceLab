import React from "react";
import "../RegistrationForm/registrationPage.css"
function IndividualRegForm(){
    return(
        <form className="form">
        <div className="row">
            <div className="col-sm-4">
                    <div className="formText">Name</div>
                     <input type="text" class="form-control" placeholder=" example (Pvt) Ltd" required/>
            </div>
            
            <div className="col-sm-4">
                <div className="formText">
                    Contact Number
                </div>
                <input type="tel" class="form-control" placeholder=" 071-123-1234"  pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" required/>
                
            </div>
            <div className="col-sm-4">
                <div className="formText">
                    Address
                </div>
                <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St" required/>
            </div>
            <div className="col-sm-4">
                    <div className="formText"> Password</div>
                    <input type="password" class="form-control" id="inputPassword4" placeholder="xxxxxxxxxx" required/>
            </div><div className="col-sm-4">
                    <div className="formText"> Confirm Password</div>
                    <input type="password" class="form-control" id="inputPassword" placeholder="xxxxxxxxxx" required/>
            </div>
            <div className="col-sm-4">
                <div className="formText">Zip Code</div>
                <input type="text" class="form-control" id="inputZip" required/>
            </div>
            <div className="col-sm-4">
                <div className="formText">
                    E-mail
                </div>
                <input type="text" class="form-control" placeholder="exmple@email.com"  required/>


            </div>
            
            <div className="row">
                <div className="col ContinueBtn">
                <button type="submit" class="continueBtn btn btn-primary ">Continue</button>
                </div>
            </div>

            
        </div>
    </form>
    )
}

export default IndividualRegForm;