import React, {useState} from "react";
import "../FarmersProductsComponents/farmersproductsuppart.css";  

import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import DehazeIcon from '@mui/icons-material/Dehaze';
import Button from '@mui/material/Button';


function FarmersProductsUpPart(){
    return(
        <div>
           <div className="row upmargin ">
                <div className="col-sm-1"></div>
                    
                <div className="col-sm-10 ">
                    <div className="row">
                        <div className="col-sm-1  ">
                            <button className="btn">  <DehazeIcon style={{fontWeight: 'bold'}} /></button>
                        </div>
                        <div className="col-sm-1 filfont">
                            Filter
                        </div>
                        <div className="col-sm-7"></div>
                            
                        
                        <div className="col-sm-1">
                            <center><div className="addcircleicon filfont" ><AddCircleOutlineIcon/></div></center>
                        </div>
                        <div className="col-sm-2">
                            <center><Button variant="outlined" href="#contained-buttons" style={{color: '#4D1003', borderColor: '#4D1003'}}>Add Items</Button></center>
                        </div>
                    </div>
                </div>
                
                <div className="col-sm-1"></div>
 
            </div>
            
        </div>
    );
}

export default FarmersProductsUpPart;