import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";
import FormattedDate from "./FormattedDate";

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
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
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
            <button className="btn btn-outline-secondary" type="button">
              <i className="fas fa-map-marker-alt" aria-hidden="true"></i>
            </button>
          </form>
        </div>

        <div class="container city-box">
          <h1>{weather.city}</h1>
          <div>
            <h5>
              <FormattedDate date={weather.date} />
            </h5>
          </div>

          <div className="row align-items-center current-weather">
            <div className="col-2 current-temp">
              <span className="temp-value degrees-now">
                {Math.round(weather.temperature)}
              </span>
              <sup className="degree-element">°</sup>
            </div>
            <div className="col-1 units">
              <ul className="temp-unit">
                <li>
                  <a href="/" class="active temp-cel">
                    C
                  </a>
                </li>
                <li>
                  <a href="/" className="temp-fahr">
                    F
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-12 col-md-8 weather-block">
              <ul class="weather-description">
                <li className="description">{weather.description}</li>
                <li>
                  <img src={weather.icon} className="icon" alt="weather icon" />
                </li>
              </ul>
              <div className="row details">
                <div className="col-sm-5">
                  <ul className="weather-details">
                    <li>
                      <span className="details-icon">
                        <i className="fas fa-temperature-low"></i>
                      </span>
                      Feels like <span>{Math.round(weather.feelsLike)}</span>°C
                    </li>
                    <li>
                      <span className="details-icon">
                        <i className="fas fa-ruler-vertical"></i>
                      </span>
                      <span className="adjustHumidity">Humidity </span>
                      <span>{weather.humidity}</span>%
                    </li>
                  </ul>
                </div>
                <div className="col-sm-6 details2col">
                  <ul className="weather-details2">
                    <li>
                      <span className="details-icon">
                        <i className="fas fa-umbrella"></i>
                      </span>
                      <span className="adjustPrecipitation">
                        Chance of rain{" "}
                      </span>
                      <span>100</span>%
                    </li>
                    <li>
                      <span className="details-icon">
                        <i class="fas fa-wind"></i>
                      </span>
                      <span className="adjustWind">Wind </span>
                      <span>{Math.round(weather.wind)}</span> km/h
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
