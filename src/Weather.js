import React, { useState } from "react";
import axios from "axios";

export default function SearchWeather() {
  let [city, setCity] = useState("");
  let [loaded, setLoaded] = useState(false);
  let [weather, setWeather] = useState({});

  function displayWeather(response) {
    setLoaded(true);
    setWeather({
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      description: response.data.weather[0].description
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    let apiKey = "3a94f3778290bfeee61278505dbbe51d";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(url).then(displayWeather);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  let form = (
    <form onSubmit={handleSubmit}>
      <input
        type="search"
        className="btn btn-info info shadow-sm search"
        placeholder="Enter a City..."
        onChange={updateCity}
      />
      <button type="Submit">Search</button>
    </form>
  );

  if (loaded) {
    return (
      <div>
        {form}
        <ul>
          <li> Temperature: {Math.round(weather.temperature)}°C </li>
          <li> Wind speed: {Math.round(weather.wind)} km/h </li>
          <li> Humidity: {weather.humidity} % </li>
          <li> Description: {weather.description} </li>
          
            <img src={weather.icon} alt="Weather icon" />
          
        </ul>
      </div>
    );
  } else {
    return form;
  }
}
