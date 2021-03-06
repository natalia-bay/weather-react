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
    return `${wind}m/s`;
  }

  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return days[day];
  }

  function currentDate() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDate();
    let month = date.getMonth();
    let months = [
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "11",
      "12",
    ];
    return `${day}/${months[month]}`;
  }

  return (
    <>
      <div className="next-5-days__date">
        {day()}
        <div className="next-5-days__label">{currentDate()}</div>
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
