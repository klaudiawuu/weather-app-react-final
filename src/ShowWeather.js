import React from "react";
import CorrectDateFormat from "./CorrectDateFormat";
import "./Forecast.css";
import Units from "./Units";
import WeatherIcon from "./WeatherIcon";

export default function ShowWeather(props) {
  return (
    <div className="ShowWeather">
      <h1>{props.info.city}</h1>
      <ul className="actualTime">
        <li>
          <CorrectDateFormat day={props.info.day} />
        </li>
        <li className="text-capitalize">{props.info.description}</li>
      </ul>
      <div className="row">
        <div className="col-6">
            <WeatherIcon code={props.info.icon} alt={props.info.description} size={50}/>
            <Units celcius={props.info.temperature} />
        </div>
        <div className="col-6 additionalInfo">
          <ul>
            <li>Real Feel: {Math.round(props.info.realFeel)}°C</li>
            <li>Humidity: {props.info.humidity}%</li>
            <li>Wind: {Math.round(props.info.wind)} km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
