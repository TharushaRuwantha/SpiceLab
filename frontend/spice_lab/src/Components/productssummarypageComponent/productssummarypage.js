import React,{useState} from "react";
import "../productssummarypageComponent/productssummarypage.css";

import ProductsSummaryPageUpPart from "./productssummarypageuppart";
import ProductsSummaryPageDownPart from "./productssummarypagedownpart";

function ProductsSummaryPage(){
    return(
        <div >
            <div>
                <ProductsSummaryPageUpPart/>
            </div>
            <div>
                <ProductsSummaryPageDownPart/>
            </div>
            <div>

            </div>
        </div>
    );
}

export default ProductsSummaryPage;