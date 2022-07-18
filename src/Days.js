import React from "react";
import "./Forecast.css";
import WeatherIcon from "./WeatherIcon";

export default function Days(props) {

function Day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();
    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];

    return days[day];
}

    return (
      <div>
          <ul>
            <li className="nextDay">{Day()}</li>
            <li>
              <div className="nextDaysIcon">
                <WeatherIcon code={props.data.weather[0].icon} />
              </div>
            </li>
            <li>
              <span className="nextDayTempMax">
                {Math.round(props.data.temp.max)}°{" "}
              </span>
              <span className="nextDayTempMin">
                {Math.round(props.data.temp.min)}°
              </span>
            </li>
          </ul>
      </div>
    );
}