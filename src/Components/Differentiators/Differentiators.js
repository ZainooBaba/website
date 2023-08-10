import React, {useState} from 'react';
import './Differentiators.css';

import background from '../../assets/diff/bckGrnd.svg';
import line from '../../assets/diff/whiteLine.svg';

export function Differentiators() {
    const breakpoints = 770;
    const [isMobile, setMobile] =  useState((window.innerWidth < breakpoints));

    React.useEffect(() => {
        /* Inside of a "useEffect" hook add an event listener that updates
           the "width" state variable when the window size changes */
        window.addEventListener("resize", () => setMobile(window.innerWidth < breakpoints));

    }, []);
    return (
        <div style={{height: '100', width: '100%'}}>
            <h2 className={"text"} style={{marginBottom: 25}}>Differentiators</h2>
            {isMobile ? <MobileSHIBAL/> : <DestopSHIBAL/>}
        </div>
    )
}

function MobileSHIBAL(){
    return(
        <div style={{position: "relative", width: '100%', height: 'auto'}}>
            <div className={"backdroper"}>
                <TextBox2 title={"Proven SaaS capabilities"}
                          text2={"Enterprise SaaS created include BuyerQuest -- No1 mid-market eProcurement solution*"}
                          number={"1"}/>
                <div style={{width: '93%', height: 1, background: '#BDE7FF'}}/>
                <TextBox2 title={"20 Years"}
                          text2={"as an SAP Partner with a deep understanding of the SAP ecosystem"}
                          number={"20"}/>
                <div style={{width: '93%', height: 1, background: '#BDE7FF'}}/>
                <TextBox2 title={"25 years of consulting"}
                          text={"Services with a successful track record advising, implementing, and providing " +
                              "change management services"}
                          text2={"Successfully implementing SAP solutions for hundreds of enterprise organizations"}
                          number={"25"}/>
            </div>
            <div className={"colorFill"}> hello</div>
        </div>
    )
}
function DestopSHIBAL() {
    return(
        <div style={{position: "relative", width: '100%', height: 400}}>
        <img src={background} style={{position: "absolute", top: 0, left: 0, height: '100%', width: '100%'}}/>
            <div className={"dif-container TEXTHOLDER"} style={{
                right: '0.1%',
                top: "21.6%",
                width: "97.7%",
                alignItems: 'flex-start'
            }}>
                <TextBox title={"Proven SaaS capabilities"}
                         text2={"Enterprise SaaS created include BuyerQuest -- No1 mid-market eProcurement solution*"}/>
                <Spacer/>
                <TextBox title={"20 Years"}
                         text2={"as an SAP Partner with a deep understanding of the SAP ecosystem"}/>
                <Spacer/>
                <TextBox title={"25 years of consulting"}
                         text={"Services with a successful track record advising, implementing, and providing " +
                             "change management services"}
                         text2={"Successfully implementing SAP solutions for hundreds of enterprise organizations"}
                />
            </div>
            <div className={"dif-container LINE"} style={{top: "-3%"}}>
                <div className={"blocker"} style={{zIndex: 5}}/>
                <img src={line} style={{zIndex: 7}}/>
                <div className={"blocker"} style={{zIndex: 3}}/>
                <img src={line} style={{zIndex: 7}}/>
                <div className={"blocker"} style={{zIndex: 1}}/>
            </div>
            <div className={"dif-container NUMBER"} style={{left: '0%', top: "-7.7%",}}>
                <h1 className={"bigNumber"} style={{zIndex: 6}}>1</h1>
                <Spacer/>
                <h1 className={"bigNumber shifted"} style={{zIndex: 4}}>20</h1>
                <Spacer/>
                <h1 className={"bigNumber shifted"} style={{zIndex: 2}}>25</h1>
            </div>
        </div>
    )
}

function TextBox(props) {
    return (
        <div style={{zIndex: 8, flex: 1, textAlign: 'left', color: 'white', justifyContent: 'center', display: "flex"}}>
            <div style={{maxWidth: 242, width: '100%'}}>
                <h6 className={"description"}>{props.title}</h6>
                <b1 className={"subText description"}>{props.text}</b1>
                <b1 className={"subText description"}>{props.text2}</b1>
            </div>
        </div>
    )
}

function TextBox2(props) {
    return (
        <div style={{minHeight:280,zIndex: 8, flex: 1, position:"relative", textAlign: 'left', alignItems:'center', color: 'white', justifyContent: 'left', display: "flex",
            borderColor: "red"}}>
            <div style={{width: '80%', height:'fit-content'}}>
                <h6 className={"description"}>{props.title}</h6>
                <b1 className={"subText description"}>{props.text}</b1>
                <b1 className={"subText description"}>{props.text2}</b1>
            </div>
            <h1 className={"bigNumber"} style={{zIndex: -1, position: "absolute", left:'7%'}}>{props.number}</h1>
        </div>
    )
}

function Spacer() {
    return (
        <div style={{width: 1, height: 1}}/>
    )
}
