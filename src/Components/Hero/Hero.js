import React, {useState} from "react";
import './Hero.css'
import '../utils.css'
import hero1 from '../../resourses/hero1.png'

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
    function HeroText() {
        const [count, setCount] = useState(0);
        if(count == 0) {
            return (
                <div className={'container Cont'}>
                    <h1 className={'headtext'}>{headerText[count]}</h1>
                    <h4 className={'subtext'}>{subText[count]}</h4>
                    <input type={"button"} className={"SecondaryButton actionButton"} value={"Let’s discuss"}/>
                </div>
            )
        }
    }

    function HeroImage() {
        return (
            <div className={'Cont'}>
                <img src={hero1} alt={"hero"} className={'heroImage'}/>
            </div>
        )
    }

    return (
        <div className={'hero'}>
            <div style={{flex:1}}/>
            <HeroText/>
            <HeroImage/>
            <div style={{flex:1}}/>
        </div>
    )

}

