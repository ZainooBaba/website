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

export class Partners extends React.Component {
    // function SamplePrevArrow(props) {
    //     const {className, style, onClick} = props;
    //     return (
    //         <div>
    //             <img src={leftArrow} alt={"arrow"} className={"arrow arrow-btn next"}
    //                  onClick={() => this.slider.slickNext()}
    //                      />
    //         </div>
    //     );
    // }

    renderArrows = () => {
        return (
            <div className="slider-arrow">
                <button
                    className="arrow-btn prev"
                    onClick={() => this.slider.slickPrev()}
                >
                    hello
                </button>
                <button
                    className="arrow-btn next"
                    onClick={() => this.slider.slickNext()}
                >
                    byeeeee
                </button>
            </div>
        );
    };


    render() {
        return (
            <div className={"partnerContainer"}>
                <img src={backdrop} className={"backdrop"} alt={"bababui"}/>
                <div className={"partnerContentContainer"}>
                    <h2 className={'partnerText'} style={{marginBottom:"11px"}}>Partners</h2>
                    <div className='sliderContainer'>
                        {/*{this.renderArrows()}*/}
                        <Slider dots={false}
                                infinite={true}
                                slidesPerRow={4}
                                // arrows={false}
                                className={"slider"}
                                useTransform={false}
                                ref={c => (this.slider = c)}
                        >
                            <div className={"sliderCard"}><Partner index={0}/></div>
                            <div className={"sliderCard"}><Partner index={1}/></div>
                            <div className={"sliderCard"}><Partner index={2}/></div>
                            <div className={"sliderCard"}><Partner index={3}/></div>
                            <div className={"sliderCard"}><Partner index={2}/></div>
                            <div className={"sliderCard"}><Partner index={1}/></div>
                            <div className={"sliderCard"}><Partner index={1}/></div>
                        </Slider>
                    </div>
                    {/*<div/>*/}
                </div>
            </div>
        );
    }
}

