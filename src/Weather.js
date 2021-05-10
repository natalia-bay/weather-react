import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";

export default function Weather(props) {
  const [city, setCity] = useState(props.defaultCity);
  const [loaded, setLoaded] = useState(false);
  const [weather, setWeather] = useState({ ready: false });

  function displayWeather(response) {
    setWeather({
      city: response.data.name,
      temperature: response.data.main.temp,
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      feelsLike: response.data.main.feels_like,
      date: new Date(response.data.dt * 1000),
      icon: response.data.weather[0].icon,
      minTemp: response.data.main.temp_min,
      maxTemp: response.data.main.temp_max,
      sunrise: response.data.sys.sunrise,
      sunset: response.data.sys.sunset,
    });
    setLoaded(true);
  }

  function search() {
    const apiKey = "7345ee018fd528da4cd97bec34042c86";
    let units = "metric";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
    axios.get(apiUrl).then(displayWeather);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function getCurrentLocation(position) {
    let latitude = position.coords.latitude;
    let longitude = position.coords.longitude;
    const apiKey = "7345ee018fd528da4cd97bec34042c86";
    let units = "metric";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=${units}`;
    axios.get(apiUrl).then(displayWeather);
  }

  function fetchLocation(event) {
    event.preventDefault();
    navigator.geolocation.getCurrentPosition(getCurrentLocation);
  }

  if (loaded) {
    return (
      <div className="Weather">
        <div className="container search-field">
          <form className="input-group" onSubmit={handleSubmit}>
            <input
              type="search"
              className="form-control"
              placeholder="Enter a city"
              autoComplete="off"
              autoFocus=""
              onChange={updateCity}
            />
            <button className="btn btn-outline-secondary" type="submit">
              <i className="fas fa-search" aria-hidden="true"></i>
            </button>
            <button
              className="btn btn-outline-secondary"
              type="button"
              onClick={fetchLocation}
            >
              <i className="fas fa-map-marker-alt" aria-hidden="true"></i>
            </button>
          </form>
        </div>
        <div class="container city-box">
          <WeatherInfo data={weather} />
          <WeatherForecast />
        </div>
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
