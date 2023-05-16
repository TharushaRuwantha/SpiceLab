import React from "react";
import "../buyingRequest/BuyingRequestPage.css"

function BuyingRequest(){

    return(
        <div>
            <div className="row">
                <div className="col-10">
                    <h3 className="Topic-Text">Add Request</h3>
                    
                </div>
                
                <div className="col-2">
                    <button className="add-button" > + </button>
                </div>
            </div>
            <div className="container">
                <div className="row listRow">
                    <div className="col-2">
                        <lable>Cinnamon</lable>
                    </div>
                    <div className="col-2">
                        <lable>50</lable><lable>KG</lable>
                    </div>
                    <div className="col-3">
                        You should Deliver
                    </div>
                    <div className="col-3">

                    </div>
                    <div className="col-2">
                        <button className="savebtn">Save</button>
                    </div>
                </div>
                <div className="row listRow">
                    <div className="col-2">
                        <lable>Cinnamon</lable>
                    </div>
                    <div className="col-2">
                        <lable>50</lable><lable>KG</lable>
                    </div>
                    <div className="col-3">
                        You should Deliver
                    </div>
                    <div className="col-3">

                    </div>
                    <div className="col-2 buttonCol">
                        <button className="savebtn">Save</button>
                    </div>
                </div>
            </div>
        </div>

    )

}


export default BuyingRequest;