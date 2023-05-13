import React, {useState} from "react";
import "../edititemspageComponent/edititemspage.css";

import EditItemsPageUpPart from "./edititemspageuppart";
import EditItemsPageDownPart from "./edititemspagedownpart";

function EditItemsPage(){
    return(
        <div>
            <div>
                <EditItemsPageUpPart/>
            </div>
            <div>
                <EditItemsPageDownPart/> 
            </div>
        </div>
    );
}

export default EditItemsPage;