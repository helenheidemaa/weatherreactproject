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
          href="https://github.com/helenheidemaa/weatherreactproject"
          target="_blank"
          rel="noopener noreferrer"
        >
          Open-Source 
        </a>
        <p>ode by Helen Heidemaa</p>c
      </header>
    </div>
  );
}

export default App;
