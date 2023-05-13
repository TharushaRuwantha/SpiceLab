import React, {useState} from "react";
import "../edititemspageComponent/edititemspageuppart.css";

function EditItemsPageUpPart(){
    return(
        <div>
            <div className="row ">
                <div className="col-sm-1"></div>

                <div className="col-sm-10 edititemspageuppart">
                    <div className="edititemspagetopic">Edit Items</div>
                </div>

                <div className="col-sm-1"></div>  
            </div>
        </div>
    );
}

export default EditItemsPageUpPart;
