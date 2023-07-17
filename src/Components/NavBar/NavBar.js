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
                <div className="nav-container">
                    <div style={{minWidth:'8.5%'}}/>
                    <img src={logo} alt="Logo" style={{height:52, margin:16}}/>
                    <div style={{flex:1}}/>
                    <ul className={click ? "nav-menu active" : "nav-menu"}>
                        <NavItem text="Home" />
                        <NavItem text="What we do" />
                        <NavItem text="Cababilities" />
                        <NavItem text="Differentators" />
                        <NavItem text="About us" />
                        <NavItem text="Partners" />
                        <NavItem text="Contact us" />
                    </ul>
                    <div style={{minWidth:'8.5%'}}/>
                </div>
            </nav>
        </>
    )
}