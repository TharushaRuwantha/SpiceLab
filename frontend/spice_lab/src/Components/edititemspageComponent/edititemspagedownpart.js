import React, {useState} from "react";
import "../edititemspageComponent/edititemspagedownpart.css";

import itemimg from "../../images/nypic.png";
import Button from '@mui/material/Button';



function EditItemsPageDownPart(){
    return(
        <div>
            <div className="row ">
                <div className="col-sm-1"></div>

                <div className="col-sm-10 edititemspagedownpart">
                    <div className="row ">
                        <div className="col-sm-1"></div>

                        <div className="col-sm-10 edititemspagedownpartA">
                            <div className="row">
                                <div className="col-sm-4 makann">
                                    <img src={itemimg}  className="imgstyle"/>
                                </div>
                                <div className="col-sm-1 makann">
                                    
                                </div>
                                <div className="col-sm-7 ">
                                    <div className="row">
                                        <div className="col-sm-4 editpagefont ">Full Name</div>
                                        <div className="col-sm-8 ">
                                            <input type="text" class="form-controlNY" placeholder=" example Mr.Lasitha Perera" required/>
                                        </div>
                                    </div>
                                    <div className="row editpagespace">
                                        <div className="col-sm-4 editpagefont ">Weight</div>
                                        <div className="col-sm-8 ">
                                            <input type="text" class="form-controlNY" placeholder=" example KG" required/>
                                        </div>
                                    </div>
                                    <div className="row editpagespace">
                                        <div className="col-sm-4 editpagefont">Price</div>
                                        <div className="col-sm-8 ">
                                            <input type="text" class="form-controlNY" placeholder=" example $100" required/>
                                        </div>
                                    </div>
                                    <div className="row editpagespace">
                                        <div className="col-sm-12 editpagefont ">Description</div>
                                        <textarea className="form-controlNY editpagespaceA" placeholder=" example (Pvt) Ltd" required></textarea>  
                                    </div>
                                    <div className="row editpagespace">
                                        <div className="col-sm-6"></div>
                                        <div className="col-sm-3 ">
                                            <center><Button variant="contained" style={{backgroundColor: '#4D1003', color: 'white', width: '100px'}}>Cancel</Button></center>
                                        </div> 
                                        <div className="col-sm-3">
                                            <center><Button variant="contained" style={{backgroundColor: '#4D1003', color: 'white', width: '100px'}}>Save</Button></center>
                                        </div> 
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-sm-1"></div>  
                    </div>
                </div>

                <div className="col-sm-1"></div>  
            </div>
        </div>
    );
}

export default EditItemsPageDownPart;