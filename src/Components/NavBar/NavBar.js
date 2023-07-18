import React from "react";
import {click} from "@testing-library/user-event/dist/click";
import './NavBar.css'
import logo from '../../assets/Logo.svg';
import { Link, animateScroll as scroll } from "react-scroll";


export function NavBar(props) {

    function NavItem(props) {
        return (
            <li className="nav-item" >
                <Link to={props.text} smooth={true}>
                <s2 className="nav-links" style={props.style}>
                    {props.text}
                </s2>
                </Link>
            </li>
        )
    }

    return (
        <>
            <nav className="navbar">
                <div className="nav-container" style={{display:'flex', height:50}}>
                    {/*<div style={{minWidth:'8.5%'}}/>*/}
                    <div style={{flex:1, height:50}}/>
                    <div style={{position:"relative", width:639, height:50}}>
                        <img src={logo} alt="Logo" style={{height:52, position: 'absolute', left:24}}/>
                    </div>
                    {/*<div style={{flex:1}}/>*/}
                    <div style={{position:"relative", width:592, height:50}}>
                        <div style={{width:900,position: "absolute", right:0, height:50}}>
                    <ul className={click ? "nav-menu active" : "nav-menu"} style={{right:14, position: "absolute", top:'-40%'}}>
                        <NavItem text="Home" />
                        <NavItem text="What we do" />
                        <NavItem text="Cababilities" />
                        <NavItem text="Differentators" />
                        <NavItem text="About us" />
                        <NavItem text="Partners" />
                        <NavItem text="Contact us" />
                    </ul>
                        </div>
                    </div>
                    <div style={{flex:1, hieght:50}}/>
                    {/*<div style={{minWidth:'8.5%'}}/>*/}
                </div>
            </nav>
        </>
    )
}