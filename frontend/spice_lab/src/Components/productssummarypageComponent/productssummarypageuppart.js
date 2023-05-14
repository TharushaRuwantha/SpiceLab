import React,{useState} from "react";
import "../productssummarypageComponent/productssummarypageuppart.css";

function ProductsSummaryPageUpPart(){
    return(
        <div>
            <div className="row ">
                <div className="col-sm-1"></div>

                <div className="col-sm-10 productssummarypageuppart">

                    <div className="row">

                        <div className="col-sm-4 productssummarypagetopic">Products</div>

                        <div className="col-sm-8 productssummarypagetopic">
                            <input
                                className="form-control me-2 searchbarA"
                                type="search"
                                placeholder="Search"
                                aria-label="Search"
                                
                            />  
                        </div>

                    </div>

                </div>

                <div className="col-sm-1"></div>  
            </div>
        </div>
    );
}

export default ProductsSummaryPageUpPart;