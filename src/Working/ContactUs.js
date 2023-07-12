import React, {useState} from "react";
import "./ContactUs.css";
import "../Components/utils.css";
import emailjs from '@emailjs/browser';


export function Form(props) {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };

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
                        onClick={sendEmail} value="Send">
                </input>
            </div>
            <div className="flex-container" style={{display: "flex",flexDirection: "row-reverse",marginTop:'20px'}}>
                <s2 style={{textAlign: 'right'}}>2023</s2>
                <s2 style={{textAlign: 'right'}}>All Rights Reserved</s2>
            </div>
        </div>
    )
}
function sendMessage(name, email, message) {
    alert("Message Sent name: " + name + " email: " + email + " message: " + message + "!");
    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
}
