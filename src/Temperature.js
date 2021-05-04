import React, { useState } from "react";

export default function Temperature(props) {
  const [unit, setUnit] = useState("celsius");

  function convertToFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function convertToCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  if (unit === "celsius") {
    return (
      <div className="Temperature">
        <div className="col-2 current-temp">
          <span className="temp-value degrees-now">
            {Math.round(props.celsius)}
          </span>
          <sup className="degree-element">°C</sup>
        </div>
        <div className="col-1 units">
          <ul className="temp-unit">
            <li>
              <span class="active temp-cel">C</span>
            </li>
            <li>
              <a href="/" className="temp-fahr" onClick={convertToFahrenheit}>
                F
              </a>
            </li>
          </ul>
        </div>
      </div>
    );
  } else {
    let fahrenheit = (props.celsius * 9) / 5 + 32;
    return (
      <div className="Temperature">
        <div className="col-2 current-temp">
          <span className="temp-value degrees-now">
            {Math.round(fahrenheit)}
          </span>
          <sup className="degree-element">°</sup>
        </div>
        <div className="col-1 units">
          <ul className="temp-unit">
            <li>
              <a href="/" className=" temp-cel" onClick={convertToCelsius}>
                C
              </a>
            </li>
            <li>
              <span className="temp-fahr active">F</span>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
