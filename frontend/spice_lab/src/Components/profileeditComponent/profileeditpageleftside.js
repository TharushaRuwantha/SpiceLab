import React,{useState} from "react";
import "../profileeditComponent/profileeditpageleftside.css";
import NYprofile from "../../images/NYprofile.png"

function ProfileEditLeftSide(){
    return(
        <div>
            <div className="row profileeditmain">

                <div className="col-sm-1 "></div>
                <div className="col-sm-3  profileeditmainleft">

                    <div className="row">
                        <div className="col-sm-1"></div>
                        < div className="col-sm-10">
                           
                            <div className="row">
                                <center>
                                    <img className="profilepageimg" src={NYprofile}/>
                                </center>
                            </div>

                            <div className="row">
                                <center>
                                    <div className="profilemainnametext">
                                        Shanika Dilushani
                                    </div>
                                    <div className="profilemainemailtext">
                                        dilushani@gmail.com
                                    </div>
                                </center>
                            </div>

                            <div className="row profile_description_topic_space">
                                <center>
                                    <div className="profile_description_topic">
                                        About
                                    </div>
                                    <div className="profile_description">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc m nec erat dolor sit amet, consectetur adipiscing elit. Nunc m nec erat dolor sit amet, consectetur adipiscing elit. Nunc m nec erat
                                    </div>
                                </center>
                            </div>

                            <div className="row underprofile"></div>
                            
                        </div>
                        <div className="col-sm-1"></div>
                    </div>

                </div>
                
                <div className="col-sm-7 "></div>
                <div className="col-sm-1"></div>

            </div>
        </div>
    );
}

export default ProfileEditLeftSide;