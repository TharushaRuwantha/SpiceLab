import React, {useState} from "react";
import "../FarmersProductsComponents/farmersproducatsdownpart.css";

import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';


function FarmersProductsDownPart(){
    return(
        <div>
            <div className="row">
                <div className="col-sm-1"></div>
                <div className="col-sm-10 outborderA" >
                    <div className="row">
                        <div className="col-sm-1"></div>
                        <div className="col-sm-2"><center className="textB">Product Code </center></div>
                        <div className="col-sm-3"><center className="textB">Items</center></div>
                        <div className="col-sm-2"><center className="textB">Quantity</center></div>
                        <div className="col-sm-4"></div>
                       
                    </div>
                </div>
                <div className="col-sm-1"></div>
            </div>

            <div className="row">
                <div className="col-sm-1"></div>
                <div className="col-sm-10 outborderB" >
                    <br></br>
                    <div className="row">

                        <div className="col-sm-1 "><center><Checkbox /></center></div>
                        <div className="col-sm-2 textA "><center>E001-11</center></div>
                        <div className="col-sm-3 textA"><center>Cinnamon Powder</center></div>
                        <div className="col-sm-2 textA"><center>5000KG</center></div>
                        <div className="col-sm-4 ">
                            <div className="row">
                                <div className="col-sm-6 "> 
                                    <center><Button variant="contained" style={{backgroundColor: '#4D1003', color: 'white', width: '100px'}}>Edit</Button></center>
                                </div>
                                <div className="col-sm-6 ">
                                    <center><Button variant="contained" style={{backgroundColor: '#4D1003', color: 'white', width: '100px'}}>Delete</Button></center> 
                                </div>
                            </div>
                        </div>
                        
                    </div>
                    <br></br>
                    <div className="row">

                        <div className="col-sm-1 "><center><Checkbox  /></center></div>
                        <div className="col-sm-2 textA "><center>E002-11</center></div>
                        <div className="col-sm-3 textA"><center>Pepper Powder</center></div>
                        <div className="col-sm-2 textA"><center>25000KG</center></div>
                        <div className="col-sm-4 ">
                            <div className="row">
                                <div className="col-sm-6"> 
                                    <center><Button variant="contained" style={{backgroundColor: '#4D1003', color: 'white', width: '100px'}}>Edit</Button></center>
                                </div>
                                <div className="col-sm-6 ">
                                    <center><Button variant="contained" style={{backgroundColor: '#4D1003', color: 'white', width: '100px'}}>Delete</Button></center>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                    <br></br>
                    <div className="row">

                        <div className="col-sm-1 "><center><Checkbox/></center></div>
                        <div className="col-sm-2 textA "><center>E003-57</center></div>
                        <div className="col-sm-3 textA"><center>Cloves Raw</center></div>
                        <div className="col-sm-2 textA"><center>16000KG</center></div>
                        <div className="col-sm-4 ">
                            <div className="row">
                                <div className="col-sm-6 "> 
                                    <center><Button variant="contained" style={{backgroundColor: '#4D1003', color: 'white', width: '100px'}}>Edit</Button></center>
                                </div>
                                <div className="col-sm-6 ">
                                    <center><Button variant="contained" style={{backgroundColor: '#4D1003', color: 'white', width: '100px'}}>Delete</Button></center> 
                                </div>
                            </div>
                        </div>
                        
                    </div>
                    <br></br>
                    <div className="row">

                        <div className="col-sm-1 "><center><Checkbox  /></center></div>
                        <div className="col-sm-2 textA "><center>E004-23</center></div>
                        <div className="col-sm-3 textA"><center>Nutmeg Powder</center></div>
                        <div className="col-sm-2 textA"><center>20000KG</center></div>
                        <div className="col-sm-4 ">
                            <div className="row">
                                <div className="col-sm-6 "> 
                                    <center><Button variant="contained" style={{backgroundColor: '#4D1003', color: 'white', width: '100px'}}>Edit</Button></center>
                                </div>
                                <div className="col-sm-6 ">
                                    <center><Button variant="contained" style={{backgroundColor: '#4D1003', color: 'white', width: '100px'}}>Delete</Button></center> 
                                </div>
                            </div>
                        </div>
                        
                    </div>
                    <br></br>
                     <div className="row">

                        <div className="col-sm-1 "><center><Checkbox /></center></div>
                        <div className="col-sm-2 textA "><center>E005-19</center></div>
                        <div className="col-sm-3 textA"><center>Cinnamon Tea</center></div>
                        <div className="col-sm-2 textA"><center>10000KG</center></div>
                        <div className="col-sm-4 ">
                            <div className="row">
                                <div className="col-sm-6 "> 
                                    <center><Button variant="contained" style={{backgroundColor: '#4D1003', color: 'white', width: '100px'}}>Edit</Button></center>
                                </div>
                                <div className="col-sm-6 ">
                                    <center><Button variant="contained" style={{backgroundColor: '#4D1003', color: 'white', width: '100px'}}>Delete</Button></center> 
                                </div>
                            </div>
                        </div>
                        
                    </div>
                    <br></br>
                     <div className="row">

                        <div className="col-sm-1 "><center><Checkbox /></center></div>
                        <div className="col-sm-2 textA "><center>E006-71</center></div>
                        <div className="col-sm-3 textA"><center>Cardamom</center></div>
                        <div className="col-sm-2 textA"><center>6000KG</center></div>
                        <div className="col-sm-4 ">
                            <div className="row">
                                <div className="col-sm-6 "> 
                                    <center><Button variant="contained" style={{backgroundColor: '#4D1003', color: 'white', width: '100px'}}>Edit</Button></center>
                                </div>
                                <div className="col-sm-6 ">
                                    <center><Button variant="contained" style={{backgroundColor: '#4D1003', color: 'white', width: '100px'}}>Delete</Button></center> 
                                </div>
                            </div>
                        </div>
                        
                    </div>
                    <br></br>
                     <div className="row">

                        <div className="col-sm-1 "><center><Checkbox /></center></div>
                        <div className="col-sm-2 textA "><center>E007-24</center></div>
                        <div className="col-sm-3 textA"><center>Chilli</center></div>
                        <div className="col-sm-2 textA"><center>1200KG</center></div>
                        <div className="col-sm-4 ">
                            <div className="row">
                                <div className="col-sm-6 "> 
                                    <center><Button variant="contained" style={{backgroundColor: '#4D1003', color: 'white', width: '100px'}}>Edit</Button></center>
                                </div>
                                <div className="col-sm-6 ">
                                    <center><Button variant="contained" style={{backgroundColor: '#4D1003', color: 'white', width: '100px'}}>Delete</Button></center> 
                                </div>
                            </div>
                        </div>
                        
                    </div>
  
                </div>
                <div className="col-sm-1"></div>
            </div>

            <div className="outborderC"></div>   
        </div>
    );
}

export default FarmersProductsDownPart;