import React from 'react';
import './AboutUs.css';
import bkgrd from "../../assets/about-us/bkgrd.svg";
import line from "../../assets/about-us/line.svg";

function AboutUsTop() {
    return (
        <div className="flex-container about-us-top-container">
            <div className="about-us-col1">
                <img src={bkgrd} alt={"About Us"} className="AboutUsImg" border={0}/>
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
    )
}

function AboutUsBottom() {
    return (
        <div className="flex-container about-us-tiles">
            <NumberSpacer number={1} />
            <div className="about-us-tile">
                <div>
                    <h6 className="text">Start</h6>
                    <b1 className="text">Our journey with SAP started with eProcurement in the late 1990’s</b1>
                </div>
            </div>
            <NumberSpacer number={2} />
            <div className="about-us-tile">
                <div>
                    <h6 className="text">Consulting Journey</h6>
                    <b1 className="text">In the ensuing 25 years, we implemented Supply Chain solutions at over 150+ Fortune 1000 companies, and created an award winning Source-2-Pay consulting company, Nitor Partners.</b1>
                </div>
            </div>
            <NumberSpacer number={3} />
            <div className="about-us-tile">
                <div>
                    <h6 className="text">SaaS Success</h6>
                    <b1 className="text">Switching from consulting to SaaS: we launched BuyerQuest - an eProcurement SaaS solution. Designed for with a B2C focus and fully integrated with SAP-Ariba, it is the #1 mid-market Procure-2-Pay solution, with global deployments at marquee clients, including McDonalds, BASF, KimberlyClark, Saudi Aramco, Disney, and Chick-fil-A</b1>
                </div>
            </div>
            <NumberSpacer number={4} />
            <div className="about-us-tile">
                <div>
                    <h6 className="text">Today</h6>
                    <b1 className="text">Combining our consulting DNA with SaaS expertise, Code Fluent emerges to accelerate the effectiveness, connectedness and visibility of supply chains of SAP’s customer base.</b1>
                </div>
            </div>
        </div>
    )
}

function NumberSpacer(props) {
    return (
        <div className={'numberSpacer'}>
        <div className={'spacerLine'}>
        </div>
            <div className={'numberSpacerText'}>
                <s2>{props.number}</s2>
            </div>
        </div>
    )
}


export function AboutUs () {
    return (
        <div>
            <AboutUsTop />
            <div className="about-us-line" style={{backgroundImage: `url(${line})`}}/>
            <AboutUsBottom />
        </div>
    )
}
