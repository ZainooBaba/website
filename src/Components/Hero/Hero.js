import React, {useState} from "react";
import './Hero.css'
import '../utils.css'
import hero1 from '../../assets/hero1.png'
import hero2 from '../../assets/hero2.png'
import hero3 from '../../assets/hero3.png'

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const headerText = [
    "Maximize your SAP solution",
    "Articulate SaaS solutions",
    "Orchestrate Integrate Discover"
]

const subText = [
    "Accelerate your Digital Transformation",
    "Supply chain and Procurement expertise meets enterprise development",
    "...your supply chain"
]

export function Hero() {
    const [count, setCount] = useState(0);

    function HeroText() {
            return (
                <div className={'container Cont'}>
                    {/*<h1 className={'headtext'}>{headerText[count]}</h1>*/}
                    {/*<h4 className={'subtext'}>{subText[count]}</h4>*/}
                    {/*{count}*/}
                    {/*<input type={"button"} className={"SecondaryButton actionButton"} value={"Let’s discuss"}/>*/}
                </div>
            )
    }

    function HeroImage(props) {
        return (
            <div className={'Cont'}>
                <Slider dots={true}
                        infinite={true}
                        slidesPerRow={1}
                        className={"heroImage"}
                        useTransform={false}
                        autoplaySpeed={500}
                        autoplay={true}
                        beforeChange={(current, next) => console.log(`onSwipe ${current} -> ${next}`)}
                        // afterChange={current => setCount(current)}
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
        )
    }

    return (
        <div className={'hero'}>
            <div style={{flex: 1}}/>
            <HeroText/>
            <HeroImage/>
            <div style={{flex: 1}}/>
        </div>
    )

}

