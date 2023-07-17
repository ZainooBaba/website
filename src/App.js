import './App.css';
import {ContactUs, Form} from './Working/ContactUs.js';
import {NavBar} from "./Components/NavBar/NavBar";
import {Hero} from "./Components/Hero/Hero";
import {Partners} from "./Components/Partners/Partners";

function App() {
  return (
    <div className="App">
      <NavBar />
        <Hero/>
        <section id="Partners"><Partners/></section>
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
