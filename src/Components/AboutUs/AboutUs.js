import React from 'react';
import './AboutUs.css';
import bkgrd from "../../assets/about-us/bkgrd.svg";

export function AboutUs () {
  return (
    <div className="flex-container">
      <div className="about-us-col1">
        <img src={bkgrd} alt={"Abous Us"} className="AboutUsImg" border={0}/>
      </div>

      <div className="about-us-col2 flex-col-jv">
        <div className="section-header"><h2 className="text">About us</h2></div>

        <div className="about-us-content">
          <b1 className="text">
            From the people who brought you BuyerQuest and Nitor Partners.
            <br /><br />
            CodeFluent is a leading technical consultancy and SaaS app development firm focusing on Procurement, Supply Chain, and Business Network solutions.
            <br /><br />
            Our expertise ranges from SAP integration and extension development to management and implementation of holistic transformations.
            <br /><br />
          </b1>
        </div>
      </div>
    </div>
  );
};

