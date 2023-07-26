import './App.css';
import ContactUs from './Components/ContactUs/ContactUs';
import {NavBar} from "./Components/NavBar/NavBar";
import {Hero} from "./Components/Hero/Hero";
import {Partners} from "./Components/Partners/Partners";
import {WhatWeDo} from "./Components/WhatWeDo/whatWeDo";
import {Capabilities} from "./Components/Cababilities/Capabilities";
import {Differentators} from "./Components/Differentators/Differentators";
import {Careers} from "./Components/Careers/Careers";

import bgFooter from "./assets/footer.svg";
import bgCareers from "./assets/careers/bkgrd.svg";

function App() {
  return (
    <div className="App">
      <NavBar />
        <section id="Hero" className="centerIt"><Hero/></section>
        <section id="WhatWeDo"><WhatWeDo/></section>

        <div style={{height: 100}}/>
        <section id="Capabilities"><Capabilities/></section>

        <div style={{height: 120}}/>
        <section id="Differentators"><Differentators/></section>

        <div style={{height: 120}}/>
        <section id="Partners"><Partners/></section>

        <div style={{height: 25}}/>
        <section id="Careers" style={{backgroundImage: `url(${bgCareers})`}} className="bgAble centerIt">
          <Careers />
        </section>

        <section id="footer" style={{backgroundImage: `url(${bgFooter})`}} className="bgAble">
          <ContactUs/>
        </section>
    </div>
  );
}

export default App;
