import logo from './logo.svg';
import './App.css';
import { PrimaryButton, SecondaryButton, TextPrompt } from './Components/utils.js';
import { Form } from './Working/ContactUs.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>WHATS UP NEWYOURL</h1>

        <PrimaryButton text="Primary Button" />
        <SecondaryButton text="Secondary Button" />
          <TextPrompt />
          {/*<Form />*/}
      </header>
    </div>
  );
}

export default App;
