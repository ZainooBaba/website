import './whatWeDo.css';

import background from "../../assets/whatWeDo-background.svg";
import corner from "../../assets/corner.svg";
import circle from "../../assets/graphic.svg";
import crescent from "../../assets/graphic2.svg";
import React from "react";

export function WhatWeDo(){
    return (
      <div style={{flex:1}} className="centerIt">

          <div style={{display: "flex", position:"relative", height:"fit-content"}}>
              <img src={background} style={{width:"100%", position:"absolute", minHeight:"120%"}}/>
              <img src={corner} style={{position:"absolute", left: "31.85%", top: "-5.3%"}}/>
              <img src={circle} style={{position:"absolute", left: "42.8%", top: "45.9%"}}/>
              <img src={crescent} style={{position:"absolute", left: "63.93%", top: "13.4%",opacity:0.2}}/>

              <div style={{paddingLeft:'2.8%', paddingTop:'2.25%', zIndex:'3'}}>
                  <h2>What we do</h2>
                  <div style={{display: "flex",flexWrap: "wrap", flexDirection: "row", marginTop:12}}>
                      <b1 style={{width:'37%', minWidth:'28ch'}}>
                          CodeFluent’s mission is simple: tailored business applications, integrations, and
                          extensions that are built to extend the value and functionality of the SAP Platform.
                          <br/><br/>
                          Building upon a 25+ year relationship with SAP, the CodeFluent team is well versed
                          in Enterprise Business Applications and has worked with hundreds of reputable SAP customers.
                          Through years of SAP Systems integration experience, the CodeFluent team has recognized <br/>
                          opportunities for technology to further expand the value of SAP solutions.
                      </b1>
                      <b1 style={{width:'37%', minWidth:'28ch', marginLeft:"4.2%"}}>
                          With the advent of SAP’s Business Technology Platform (BTP), CodeFluent is now working
                          within the SAP BTP platform to build value-added solutions and integrations for the SAP
                          community.
                          <br/><br/>
                          As an SAP Gold Partner, CodeFluent is committed to building software that boosts
                          the ROI and flexibility of our customers’ SAP investments.
                      </b1>
                  </div>
              </div>

          </div>
      </div>
    )
}