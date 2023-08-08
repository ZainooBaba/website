import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import './Partners.css';

import SAP from "../../assets/partners/SAP.svg";
import BizBrain from "../../assets/partners/BizBrain.svg";
import Nitor from "../../assets/partners/Nitor.svg";
import Google from "../../assets/partners/Google.svg";

import backdrop from "../../assets/partner_backdrop.svg";
import { useState, useMediaQuery } from "react";



const PARTNERS = [
    ["SAP", SAP],
    ["Nitor Partners", Nitor],
    ["BizBrain", BizBrain],
    ["Microsoft", Google]
]

function Partner(props) {
    return (
        <div className={'partner'}>
            <img src={PARTNERS[props.index][1]} alt={PARTNERS[props.index][0]} className={'partnerImage'}/>
            <h4 className={'partnerText'}>{PARTNERS[props.index][0]}</h4>
        </div>
    )
}

export function Partners() {

        const breakpoints = [570, 900, 1201];
        const [amountOfSlides, setSlideAmount] =  useState(getSlideAmount());

    function getSlideAmount() {
        var width = window.innerWidth;
        if(width < breakpoints[0]) return 1;
        if(width < breakpoints[1]) return 2;
        if(width < breakpoints[2]) return 3;
        return 4;
    }

    React.useEffect(() => {
            /* Inside of a "useEffect" hook add an event listener that updates
               the "width" state variable when the window size changes */
            window.addEventListener("resize", () => setSlideAmount(getSlideAmount()));

        }, []);



        return (
            <div className={"partnerContainer"}>
                <img src={backdrop} className={"backdrop"} alt={"bababui"}/>
                <div className={"partnerContentContainer"}>
                    <h2 className={'partnerText'} style={{marginBottom:"11px"}}>Partners</h2>
                    <div className='sliderContainer'>
                        {/*{this.renderArrows()}*/}
                        <Slider dots={false}
                                infinite={true}
                                slidesPerRow={amountOfSlides}
                                // arrows={false}
                                className={"slider"}
                                useTransform={false}
                                // ref={c => (this.slider = c)}
                        >
                            <div className={"sliderCard"}><Partner index={0}/></div>
                            <div className={"sliderCard"}><Partner index={1}/></div>
                            <div className={"sliderCard"}><Partner index={2}/></div>
                            <div className={"sliderCard"}><Partner index={3}/></div>
                        </Slider>
                    </div>
                    {/*<div/>*/}
                </div>
            </div>
        );
}

