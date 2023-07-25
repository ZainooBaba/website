import React from 'react';
import './Differentators.css';

import background from '../../assets/diff/bckGrnd.svg';
import line from '../../assets/diff/whiteLine.svg';

export function Differentators() {
    return (
        <div style={{display: "flex", height: '400px'}}>
            <div className='bufferSizeZone' />
            <div style={{flex: 1, height: '400px', position: "relative"}}>
                <h2 className={"text"} style={{marginBottom:25}}>Differentiators</h2>
                <div style={{position: "relative"}}>
                <img src={background}/>
                <div className={"dif-container"} style={{top: "-3%"}}>
                    <div className={"blocker"} style={{zIndex: 5}}/>
                    <img src={line} style={{zIndex: 7}}/>
                    <div className={"blocker"} style={{zIndex: 3}}/>
                    <img src={line} style={{zIndex: 7}}/>
                    <div className={"blocker"} style={{zIndex: 1}}/>
                </div>
                <div className={"dif-container"} style={{left: '0%', top: "-7.7%",}}>
                    <h1 className={"bigNumber"} style={{zIndex: 6}}>1</h1>
                    <Spacer/>
                    <h1 className={"bigNumber shifted"} style={{zIndex: 4}}>20</h1>
                    <Spacer/>
                    <h1 className={"bigNumber shifted"} style={{zIndex: 2}}>25</h1>
                </div>
                <div className={"dif-container"} style={{
                    right: '0.1%',
                    top: "21.6%",
                    width: "97.7%",
                    alignItems: 'flex-start'
                }}>
                    <TextBox title={"Proven SaaS capabilities"}
                             text2={"Enterprise SaaS created include BuyerQuest -- No1 mid-market eProcurement solution*"}/>
                    <Spacer/>
                    <TextBox title={"20 Years"}
                             text2={"as a  Premier SAP partner with a deep understanding of the SAP ecosystem"}/>
                    <Spacer/>
                    <TextBox title={"25 years of consulting"}
                             text={"Services with a successful track record advising, implementing, and providing " +
                                 "change management services"}
                             text2={"Successfully implementing SAP solutions for hundreds of (global) organizations"}
                    />
                </div>
            </div>
            </div>
            <div className='bufferSizeZone' />
        </div>
    )
}

function TextBox(props) {
    return (
        <div style={{zIndex: 8, flex: 1, textAlign: 'left', color: 'white', justifyContent: 'center', display: "flex"}}>
            <div style={{width: "64%"}}>
                <h6 className={"description"}>{props.title}</h6>
                <b1 className={"description"}>{props.text}</b1>
                <b1 className={"subText description"}>{props.text2}</b1>
            </div>
        </div>
    )
}

function Spacer() {
    return (
        <div style={{width: 1, height: 1}}/>
    )
}