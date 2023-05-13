import React, { useState } from "react";
import "../RegistrationForm/registrationPage.css";
import CompanyRegForm from "./companyForm";
import FarmerRegForm from "./FarmerForm";

function Register() {
  const [selectedTab, setSelectedTab] = useState("individual");
  const handleTabClick = (tab) => {
    setSelectedTab(tab);
  };

  return (
    <div className="RegistationContainer container">
      <div className="row topicBar">
        <h3>Registration</h3>
      </div>
      <div className="TabBar row">
        <div
          className={`tabButton col-4 ${
            selectedTab === "individual" ? "selected" : ""
          }`}
          onClick={() => handleTabClick("individual")}
        >
          Register as an individual
        </div>
        <div
          className={`tabButton col-4 ${
            selectedTab === "company" ? "selected" : ""
          }`}
          onClick={() => handleTabClick("company")}
        >
          Register as a Company
        </div>
        <div
          className={`tabButton col-4 ${
            selectedTab === "farmer" ? "selected" : ""
          }`}
          onClick={() => handleTabClick("farmer")}
        >
          Register as a Farmer
        </div>
      </div>
      <div className="RegForm">
        {selectedTab === "company" && <CompanyRegForm />}
        {selectedTab === "individual" && <FarmerRegForm/>}
        {selectedTab === "farmer" && <FarmerRegForm/>}
      </div>
    </div>
  );
}

export default Register;
