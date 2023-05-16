import React,{useState} from "react";
import "../profileeditComponent/profileeditpage.css";
import ProfileEditLeftSide from "./profileeditpageleftside";
import ProfileEditRightSide from "./profileeditpagerightside";


function ProfileEditPage(){
    return(
        <div>
           <div className="row">

                <div className="col-sm-1 "></div>

                <div className="col-sm-3 ">
                    
                    <div>
                        <ProfileEditLeftSide/>
                    </div>

                    <div className="profileeditmainunderpart"></div>

                </div>

                <div className="col-sm-7 ">
                    <div>
                        <ProfileEditRightSide/>
                    </div>
                </div>

                <div className="col-sm-1 "></div>

            </div>
        </div>
    );

}

export default ProfileEditPage;