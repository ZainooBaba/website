import './App.css';
// import './Components/Common/Common.css';

import ContactUs from './Components/ContactUs/ContactUs';
import {NavBar} from "./Components/NavBar/NavBar";
import {Hero} from "./Components/Hero/Hero";
import {Partners} from "./Components/Partners/Partners";
import {WhatWeDo} from "./Components/WhatWeDo/whatWeDo";
import {Capabilities} from "./Components/Cababilities/Capabilities";
import {Differentiators} from "./Components/Differentiators/Differentiators";
import {Careers} from "./Components/Careers/Careers";
import {AboutUs} from "./Components/AboutUs/AboutUs";

import bgCareers from "./assets/careers/bkgrd.svg";

function App() {
  return (
    <div className="App">
      <section id="NavBar" className="centerIt"><NavBar/></section>
        <section id="Hero" className="centerIt"><Hero/></section>
      <div style={{height: 200}}/>
        {/*<section id="WhatWeDo" className="margin-100"><WhatWeDo/></section>*/}

        <section id="Capabilities" className="centerIt margin-100"><Capabilities/></section>

        {/*<section id="Differentiators" className="margin-120"><Differentiators/></section>*/}

        {/*<section id="AboutUs" className="centerIt margin-100"><AboutUs/></section>*/}

        <section id="Partners" className="margin-120"><Partners/></section>

        <section id="Careers" className="bgAble centerIt margin-125" style={{position:"relative"}}><Careers /></section>

        <section id="footer" className="bgAble">
          <ContactUs/>
        </section>
    </div>
  );
}

export default App;
