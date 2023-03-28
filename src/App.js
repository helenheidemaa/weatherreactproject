import react from "react"
import logo from './logo.svg';
import './App.css';
import Weather from "./Weather.js";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Weather App</h1>
    <Weather />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Open Source coded by Helen Heidemaa
        </a>
      </header>
    </div>
  );
}

export default App;
