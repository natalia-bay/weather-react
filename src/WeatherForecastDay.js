import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay(props) {
  function maxTemperature() {
    let temperature = Math.round(props.data.temp.max);
    return `${temperature}°`;
  }

  function minTemperature() {
    let temperature = Math.round(props.data.temp.min);
    return `${temperature}°`;
  }

  function humidity() {
    let humidity = Math.round(props.data.humidity);
    return `${humidity}%`;
  }

  function wind() {
    let wind = Math.round(props.data.wind_speed);
    return `${wind}km/h`;
  }

  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();

    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return days[day];
  }

  return (
    <>
      <div className="next-5-days__date">
        {day()}
        <div className="next-5-days__label">30/7</div>
      </div>

      <div className="next-5-days__low">
        {minTemperature()}
        <div className="next-5-days__label">Low</div>
      </div>

      <div className="next-5-days__high">
        {maxTemperature()}
        <div className="next-5-days__label">High</div>
      </div>

      <div className="next-5-days__icon">
        <WeatherIcon code={props.data.weather[0].icon} size={36} />
      </div>

      <div className="next-5-humidity">
        {wind()}
        <div className="next-5-days__label">Wind</div>
      </div>

      <div className="next-5-days__wind">
        {humidity()}
        <div className="next-5-days__label">Humidity</div>
      </div>
    </>
  );
}
