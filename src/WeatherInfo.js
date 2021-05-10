import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import Temperature from "./Temperature";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1>{props.data.city}</h1>
      <div>
        <h5>
          <FormattedDate date={props.data.date} />
        </h5>
      </div>

      <div className="row align-items-center current-weather">
        <div className="col-2">
          <WeatherIcon code={props.data.icon} size={100} className="icon" />
        </div>
        <div className="col-3 current-temp">
          <Temperature celsius={props.data.temperature} />
          <div className="description">{props.data.description}</div>
        </div>
        <div className="col-7 weather-block">
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
                    <i className="fas fa-wind"></i>
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
  );
}
