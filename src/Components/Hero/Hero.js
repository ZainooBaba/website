import React from "react";
import './Hero.css'
import '../utils.css'
import hero1 from '../../assets/hero/hero1.png'
import hero2 from '../../assets/hero/hero3.png'
import hero3 from '../../assets/hero/hero2.png'

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { Link } from "react-scroll";

const headerText = [
    "Maximize your SAP solution",
    "Articulate SaaS solutions",
    "Orchestrate & Integrate"
]

const subText = [
    "Accelerate your Digital Transformation",
    "Supply chain and Procurement expertise meets enterprise development",
    "This might improve your supply chain\n" +
    "for sure"
]

function LetsDiscuss() {
  return (<Link to="footer" smooth={true} className={"SecondaryButton actionButton pointer"}>{"Let’s discuss"}</Link>);
}

export class Hero extends React.Component {
    state = {
        activeSlide: 0,
    };

    render() {
        const HeroText1 =
            <div className={'container'}>
                <h1 className={'headtext'}>{headerText[0]}</h1>
                <h4 className={'subtext'}>{subText[0]}</h4>
                {/*{count}*/}
                <LetsDiscuss />
            </div>

        const HeroText2 =
            <div className={'container'}>
                <h1 className={'headtext'}>{headerText[1]}</h1>
                <h4 className={'subtext2'}>{subText[1]}</h4>
                {/*{count}*/}
                <LetsDiscuss />
            </div>

        const HeroText3 =
            <div className={'container'}>
                <h1 className={'headtext'}>{headerText[2]}</h1>
                <h4 className={'subtext2'}>{subText[2]}</h4>
                {/*{count}*/}
                <LetsDiscuss />
            </div>


        const HeroText = () => {

            switch (this.state.activeSlide) {
                case 0:
                    return HeroText1;
                case 1:
                    return HeroText2;
                case 2:
                    return HeroText3;
            }
        };



        const HeroImage =
            <div className="heroImageContainer">
                <Slider dots={true}
                        infinite={true}
                        slidesPerRow={1}
                        className={"heroImage"}
                        useTransform={false}
                        // autoplaySpeed={500}
                        autoplay={true}
                        focusOnSelect={false}
                        beforeChange={(current, next) =>
                            setTimeout(() => {  this.setState({activeSlide: next}); }, 150)
                           }
                        appendDots={ dots => <ul className={"babab"}>{dots}</ul>}
                        customPaging={ i => (
                    <div className="ft-slick__dots--custom">
                        <div className="loading" />
                    </div>
                    )}
                >
                    <div className={"sliderCard"}>
                        <img src={hero1} alt={"hero"} className={'heroImage'}/>
                    </div>
                    <div className={"sliderCard"}>
                        <img src={hero2} alt={"hero"} className={'heroImage'}/>
                    </div>
                    <div className={"sliderCard"}>
                        <img src={hero3} alt={"hero"} className={'heroImage'}/>
                    </div>
                </Slider>
            </div>

        return (
            <div className="hero flex-container" style={{flexDirection:'row-reverse', alignItems: 'flex-start'}}>
              <div className="halver" style={{height:'350px'}}>
                  {HeroImage}
              </div>
              <div className="halver">
                  <HeroText/>
              </div>
            </div>
        )
    }
}

