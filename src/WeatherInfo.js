import React from "react";
import FormattedDate from "./FormattedDate";
import FormattedTime from "./FormattedTime";
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

      <div className="row current-weather">
        <div className="col-sm-3 icon">
          <WeatherIcon code={props.data.icon} size={105} />
        </div>
        <div className="col-sm-3 current-temperature">
          <Temperature celsius={props.data.temperature} />
          <div className="description">{props.data.description}</div>
        </div>
        <div className="col-sm-2 current-stats">
          <div className="current-stats_value">
            {Math.round(props.data.maxTemp)}°
          </div>
          <div className="current-stats_label">Max</div>
          <div className="current-stats_value">
            {Math.round(props.data.minTemp)}°
          </div>
          <div className="current-stats_label">Min</div>
        </div>
        <div className="col-sm-2 current-stats">
          <div className="current-stats_value">
            {Math.round(props.data.wind)}m/s
          </div>
          <div className="current-stats_label">Wind</div>
          <div className="current-stats_value">{props.data.humidity}%</div>
          <div className="current-stats_label">Humidity</div>
        </div>

        <div className="col-sm-2 current-stats">
          <div className="current-stats_value">
            <FormattedTime time={props.data.sunrise} />
          </div>
          <div className="current-stats_label">Sunrise</div>
          <div className="current-stats_value">
            <FormattedTime time={props.data.sunset} />
          </div>
          <div className="current-stats_label">Sunset</div>
        </div>
      </div>
    </div>
  );
}
