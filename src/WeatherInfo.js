import React from "react";
import FormattedDate from "./FormattedDate";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div class="container city-box">
        <h1>{props.data.city}</h1>
        <div>
          <h5>
            <FormattedDate date={props.data.date} />
          </h5>
        </div>

        <div className="row align-items-center current-weather">
          <div className="col-2 current-temp">
            <span className="temp-value degrees-now">
              {Math.round(props.data.temperature)}
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
              <li className="description">{props.data.description}</li>
              <li>
                <img
                  src={props.data.icon}
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
                    Feels like <span>{Math.round(props.data.feelsLike)}</span>°C
                  </li>
                  <li>
                    <span className="details-icon">
                      <i className="fas fa-ruler-vertical"></i>
                    </span>
                    <span className="adjustHumidity">Humidity </span>
                    <span>{props.data.humidity}</span>%
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
                    <span>100</span>%
                  </li>
                  <li>
                    <span className="details-icon">
                      <i class="fas fa-wind"></i>
                    </span>
                    <span className="adjustWind">Wind </span>
                    <span>{Math.round(props.data.wind)}</span> km/h
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
