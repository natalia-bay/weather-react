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
      <>
        <span className="temp-value degrees-now">
          {Math.round(props.celsius)}
        </span>
        <sup className="degree-element">°</sup>

        <span className="units">
          <ul className="temp-unit">
            <li>
              <span className="active temp-cel">C</span>
            </li>
            <li>
              <a
                href="/"
                className="temp-fahr deactivated"
                onClick={convertToFahrenheit}
              >
                F
              </a>
            </li>
          </ul>
        </span>
      </>
    );
  } else {
    let fahrenheit = (props.celsius * 9) / 5 + 32;
    return (
      <>
        <span className="temp-value degrees-now">{Math.round(fahrenheit)}</span>
        <sup className="degree-element">°</sup>

        <span className="units">
          <ul className="temp-unit">
            <li>
              <a
                href="/"
                className="temp-cel deactivated"
                onClick={convertToCelsius}
              >
                C
              </a>
            </li>
            <li>
              <span className="temp-fahr active">F</span>
            </li>
          </ul>
        </span>
      </>
    );
  }
}
