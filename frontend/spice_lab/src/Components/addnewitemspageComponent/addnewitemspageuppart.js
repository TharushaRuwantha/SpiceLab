import React,{useState} from "react";
import "../addnewitemspageComponent/addnewitemspageuppart.css";

function AddNewItemsPageUpPart(){
    return(
        <div>
            <div className="row ">
                <div className="col-sm-1"></div>

                <div className="col-sm-10 addnewitemspageuppart">
                    <div className="addnewitemspagetopic">Add New Items</div>
                </div>

                <div className="col-sm-1"></div>  
            </div>
        </div>
    );
}

export default AddNewItemsPageUpPart;