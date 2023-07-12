import React from "react";
import "./ContactUs.css";
import { PrimaryButton, TextPrompt, ParagraphPrompt } from "../Components/utils.js";

export function Form(props) {
    return (
        <div className='form'>
            <h4>Let's talk about extending <br/>
                the value of SAP
            </h4>
            <div className="flex-container" style={{display: "flex"}}>
                <TextPrompt placeholder={"Your Name"} style={{flex:1}}/>
                <TextPrompt placeholder={"Email"} style={{flex:1}}/>
            </div>
            <ParagraphPrompt placeholder={"Type Here"}/>
            {/*TODO FIND BETTER WAY TO ALIGN BUTTON TO THE LEFT*/}
            <div style={{textAlign: 'right'}}>
                <PrimaryButton text={"Send"} style={{width:151, textAlign: 'right'}}/>
            </div>
            <div className="flex-container" style={{display: "flex",flexDirection: "row-reverse",marginTop:'20px'}}>
                <s2 style={{textAlign: 'right'}}>2023</s2>
                <s2 style={{textAlign: 'right'}}>All Rights Reserved</s2>
            </div>
        </div>
    )
}
function sendMessage(name, email, message) {
    alert("Message Sent")
}