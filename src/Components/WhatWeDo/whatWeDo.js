import './whatWeDo.css';

import background from "../../assets/whatWeDo-background.svg";
import corner from "../../assets/corner.svg";
import circle from "../../assets/graphic.svg";
import crescent from "../../assets/graphic2.svg";
import React, {useState} from "react";
import mobileBackground from "../../assets/whatWeDo/bkg2.svg";
import topLeft from "../../assets/whatWeDo/topLeft.png";
import bottomRight from "../../assets/whatWeDo/botRight.png";

//TODO fix spacining
// -fix streaching
// - fix hero?

const breakpoints = 890;

export function WhatWeDo(){
    const [isMobile, setMobile] =  useState((window.innerWidth < breakpoints));
    React.useEffect(() => {
        /* Inside of a "useEffect" hook add an event listener that updates
           the "width" state variable when the window size changes */
        window.addEventListener("resize", () => setMobile(window.innerWidth < breakpoints));

    }, []);

    function Graphics(props) {
        const isMobile = props.isMobile;
        if (isMobile) {
            return (<></>);
        }
        return (
            <>
                <img src={corner} style={{position:"absolute", left: "31.85%", top: "-5.3%"}}/>
                <img src={circle} style={{position:"absolute", left: "42.8%", top: "45.9%"}}/>
                <img src={crescent} style={{position:"absolute", left: "63.93%", top: "13.4%",opacity:0.2}}/>
            </>
        );
    }

    // return (
    //   <div style={{flex:1, height:"fit-content"}} className="centerIt">
    //       <div style={{display: "flex", position:"relative", height:"fit-content"}}>
    //           {isMobile ?
    //               <img src={mobileBackground} style={{width:"100%", position:"absolute", height: 850}}/>
    //           : <img src={background} style={{width:"100%", position:"absolute", minHeight:'120%'}}/>}
    //           <Graphics isMobile={isMobile}/>
    //
    //           <div style={{paddingLeft:'2.8%', paddingTop:'2.25%', zIndex:'3'}}>
    //               <h2>What we do</h2>
    //               <div style={{display: "flex", flexWrap: "wrap", flexDirection: "row", marginTop:12, paddingRight:'2.8%', paddingBottom:'2.8%'}}>
    //                   <TextChunk isMobile={isMobile}/>
    //               </div>
    //           </div>
    //       </div>
    //   </div>
    // )

    return (
        <div className="centerIt" style={{display:'block', flexDirection:'column', position:'relative'}}>
            <div style={ {top: '-50%', display:"flex"}}>
                <div style ={{height: 100, width: 500, background:'#115074', borderRadius:'20px 20px 0 0'}}/>
                <div style ={{height: 100, position:'relative', width: 10, background:'#999999', borderRadius:'0 0 0 20px'}}>
                    <div style={{position:"absolute", left:0, bottom:0, width:10, height:10, }}/>
            </div>
            {/*<img style={{width:390}} src={topLeft}/>*/}
                <div style={{paddingLeft:'2.8%', position:'relative', zIndex:'3', background:'#115074',
                    borderRadius:'0 20px 0 20px'}}>
                    <h2>What we do</h2>
                    <div style={{display: "flex", flexWrap: "wrap", flexDirection: "row", marginTop:12, paddingRight:'2.8%', paddingBottom:'2.8%'}}>
                        <TextChunk isMobile={isMobile}/>
                    </div>
                </div>
                <img src={bottomRight} style={{width:390,display: 'block', position:'relative', marginRight:0, marginLeft:'auto'}}/>
        </div>
    )

    function TextChunk(props){
        return(
            <>
                <b1 style={{maxWidth:418, width:props.isMobile?'100%':'50%'}}>
                    {isMobile? <><br/></> : <></>}
                    CodeFluent’s mission is simple: tailored business applications, integrations, and
                    extensions that are built to extend the value and functionality of the SAP Platform.
                    <br/><br/>
                    Building upon a 25+ year relationship with SAP, the CodeFluent team is well versed
                    in Enterprise Business Applications and has worked with hundreds of reputable SAP customers.
                    Through years of SAP Systems integration experience, the CodeFluent team has recognized <br/>
                    opportunities for technology to further expand the value of SAP solutions.
                    {isMobile? <><br/><br/></> : <></>}
                </b1>
                <b1 style={{maxWidth:418, width:props.isMobile?'100%':'33%', marginLeft:props.isMobile?'0':"4.2%"}}>
                    With the advent of SAP’s Business Technology Platform (BTP), CodeFluent is now working
                    within the SAP BTP platform to build value-added solutions and integrations for the SAP
                    community.
                    <br/><br/>
                    As an SAP Gold Partner, CodeFluent is committed to building software that boosts
                    the ROI and flexibility of our customers’ SAP investments.
                </b1>
            </>
        )
    }
}