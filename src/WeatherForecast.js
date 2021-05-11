import React, { useState, useEffect } from "react";
import "./WeatherForecast.css";
import WeatherForecastDay from "./WeatherForecastDay";
import axios from "axios";

export default function WeatherForecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  useEffect(() => {
    setLoaded(false);
  }, [props.coordinates]);

  function handleResponse(response) {
    console.log(response.data);
    setForecast(response.data.daily);
    setLoaded(true);
  }

  if (loaded) {
    return (
      <div className="WeatherForecast">
        <div className="row next-5-days">
          <h2 className="next-5-days__heading">Next 5 days</h2>
          <div className="next-5-days__container">
            {forecast.map(function (dailyForecast, index) {
              if (index < 5) {
                return (
                  <div className="next-5-days__row" key={index}>
                    <WeatherForecastDay data={dailyForecast} />
                  </div>
                );
              }
            })}
          </div>
        </div>
      </div>
    );
  } else {
    let apiKey = "7345ee018fd528da4cd97bec34042c86";
    let longitude = props.coordinates.lon;
    let latitude = props.coordinates.lat;
    let unit = "metric";
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=current,minutely,hourly,alerts&units=${unit}&appid=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);

    return null;
  }
}
