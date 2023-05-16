import React,{useState} from "react";
import "../profileeditComponent/profileeditpagerightside.css";

function ProfileEditRightSide(){
    return(
        <div>
            <div className="row profileeditmainR">

                <div className="col-sm-1 "></div>
                <div className="col-sm-10  profileeditmainright">

                    <div className="row rightside_row_one">
                        <t className="rightsidetopic">Edit Profile</t>
                    </div>

                    <div className="row rightsiderow mak">
                        <div className="col-sm-6 ">
                            <div className="subhead">FullName</div>
                            <div><input type="text" class="editprofilepage_textbox" placeholder="Your Name" required/></div>
                        </div>
                        <div className="col-sm-6 ">
                            <div className="subhead">UserName</div>
                            <div><input type="text" class="editprofilepage_textbox" placeholder="_._yeshu_." required/></div>
                        </div>
                    </div>
                    <div className="row rightsiderow mak">
                        <div className="col-sm-6 ">
                            <div className="subhead">Phone</div>
                            <div><input type="text" class="editprofilepage_textbox" placeholder="077 - xxx xxxx" required/></div>
                        </div>
                        <div className="col-sm-6 ">
                            <div className="subhead">Email</div>
                            <div><input type="text" class="editprofilepage_textbox" placeholder="user@gmail.com" required/></div>
                        </div>
                    </div>
                    <div className="row rightsiderow mak">
                        <div className="col-sm-6 ">
                            <div className="subhead">Address</div>
                            <div><input type="text" class="editprofilepage_textbox" placeholder="xxxx Lane" required/></div>
                        </div>
                        <div className="col-sm-6 ">
                            <div className="subhead">City</div>
                            <div><input type="text" class="editprofilepage_textbox" placeholder="user's city" required/></div>
                        </div>
                    </div>
                    <div className="row rightsiderow mak">
                        <div className="col-sm-6 ">
                            <div className="subhead">State</div>
                            <div><input type="text" class="editprofilepage_textbox" placeholder="xxxxxxx" required/></div>
                        </div>
                        <div className="col-sm-6 ">
                            <div className="subhead">Zip Code</div>
                            <div><input type="text" class="editprofilepage_textbox" placeholder="xxxx" required/></div>
                        </div>
                    </div>

                    <div className="row rightsiderow mak">
                        <div className="col-sm-6 ">
                            
                        </div>
                        <div className="col-sm-6 ">
                            
                        </div>
                    </div>

                    <div className="row rightside_row_two"></div>

                    

                    {/* <div className="row underprofile"></div> */}
                </div>
                <div className="col-sm-1 "></div>
            </div>
        </div>
    );
}

export default ProfileEditRightSide;