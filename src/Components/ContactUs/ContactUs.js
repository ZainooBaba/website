import React, {useState} from "react";
import "./ContactUs.css";
import "../utils.css";
import * as emailjs from "emailjs-com";

import iconFacebook from "../../assets/icon_facebook.svg";
import iconTwitter from "../../assets/icon_twitter.svg";
import iconLinkedin from "../../assets/icon_linkedin.svg";

const API_KEY = "XeTlitGZtOpL_io5X";
export function Form(props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  function sendMessage(name, email, message) {
    var templateParams = {
      name: name,
      email: email,
      message: message
    }
    emailjs.send('service_daqjvap', 'template_b5mpvfs', templateParams, API_KEY)
      .then(function(response) {
        console.log('SUCCESS!', response.status, response.text);
      }, function(error) {
        console.log('FAILED...', error);
      });
  }

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

export function Contacts(props) {
  return (
    <div className='contactUs'>
      <h6>Phone</h6>
      <b1>+1 216 798 7336<br/><br/></b1>
      <h6>Email</h6>
      <b1>info@codefluent.com<br/><br/></b1>
      <h6>Corporate Headquarters</h6>
      <b1>10 Martingale Road, Suite 400, Schaumburg, IL 60173<br/><br/></b1>

      <div style={{height:'40px'}}></div>

      <div className="social-media" style={{display: "flex", flexDirection: "row", marginTop:'20px'}}>
        <a href="#" target="_blank"><img src={iconLinkedin} border="0" alt="" width="24" height="24"/></a>
        <a href="#" target="_blank"><img src={iconFacebook} border="0" alt="" width="24" height="24"/></a>
        <a href="#" target="_blank"><img src={iconTwitter} border="0"  alt="" width="24" height="24"/></a>
      </div>
    </div>
  )
}

export default function ContactUs(props) {
  return (
    <div style={{display: "flex", position:"relative"}}>
      {/*<div className='bufferSizeZone' />*/}
      <div style={{width: "100%"}}>

        <div className="centerIt">
          <div style={{width:'100%', marginTop: '43px'}}><h2>Contact Us</h2></div>
          <div style={{display: "flex", alignItems: "flex-end"}}>
            <div className="contact-us-col1">
              <Contacts />
            </div>
            <div className="contact-us-col2">
              <Form />
            </div>
          </div>
        </div>

      </div>
      {/*<div className='bufferSizeZone' />*/}
    </div>
  )
}
