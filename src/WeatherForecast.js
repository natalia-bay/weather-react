import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";

export default function WeatherForecast() {
  return (
    <div className="WeatherForecast">
      <div className="row next-5-days">
        <h2 class="next-5-days__heading">Next 5 days</h2>
        <div class="next-5-days__container">
          <div class="next-5-days__row">
            <div class="next-5-days__date">
              Tue
              <div class="next-5-days__label">30/7</div>
            </div>

            <div class="next-5-days__low">
              10&deg;
              <div class="next-5-days__label">Low</div>
            </div>

            <div class="next-5-days__high">
              21&deg;
              <div class="next-5-days__label">High</div>
            </div>

            <div class="next-5-days__icon">
              <WeatherIcon code="01d" size={36} />
            </div>

            <div class="next-5-humidity">
              0%
              <div class="next-5-days__label">Humidity</div>
            </div>

            <div class="next-5-days__wind">
              12km/h
              <div class="next-5-days__label">Wind</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
