import React, {useState} from "react";
import "./ContactUs.css";
import "../utils.css";
import * as emailjs from "emailjs-com";

import iconFacebook from "../../assets/icon_facebook.svg";
import iconTwitter from "../../assets/icon_twitter.svg";
import iconLinkedin from "../../assets/icon_linkedin.svg";

const API_KEY = "XeTlitGZtOpL_io5X";

const EMAIL_REGEX = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

const MESSAGE_OK = 'Thank you for contacting us!';
const MESSAGE_ERR_REQ_FIELDS = 'Please fill all fields.';
const MESSAGE_ERR_EMAIL = 'Please enter a valid email.';
const MESSAGE_ERR_GENERAL = 'An Error Occurred.';

const SUCCESS_MESSAGE_HIDE_DELAY = 10 * 1000;

const SOCIAL_LINKEDIN_URL = 'https://www.linkedin.com/company/code-fluent';
const SOCIAL_TWITTER_URL = 'https://twitter.com/_CodeFluent';
const SOCIAL_FACEBOOK_URL = '';//@todo: enter valid CF's url

export function Form(props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [userErrorMessage, setUserErrorMessage] = useState("");
  const [userSuccessMessage, setUserSuccessMessage] = useState("");
  const [processing, setProcessing] = useState(false);

  function sendMessage(name, email, message) {
    if (name === '' || email === '' || message === '') {
      setUserErrorMessage(MESSAGE_ERR_REQ_FIELDS);
      return;
    } else if(!email.match(EMAIL_REGEX)) {
      setUserErrorMessage(MESSAGE_ERR_EMAIL);
      return;
    }

    var templateParams = {
      name: name,
      email: email,
      message: message
    }

    setUserSuccessMessage('');
    setUserErrorMessage('');
    setProcessing(true);

    emailjs.send('service_daqjvap', 'template_b5mpvfs', templateParams, API_KEY)
      .then(function(response) {
        if (response.status == 200) {
          setProcessing(false);
          setUserErrorMessage('');
          setUserSuccessMessage(MESSAGE_OK);

          setTimeout(() => setUserSuccessMessage(''), SUCCESS_MESSAGE_HIDE_DELAY);
        } else {
          setProcessing(false);
          setUserSuccessMessage('');
          setUserErrorMessage(MESSAGE_ERR_GENERAL);
        }
      }, function(error) {
        console.log('FAILED...', error);
        setProcessing(false);
        setUserSuccessMessage('');
        setUserErrorMessage(MESSAGE_ERR_GENERAL);
      });
  }

  return (
    <div className='form' id="contact-us-form">
      <h4>Let's talk about extending <br/>the value of SAP</h4>

      <div className="flex-container" style={{display: "flex"}}>
        <input value={name} type="text" className={'textPrompt'} placeholder={"Your Name"} style={{flex:1}}
               onInput={e => setName(e.target.value)}
               disabled={processing}
        />
        <input value={email} type="text" className={'textPrompt'} placeholder={"Email"} style={{flex:1}}
               onInput={e => setEmail(e.target.value)}
               disabled={processing}
        />
      </div>

      <div className="wrapper">
                <textarea cols={4} className={'paragraphPrompt'} placeholder={"Type Here"} value={message}
                          onInput={e => setMessage(e.target.value)}
                          disabled={processing}
                />
      </div>

      {userErrorMessage && <div className="FormMessage FormErrorMessage">{userErrorMessage}</div>}
      {userSuccessMessage && <div className="FormMessage FormSuccessMessage">{userSuccessMessage}</div>}

      {!userSuccessMessage && <div style={{textAlign: 'right'}}>
        <input type="button"
               className={'PrimaryButton pointer'}
               onClick={() => sendMessage(name, email, message)}
               value="Send"
               disabled={processing}
        />
      </div>
      }
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
    </div>
  )
}

export default function ContactUs() {
  return (
    <div style={{display: "flex", position:"relative"}}>
      <div style={{width: "100%"}}>

        <div className="centerIt">
          <div className="section-header"><h2>Contact Us</h2></div>
          <div className="flex-container">
            <div className="contact-us-col">
              <Contacts />
            </div>
            <div className="contact-us-col">
              <Form />
            </div>
          </div>

          <div className="flex-container bottom">
            <div className="flex-col-50">
              <div className="copyrights">
                <s2>All Rights Reserved</s2>
                <s2>2023</s2>
              </div>
            </div>

            <div className="flex-col-50">
              <div className="social-media">
                {SOCIAL_LINKEDIN_URL && <a href={SOCIAL_LINKEDIN_URL} target="_blank"><img src={iconLinkedin} border="0" alt="" width="24" height="24"/></a>}
                {SOCIAL_FACEBOOK_URL && <a href={SOCIAL_FACEBOOK_URL} target="_blank"><img src={iconFacebook} border="0" alt="" width="24" height="24"/></a>}
                {SOCIAL_TWITTER_URL && <a href={SOCIAL_TWITTER_URL}  target="_blank"><img src={iconTwitter} border="0"  alt="" width="24" height="24"/></a>}
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}
