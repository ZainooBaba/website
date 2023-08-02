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
      <NavBar />
        <section id="Hero" className="centerIt"><Hero/></section>
        {/*<section id="WhatWeDo" className="margin-100"><WhatWeDo/></section>*/}

        {/*<section id="Capabilities"><Capabilities/></section>*/}

        {/*<section id="Differentiators" className="margin-120"><Differentiators/></section>*/}

        {/*<section id="AboutUs" className="centerIt margin-100"><AboutUs/></section>*/}

        {/*<section id="Partners" className="margin-120"><Partners/></section>*/}

        {/*<section id="Careers" style={{backgroundImage: `url(${bgCareers})`}} className="bgAble centerIt margin-125">*/}
        {/*  <Careers />*/}
        {/*</section>*/}

        <section id="footer" className="bgAble">
          <ContactUs/>
        </section>
    </div>
  );
}

export default App;
