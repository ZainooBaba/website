import React, {useState} from 'react';
import './Capabilities.css';

import corner from "../../assets/corner2.svg";
import arrow1 from "../../assets/capabilities/arrows/Vector_1.svg";
import arrow2 from "../../assets/capabilities/arrows/Vector_2.svg";
import arrow3 from "../../assets/capabilities/arrows/Vector_3.svg";
import arrow4 from "../../assets/capabilities/arrows/Vector_4.svg";
import arrow5 from "../../assets/capabilities/arrows/Vector_5.svg";
import arrow6 from "../../assets/capabilities/arrows/Vector_6.svg";

import icon3 from "../../assets/capabilities/icons/icon_1.svg";
import icon4 from "../../assets/capabilities/icons/icon_2.svg";
import icon2 from "../../assets/capabilities/icons/icon_3.svg";
import icon1 from "../../assets/capabilities/icons/icon_4.svg";

import bckgrd from "../../assets/capabilities/arrows/bckgrd.svg";
import bkgPMob from "../../assets/capabilities/arrows/bkgPMob.svg";
import moon from "../../assets/capabilities/arrows/moon.svg";

const breakpoints = 700;



export function Capabilities() {
    const [isMobile, setMobile] =  useState((window.innerWidth < breakpoints));

    React.useEffect(() => {
        /* Inside of a "useEffect" hook add an event listener that updates
           the "width" state variable when the window size changes */
        window.addEventListener("resize", () => setMobile(window.innerWidth < breakpoints));

    }, []);
    return (
        <div style={{height:'300', width:'100%'}}>
            <h2 className={"headerText"}>Capabilities</h2>
            <div className="CapHolder">
                {isMobile? <MobileChartLeft/> : <LeftFlowChart/>}
                {isMobile? <MobileChartRight/> : <RightFlowChart/>}
            </div>
            {isMobile? <MobileFooter/> : <Footer2/>}
        </div>
    )
}

function LeftFlowChart() {
    return (
        <div style={{height: 500, width: 550, marginBottom: 40, position: 'relative', margin: '0 auto'}}>
            <BlueBox width={"99.85%"} height={"31.35%"} header={"SaaS Solutions"}
                     text={"Accelerator applications built to integrate and extend SAP's Source-to-Pay " +
                         "and Supply Chain solutions for industry specific verticals. Built on SAP BTP."}
            />
            <Arrow src={arrow1} left={'82.5%'} top={'30.7%'}/>
            <Extra left={'20%'} top={'23.8%'}/>

            <Arrow src={arrow2} left={'66%'} top={'48.6%'} zIndex={2}/>
            <WhiteBox width={'43%'} height={'26%'} left={'42%'} top={'29%'} zIndex={2}
                      header={"SaaS Solutions"} text={"SAP Ariba, Fieldglass and Concur"}/>

            <Arrow src={arrow3} left={'-0.3%'} top={'56.6%'}/>
            <Extra left={'43%'} top={'45.5%'}/>

            <WhiteBox width={'62.7%'} height={'25.7%'} left={'0%'} top={'45.7%'} zIndex={1}
                      header={"SaaS Solutions"} text={"SAP Intelligent Spend & Business Network"}/>
            <Extra left={'11.8%'} top={'63.7%'}/>

            <WhiteBox width={'58.5%'} height={'26%'} left={'25.7%'} top={'69.5%'} zIndex={2}
                      header={"SaaS Solutions"}
                      text={"SAP Supply Chain Collaboration and Planning"}/>

        </div>
    )
}

function RightFlowChart() {
    return (
        <div style={{height: 700, width: 520, position: 'relative', margin:'0 auto'}}>
            <BlueBox width={"100%"} height={"31.7%"} header={"BTP Consulting Services"}
                     text={"Experts in designing, developing, and deploying integrations and extensions to " +
                         "solve your unique business requirements and use cases."}
                     text2={
                         "We solve for functional 'white' spaces and product gaps to personalize your " +
                         "deployment while keeping the SAP Core clean."
                     }
            />
            <Extra left={'11.2%'} top={'22%'}/>
            <WhiteBox width={'68.7%'} height={'27.2%'} left={'25.2%'} top={'30.5%'} zIndex={2}
                      header={"Expert BTP Consulting"} text={"Connect"}
                      subtext={"Optimize your supply chain, reduce risk, eliminate errors, and foster " +
                          "collaboration using BTP Integration Suite."}/>
            <Extra left={'43%'} top={'50.5%'}/>
            <WhiteBox width={'77.5%'} height={'27%'} left={'-15.5%'} top={'48.6%'} zIndex={1}
                      header={"Expert BTP Consulting"} text={"Extend"}
                      subtext={"Drive efficiency across your organization and reduce internal friction, " +
                          "improve usability, and adoption using BTP Business Application Studio."}/>
            <Extra left={'6.5%'} top={'71%'}/>
            <WhiteBox width={'63.5%'} height={'26.8%'} left={'16%'} top={'74%'} zIndex={1}
                      header={"Expert BTP Consulting"} text={"AI/ML"}
                      subtext={"Enable intelligent decisionmaking and discover patterns to extract " +
                          "insights using RPA."}/>
            <Arrow src={arrow4} left={'16.6%'} top={'36.65%'}/>
            <Arrow src={arrow5} left={'59.4%'} top={'59.2%'}/>
            <Arrow src={arrow6} left={'6.8%'} top={'84.6%'}/>

        </div>
    )
}

