import React from "react";
import {click} from "@testing-library/user-event/dist/click";
import './NavBar.css'
import logo from '../../assets/Logo.svg';
import {Link} from "react-scroll";

import hamburgerOpen from '../../assets/NavBar/open.svg';
import hamburgerClose from '../../assets/NavBar/close.svg';


export function NavBar(props) {

    const [hamOpen, setHamOpen] = React.useState(false);

    function NavItem(props) {
        return (
            <li className="nav-item" style={props.style}>
                <Link to={props.toID ? props.toID : props.text} smooth={true}>
                    <s2 className="nav-links">
                        {props.text}
                    </s2>
                </Link>
            </li>
        )
    }

    function HamItem(props) {
        return (
            <li className="ham-item">
                <Link to={props.toID ? props.toID : props.text} smooth={true} onClick={closeMenu}>
                    <s2 className="ham-links" style={props.style}>
                        {props.text}
                    </s2>
                </Link>
            </li>
        )
    }

    function closeMenu() {
        setHamOpen(false);
    }

    function TabMenu(){
        return(
                <div className="tabMenu">
                    <ul className={click ? "nav-menu active" : "nav-menu"}
                        style={{position: "absolute", top: '-40%',right:-14}}>
                        <NavItem text="What we do" toID={"WhatWeDo"}/>
                        <NavItem text="Capabilities"/>
                        <NavItem text="Differentiators"/>
                        <NavItem text="About us" toID={"AboutUs"}/>
                        <NavItem text="Partners"/>
                        <NavItem text="Careers"/>
                        <NavItem text="Contact us" toID={"footer"}/>
                    </ul>
                </div>
        )
    }

    function openMenu(){
        setHamOpen(!hamOpen);
    }
    function Hamburger(props) {
        return (
            <div className="hamburger" onClick={openMenu}>
                <img src={hamOpen? hamburgerOpen:hamburgerClose} className={hamOpen? "hamImage open": "hamImage"}/>
                    <ul style={{display: hamOpen? "flex" : "none"}} className={click ? "ham-menu active" : "ham-menu"}>
                    <HamItem text="What we do" toID={"WhatWeDo"}/>
                    <HamItem text="Capabilities"/>
                    <HamItem text="Differentiators"/>
                    <HamItem text="About us" toID={"AboutUs"}/>
                    <HamItem text="Partners"/>
                    <HamItem text="Careers"/>
                    <HamItem text="Contact us" toID={"footer"}/>
                    </ul>
            </div>
        )
    }

    function Menu(){
        return(
            <div style={{position: "absolute", right:0, width: 592, height: 50}}>
                <TabMenu/>
                <Hamburger/>
            </div>
        )
    }

    return (
            <nav className="navbar">
                <div className="nav-container" style={{display: 'flex', height: 50, position:"relative"}}>
                    <img src={logo} alt="Logo" style={{height: 52, position: 'absolute', left: -10}}/>
                    <Menu/>
                </div>
            </nav>
    )
}