import React, {useState} from "react";
import "../edititemspageComponent/edititemspageuppart.css";

function EditItemsPageUpPart(){
    return(
        <div>
            <div className="row ">
                <div className="col-sm-1"></div>

                <div className="col-sm-10 edititemspage">
                    <div className="edititemspagetopic">Add New Items</div>
                </div>

                <div className="col-sm-1"></div>  
            </div>
        </div>
    );
}

export default EditItemsPageUpPart;