function MobileChartLeft() {
    return(
        <div style={{height: 'fit-content', width: '100%', position: 'relative'}}>
            <BlueBox header={"SaaS Solutions"} classes={'mobileBox'}
                     text={"Accelerator applications built to integrate and extend SAP's Source-to-Pay " +
                         "and Supply Chain solutions for industry specific verticals. Built on SAP BTP."}
            />
            <WhiteBox classes={'mobileBox'}
                      header={"SaaS Solutions"} text={"SAP Ariba, Fieldglass and Concur"}/>
            <WhiteBox classes={'mobileBox'}
                      header={"SaaS Solutions"} text={"SAP Intelligent Spend & Business Network"}/>
            <WhiteBox classes={'mobileBox'}
                      header={"SaaS Solutions"}
                      text={"SAP Supply Chain Collaboration and Planning"}/>
        </div>
    )
}

function MobileChartRight() {
    return(
        <div style={{height: 'fit-content', width: '100%', position: 'relative'}}>
            <div style={{height:60}}/>
            <BlueBox classes={'mobileBox'} header={"BTP Consulting Services"}
                     text={"Experts in designing, developing, and deploying integrations and extensions to " +
                         "solve your unique business requirements and use cases."}
                     text2={
                         "We solve for functional 'white' spaces and product gaps to personalize your " +
                         "deployment while keeping the SAP Core clean."
                     }
            />
            <WhiteBox classes={'mobileBox'} header={"Expert BTP Consulting"} text={"Connect"}
                      subtext={"Optimize your supply chain, reduce risk, eliminate errors, and foster " +
                          "collaboration using BTP Integration Suite."}/>
            <WhiteBox classes={'mobileBox'} header={"Expert BTP Consulting"} text={"Extend"}
                      subtext={"Drive efficiency across your organization and reduce internal friction, " +
                          "improve usability, and adoption using BTP Business Application Studio."}/>
            <WhiteBox classes={'mobileBox'} header={"Expert BTP Consulting"} text={"AI/ML"}
                      subtext={"Enable intelligent decisionmaking and discover patterns to extract " +
                          "insights using RPA."}/>


        </div>
    )
}

function BlueBox(props) {
    return (
        <div className={'blueBox ' + props.classes} style={{width: props.width, height: props.height}}>
            <img src={corner} style={{position: "absolute", right: '-17px', top: "-21px"}}/>
            <div style={{padding: 25}}>
                <h5 style={{margin: 0, marginBottom: 0, color: 'white'}}>{props.header}</h5>
                <b1 style={{marginTop: '2%'}}>{props.text}</b1>
                <b1 style={{marginTop: '2%'}}>{props.text2}</b1>
            </div>
        </div>
    )
}

function WhiteBox(props) {
    return (
        <div className={'whiteBox ' + props.classes} style={{
            width: props.width, height: props.height,
            left: props.left, top: props.top, zIndex: props.zIndex
        }}>
            <div style={{padding: 25, height: '100%'}}>
                <cap>{props.header}</cap>
                <h6 className={"text"} style={{marginBottom: 16, marginTop: 16}}>{props.text}</h6>
                <b1 className={"text"}>{props.subtext}</b1>
            </div>
        </div>
    )
}

function Extra(props) {
    return (
        <div className={'whiteBox'} style={{
            width: '30%', height: '15%',
            left: props.left, top: props.top, zIndex: -1, borderRadius: 20
        }}/>
    )
}

function Arrow(props) {
    return (
        <img src={props.src} alt={"hero"} style={{
            zIndex: props.zIndex ? props.zIndex : 3, position: 'absolute', left: props.left, top: props.top
            , opacity: 0.2
        }}/>
    )
}


function Footer2() {
    return (
        <div className={'footer-container'}>
            <div style={{top:10,width: '21.5%',position: "absolute", left:"20.5%"}}>
                <h4 className={"text"}>
                    Design Principles
                </h4>
            </div>
            <div style={{display: 'flex', justifyContent:'space-around', width: '100%', alignItems:'flex-end', flexWrap:'wrap'}}>
                <IconBox2 src={icon1} text={"Built on SAP BTP Platform"} />
                <IconBox2 src={icon2} text={"Industry-Specific Accelerators"} />
                <IconBox2 src={icon3} text={"Mobile-First Approach"} />
                <IconBox2 src={icon4} text={"Cloud & Edge Solutions"} />
            </div>
            <img src={bckgrd} alt={"hero"} style={{  minHeight: 312, left:0, top:0,width:'100%',height:'100%',position:'absolute', zIndex:-1}}/>
        </div>
    )
}

function MobileFooter() {
    return (
        <div className='mobile-footer'>
            <div style={{top:10,width: '50%',position: "absolute", left:"20%"}}>
                <h4 className={"text"}>
                    Design Principles
                </h4>
            </div>
                <div style={{display: 'flex', justifyContent:'space-around', width: '100%', alignItems:'flex-end', flexWrap:'wrap'}}>
                    <IconBox2 src={icon1} text={"Built on SAP BTP Platform"} />
                    <IconBox2 src={icon2} text={"Industry-Specific Accelerators"} />
                    <IconBox2 src={icon3} text={"Mobile-First Approach"} />
                    <IconBox2 src={icon4} text={"Cloud & Edge Solutions"} />
                </div>
            <img src={bkgPMob} alt={"hero"} style={{  minHeight: 312, left:0, top:0,width:'100%',height:'105%',position:'absolute', zIndex:-1}}/>
        </div>
    )
}

function IconBox2(props) {
    return(
        <div className='IconBox' style={{ alignContent: 'center', display:'flex',justifyContent:'flex-end', width: 230,height: 200,flexDirection:'column'}}>
            <div>
                <img className='Icon' src={props.src} alt={"hero"}/>
            </div>
            <s1 style={{textAlign:'center',marginTop:props.marg}}>{props.text}</s1>
        </div>
    )
}