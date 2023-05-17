import React, {useState} from "react";
import "../addnewitemspageComponent/addnewitemspagedownpart.css";

import itemimg from "../../images/nypic.png";
import Button from '@mui/material/Button';

function AddNewItemsPageDownPart(){
    return(
        <div>
            <div className="row ">
                <div className="col-sm-1"></div>

                <div className="col-sm-10 addnewitemspagedownpart">
                    <div className="row ">
                        <div className="col-sm-1"></div>

                        <div className="col-sm-10 addnewitemspagedownpartA">
                            <div className="row">

                                <div className="col-sm-4">
                                    <div className="imgstyle imgstylemargin">
                                        <center>
                                            <div className="imgstylespace">
                                                <Button variant="outlined" style={{ borderColor: '#000000'}}><input id="multiplefileupload" type="file" accept=".jpg,.gif,.png" multiple  /></Button>
                                            </div>
                                        </center>
                                    </div>
                                </div>
                                <div className="col-sm-1">
                                    
                                </div>
                                
                                <div className="col-sm-7 ">

                                    <form>
                                        <div className="row">
                                            <div className="col-sm-4 addnewitemspagefont ">Full Name</div>
                                            <div className="col-sm-8 ">
                                                <input type="text" class="form-controlNYaddnewitems" placeholder=" Type here" required/>
                                            </div>
                                        </div>

                                        <div className="row addpagespace">
                                            <div className="col-sm-4 addnewitemspagefont ">Weight</div>
                                            <div className="col-sm-8 ">
                                                <input type="text" class="form-controlNYaddnewitems" placeholder="Type here" required/>
                                            </div>
                                        </div>

                                        <div className="row addpagespace">
                                            <div className="col-sm-4 addnewitemspagefont">Price</div>
                                            <div className="col-sm-8 ">
                                                <input type="text" class="form-controlNYaddnewitems" placeholder="Type here" required/>
                                            </div>
                                        </div>

                                        <div className="row addpagespace">
                                            <div className="col-sm-12 addnewitemspagefont ">Description</div>
                                            <textarea className="form-controlNYaddnewitems addpagespaceA" placeholder="Type here" required></textarea>  
                                        </div>

                                        <div className="row addpagespace">
                                            <div className="col-sm-6"></div>
                                            <div className="col-sm-3 ">
                                                <center><Button variant="contained" style={{backgroundColor: '#4D1003', color: 'white', width: '100px'}}>Cancel</Button></center>
                                            </div> 
                                            <div className="col-sm-3">
                                                <center><Button variant="contained" style={{backgroundColor: '#4D1003', color: 'white', width: '100px'}}>Finish</Button></center>
                                            </div> 
                                        </div>

                                    </form>
                                </div>
                                
                            </div>
                        </div>

                        <div className="col-sm-1 "></div>  
                    </div>
                    <div className="underpartaddpage"></div>
                </div>

                <div className="col-sm-1"></div>  
            </div>

            <div className="row underpartaddpage">
                
            </div>
        </div>
    );
}

export default AddNewItemsPageDownPart;