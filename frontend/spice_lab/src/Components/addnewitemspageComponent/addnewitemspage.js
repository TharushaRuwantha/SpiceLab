import React, {useState} from "react";
import "../addnewitemspageComponent/addnewitemspage.css";

import AddNewItemsPageUpPart from "./addnewitemspageuppart";
import AddNewItemsPageDownPart from "./addnewitemspagedownpart";

function AddNewItemsPage(){
    return(
        <div>
        <div>
            <AddNewItemsPageUpPart/>
        </div>
        <div>
            <AddNewItemsPageDownPart/>
        </div>
    </div>
    );
}

export default AddNewItemsPage;