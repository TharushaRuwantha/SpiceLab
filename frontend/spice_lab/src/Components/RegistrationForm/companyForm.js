import React,{useState} from "react";
import "../RegistrationForm/registrationPage.css"
import axios from "axios";

function CompanyRegForm(){

    const [name , setCompanyName]=useState("");
    const [password,setPassword]=useState("");
    const [address , setAddress]=useState("");
    const [contactNo , setContactNumber]=useState("");
    const [zip , setZipCode]=useState("");
    const [email , setEmail] = useState("");
    const [webSite , setWebSite]=useState("");

    function sendData(e){
        e.preventDefault();
        alert("Insert");

        const newCompany= {
             
            name,
            password,
            address,
            zip,
            contactNo,
            email,
            webSite
        }
    
        axios.post("http://localhost:8070/company/add",newCompany).then(()=>{
            alert("company added");
            //clearing the data
            setCompanyName = (""); 
            setPassword =("");
            setAddress=("");
            setContactNumber=("");
            setZipCode=("");
            setEmail=("");
            setWebSite=("");





        }).catch((err)=>{
            alert(err)
        })
    }

    return(
        <form className="form" onSubmit={sendData}>
        <div className="row">
            <div className="col-sm-4">
                    <div className="formText"> Company Name</div>
                     <input type="text" class="form-control" placeholder=" example (Pvt) Ltd" required onChange={(e)=>{
                        setCompanyName(e.target. value);
                     }}/>
            </div>
            
            <div className="col-sm-4">
                <div className="formText">
                    Contact Number
                </div>
                <input type="tel" class="form-control" placeholder=" 071-123-1234"  pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" required onChange={(e)=>{
                        setContactNumber(e.target. value);
                     }}/>
                
            </div>
            <div className="col-sm-4">
                <div className="formText">
                    Address
                </div>
                <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St" required onChange={(e)=>{
                        setAddress(e.target. value);
                     }}/>
            </div>
            <div className="col-sm-4">
                    <div className="formText"> Password</div>
                    <input type="password" class="form-control" id="password" placeholder="xxxxxxxxxx" required onChange={(e)=>{
                        setPassword(e.target. value);
                     }}/>
            </div><div className="col-sm-4">
                    <div className="formText"> Confirm Password</div>
                    <input type="password" class="form-control" placeholder="xxxxxxxxxx" required/>
            </div>
            <div className="col-sm-4">
                <div className="formText">Zip Code</div>
                <input type="text" class="form-control" id="inputZip" required onChange={(e)=>{
                        setZipCode(e.target. value);
                     }}/>
            </div>
            <div className="col-sm-4">
                <div className="formText">
                    E-mail
                </div>
                <input type="email" class="form-control" placeholder="exmple@email.com"  required onChange={(e)=>{
                        setEmail(e.target. value);
                     }}/>


            </div>
            <div className="col-sm-4">
                <div className="formText">
                    Web Site
                </div>
                <input type="text" class="form-control" placeholder="www.example.com"onChange={(e)=>{
                        setWebSite(e.target. value);
                     }} />

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

export default CompanyRegForm;