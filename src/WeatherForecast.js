import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props) {
  function handleResponse(response) {
    console.log(response.data);
  }
  let apiKey = "7345ee018fd528da4cd97bec34042c86";
  let longitude = props.coordinates.lon;
  let latitude = props.coordinates.lat;
  let unit = "metric";
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=current,minutely,hourly,alerts&units=${unit}&appid=${apiKey}`;
  axios.get(apiUrl).then(handleResponse);

  return (
    <div className="WeatherForecast">
      <div className="row next-5-days">
        <h2 className="next-5-days__heading">Next 5 days</h2>
        <div className="next-5-days__container">
          <div className="next-5-days__row">
            <div className="next-5-days__date">
              Tue
              <div className="next-5-days__label">30/7</div>
            </div>

            <div className="next-5-days__low">
              10&deg;
              <div className="next-5-days__label">Low</div>
            </div>

            <div className="next-5-days__high">
              21&deg;
              <div className="next-5-days__label">High</div>
            </div>

            <div className="next-5-days__icon">
              <WeatherIcon code="01d" size={36} />
            </div>

            <div className="next-5-humidity">
              0%
              <div className="next-5-days__label">Humidity</div>
            </div>

            <div className="next-5-days__wind">
              12km/h
              <div className="next-5-days__label">Wind</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
