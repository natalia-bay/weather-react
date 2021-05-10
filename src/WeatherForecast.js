import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";

export default function WeatherForecast() {
  return (
    <div className="WeatherForecast">
      <div className="row justify-content-around daily">
        <div className="col-2 date">
          <div className="week-day">THU</div>
          <div className="weather-icon">
            <WeatherIcon code="01d" size={36} />
          </div>
          <div class="daily-temp-max"> 20°</div>
          <div class="daily-temp-min"> 10°</div>
        </div>
      </div>
    </div>
  );
}
