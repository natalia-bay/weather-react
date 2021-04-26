import React from "react";
import "./Weather.css";

export default function Weather() {
  let weatherData = {
    description: "Snow",
    feelsLike: 10,
    humidity: 50,
    windSpeed: 13,
    rain: 100,
    image: "./snow.png",
  };
  return (
    <div className="Weather">
      <h1>Cologne</h1>
      <div>
        <h5>
          Local time: <span id="local-time">18:46</span>
        </h5>
      </div>

      <div className="row align-items-center current-weather">
        <div className="col-2 current-temp">
          <span className="temp-value degrees-now">12</span>
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
            <li className="description">{weatherData.description}</li>
            <li>
              <img
                src={weatherData.image}
                className="icon"
                alt="weather icon"
              />
            </li>
          </ul>
          <div className="row details">
            <div className="col-sm-5">
              <ul className="weather-details">
                <li>
                  <span className="details-icon">
                    <i className="fas fa-temperature-low"></i>
                  </span>
                  Feels like <span>{weatherData.feelsLike}</span>°C
                </li>
                <li>
                  <span className="details-icon">
                    <i className="fas fa-ruler-vertical"></i>
                  </span>
                  <span className="adjustHumidity">Humidity </span>
                  <span>{weatherData.humidity}</span>%
                </li>
              </ul>
            </div>
            <div className="col-sm-6 details2col">
              <ul className="weather-details2">
                <li>
                  <span className="details-icon">
                    <i className="fas fa-umbrella"></i>
                  </span>
                  <span className="adjustPrecipitation">Chance of rain </span>
                  <span>{weatherData.rain}</span>%
                </li>
                <li>
                  <span className="details-icon">
                    <i class="fas fa-wind"></i>
                  </span>
                  <span className="adjustWind">Wind </span>
                  <span>{weatherData.windSpeed}</span> km/h
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
