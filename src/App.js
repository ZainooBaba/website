import './App.css';
import {ContactUs, Form} from './Working/ContactUs.js';
import {NavBar} from "./Components/NavBar/NavBar";
import {Hero} from "./Components/Hero/Hero";
import {Partners} from "./Components/Partners/Partners";
import {WhatWeDo} from "./Components/WhatWeDo/whatWeDo";
import {Capabilities} from "./Components/Cababilities/Capabilities";
import {Differentators} from "./Components/Differentators/Differentators";
import {Careers} from "./Components/Careers/Careers";

function App() {
  return (
    <div className="App">
      <NavBar />
        <Hero/>
        <section id="What we do"><WhatWeDo/></section>
        <div style={{height: 100}}/>
        <section id="Capabilities"><Capabilities/></section>
        <div style={{height: 120}}/>
        <section id="Differentators"><Differentators/></section>
        <div style={{height: 120}}/>
        <section id="Partners"><Partners/></section>
        <div style={{height: 25}}/>
        <section id="Careers"><Careers/></section>
      <header className="App-header">
          <div style={{display: "flex"}}>
            <ContactUs />
            <Form />
          </div>
      </header>
    </div>
  );
}

export default App;
