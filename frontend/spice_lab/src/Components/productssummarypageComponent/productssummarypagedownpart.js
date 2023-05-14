import React, {useState} from "react";
import "../productssummarypageComponent/productssummarypagedownpart.css";
import Button from '@mui/material/Button';
import Pagination from '@mui/material/Pagination';

function ProductsSummaryPageDownPart(){
    return(
        <div>
            <div className="row">

                <div className="col-sm-1"></div>

                <div className="col-sm-10 productssummarypagedownpart">
                   
                    <div className="row ">
                        <div className="col-sm-1"></div>
                        <div className="col-sm-2  "><center className="productssummarypagetextB">Product Code </center></div>
                        <div className="col-sm-3 "><center className="productssummarypagetextB">Items</center> </div>
                        <div className="col-sm-3 "><center className="productssummarypagetextB">Weight</center></div>
                        <div className="col-sm-3 "><center className="productssummarypagetextB">Sales</center></div>
                    </div>
                    <div className="row productssummarypagedownpartcolour">
                        <div className="col-sm-1 tableborderA"><center className="productssummarypagetextA " ><u>View</u></center></div>
                        <div className="col-sm-2 tableborderA"><center className="productssummarypagetextA ">E001-11</center></div>
                        <div className="col-sm-3 tableborderA"><center className="productssummarypagetextA ">Pepper Powder</center></div>
                        <div className="col-sm-3 tableborderA"><center className="productssummarypagetextA ">5000KG</center></div>
                        <div className="col-sm-3 tableborderA"><center className="productssummarypagetextA ">Rs.15 000</center></div>
                    </div>
                    <br></br>
                    <div className="row productssummarypagedownpartcolour">
                        <div className="col-sm-1 tableborderA"><center className="productssummarypagetextA " ><u>View</u></center></div>
                        <div className="col-sm-2 tableborderA"><center className="productssummarypagetextA ">E001-11</center></div>
                        <div className="col-sm-3 tableborderA"><center className="productssummarypagetextA ">Pepper Powder</center></div>
                        <div className="col-sm-3 tableborderA"><center className="productssummarypagetextA ">5000KG</center></div>
                        <div className="col-sm-3 tableborderA"><center className="productssummarypagetextA ">Rs.15 000</center></div>
                    </div>
                    <br></br>
                    <div className="row productssummarypagedownpartcolour">
                        <div className="col-sm-1 tableborderA"><center className="productssummarypagetextA " ><u>View</u></center></div>
                        <div className="col-sm-2 tableborderA"><center className="productssummarypagetextA ">E001-11</center></div>
                        <div className="col-sm-3 tableborderA"><center className="productssummarypagetextA ">Pepper Powder</center></div>
                        <div className="col-sm-3 tableborderA"><center className="productssummarypagetextA ">5000KG</center></div>
                        <div className="col-sm-3 tableborderA"><center className="productssummarypagetextA ">Rs.15 000</center></div>
                    </div>
                    
                    <br></br>
                    <div className="row productssummarypagedownpartcolour">
                        <div className="col-sm-1 tableborderA"><center className="productssummarypagetextA " ><u>View</u></center></div>
                        <div className="col-sm-2 tableborderA"><center className="productssummarypagetextA ">E001-11</center></div>
                        <div className="col-sm-3 tableborderA"><center className="productssummarypagetextA ">Pepper Powder</center></div>
                        <div className="col-sm-3 tableborderA"><center className="productssummarypagetextA ">5000KG</center></div>
                        <div className="col-sm-3 tableborderA"><center className="productssummarypagetextA ">Rs.15 000</center></div>
                    </div>
                    <br></br>
                    <div className="row productssummarypagedownpartcolour">
                        <div className="col-sm-1 tableborderA"><center className="productssummarypagetextA " ><u>View</u></center></div>
                        <div className="col-sm-2 tableborderA"><center className="productssummarypagetextA ">E001-11</center></div>
                        <div className="col-sm-3 tableborderA"><center className="productssummarypagetextA ">Pepper Powder</center></div>
                        <div className="col-sm-3 tableborderA"><center className="productssummarypagetextA ">5000KG</center></div>
                        <div className="col-sm-3 tableborderA"><center className="productssummarypagetextA ">Rs.15 000</center></div>
                    </div>
  
                    
                </div>

                <div className="col-sm-1"></div>

            </div>

            <div className="row">
                <div className="col-sm-1"></div>
                <div className="col-sm-10">
                    <div className="row productsammeryunderpartA ">

                        <div className="col-sm-10"></div>
                        <div className="col-sm-2 ">
                            <center>
                            <Button variant="contained" style={{backgroundColor: '#4D1003', color: 'white', width: '100%'}}>Print</Button>
                            </center>
                        </div> 

                    </div>
                </div>
                <div className="col-sm-1"></div>  
            </div>

            <div className="row">
                <div className="col-sm-1"></div>
                <div className="col-sm-10">
                    <div className="row productsammeryunderpartB ">

                        <div className="col-sm-9"></div>
                        <div className="col-sm-3 ">
                            <center>
                                <Pagination count={4} variant="outlined" shape="rounded" />       
                            </center>
                        </div> 

                    </div>
                </div>
                <div className="col-sm-1"></div>  
            </div>
        </div>
    );
}

export default ProductsSummaryPageDownPart;