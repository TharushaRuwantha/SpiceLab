import React from "react";
import "../footerComponent/footerstyle.css"
import logo from "../../images/logo.png"
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';

function Footer(){
    return(
      <div className="container-fluid footermain">
        <div className="row">
            <div className="col-sm-4">
                <img src={logo}/>
            </div>
            <div className="footerLinkCol col-sm-4 ">
                <h3>Who are we</h3>
                <p>Home</p>
                <p>About US</p>
                <p>Product</p>
            </div>
            <div className="footerContactCol col-sm-4">
                <h3>Contact US</h3>
                <p><LocationOnIcon/> Location</p>
                <p><LocalPhoneIcon/> Tel-No</p>
                <p><EmailIcon/> Email</p>

            </div>

        </div>
      </div>
    )
}

export default Footer;