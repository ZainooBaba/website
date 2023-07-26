import React from "react";
import './Hero.css'
import '../utils.css'
import hero1 from '../../assets/hero/hero1.png'
import hero2 from '../../assets/hero/hero3.png'
import hero3 from '../../assets/hero/hero2.png'

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

export class Hero extends React.Component {
    state = {
        activeSlide: 0,
    };

    render() {
        const HeroText1 =
            <div className={'container Cont'}>
                <h1 className={'headtext'}>{headerText[0]}</h1>
                <h4 className={'subtext'}>{subText[0]}</h4>
                {/*{count}*/}
                <a className={"SecondaryButton actionButton"} href="#" >{"Let’s discuss"}</a>
            </div>

        const HeroText2 =
            <div className={'container Cont'}>
                <h1 className={'headtext'}>{headerText[1]}</h1>
                <h4 className={'subtext2'}>{subText[1]}</h4>
                {/*{count}*/}
                <a className={"SecondaryButton actionButton"} href="#" >{"Let’s discuss"}</a>
            </div>

        const HeroText3 =
            <div className={'container Cont'}>
                <div style={{display: 'flex', alignContent: 'flex-end'}}>
                    <div style={{width: '52.5%'}}>
                        <h1 className={'headtext3'}>{headerText[2]}</h1>
                        <div className={"spacer"}/>
                    </div>
                    <div className={'subtext3'}>
                        <h4 className={'subtext32'}>{subText[2]}</h4>
                    </div>
                </div>
                {/*{count}*/}
                <a className={"SecondaryButton actionButton"} href="#" >{"Let’s discuss"}</a>
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
            <div className={'Cont'}>
                <Slider dots={true}
                        infinite={true}
                        slidesPerRow={1}
                        className={"heroImage"}
                        useTransform={false}
                        // autoplaySpeed={500}
                        autoplay={true}
                        focusOnSelect={false}
                        afterChange={current => this.setState({activeSlide: current})}
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
            <div className={'hero'}>
                <div style={{flex: 1}}/>
                <HeroText/>
                {HeroImage}
                <div style={{flex: 1}}/>
            </div>
        )
    }
}

