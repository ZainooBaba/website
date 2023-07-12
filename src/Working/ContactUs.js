import React, {useState} from "react";
import "./ContactUs.css";
import "../Components/utils.css";
import * as emailjs from "emailjs-com";

let API_KEY = "XeTlitGZtOpL_io5X";
export function Form(props) {



    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    return (
        <div className='form'>
            <h4>Let's talk about extending <br/>
                the value of SAP
            </h4>
            <div className="flex-container" style={{display: "flex"}}>
                <input value={name} type="text" className={'textPrompt'} placeholder={"Your Name"} style={{flex:1}}
                       onInput={e => setName(e.target.value)}/>
                <input value={email} type="text" className={'textPrompt'} placeholder={"Email"} style={{flex:1}}
                       onInput={e => setEmail(e.target.value)}/>
            </div>
            <div className="wrapper">
                <textarea cols={4} className={'paragraphPrompt'} placeholder={"Type Here"} value={message}
                onInput={e => setMessage(e.target.value)}/>
            </div>
            {/*TODO FIND BETTER WAY TO ALIGN BUTTON TO THE LEFT*/}
            <div style={{textAlign: 'right'}}>
                <input type="button" className={'PrimaryButton'} style={{width:151, textAlign: 'right'}}
                        onClick={() => sendMessage(name,email,message)} value="Send"/>
            </div>
            <div className="flex-container" style={{display: "flex",flexDirection: "row-reverse",marginTop:'20px'}}>
                <s2 style={{textAlign: 'right'}}>2023</s2>
                <s2 style={{textAlign: 'right'}}>All Rights Reserved</s2>
            </div>
        </div>
    )
}
function sendMessage(name, email, message) {
    var templateParams = {
        name: name,
        email: email,
        message: message
    }
    alert("Message Sent name: " + name + " email: " + email + " message: " + message + "!");
    emailjs.send('service_daqjvap', 'template_b5mpvfs', templateParams, API_KEY)
        .then(function(response) {
            console.log('SUCCESS!', response.status, response.text);
        }, function(error) {
            console.log('FAILED...', error);
        });
}
