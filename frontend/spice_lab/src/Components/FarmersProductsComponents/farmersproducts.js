import React, {useState} from "react";
import "../FarmersProductsComponents/farmersproducts.css";

import FarmersProductsUpPart from "./farmersproductsuppart";
import FarmersProductsDownPart from "./farmersproducatsdownpart";



function FarmersProducts(){
    return(
        <div>
            <div>
                <FarmersProductsUpPart/>
            </div>
            <div>
                <FarmersProductsDownPart/>
            </div>
        </div>
    );
}

export default FarmersProducts;