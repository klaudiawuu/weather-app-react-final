import React, { useState } from "react";
import axios from "axios";
import "./Forecast.css";
import Days from "./Days";


export default function NextDaysForecast(props) {
  let [ready, setReady] = useState(false);
  let [nextDaysData, setNextDaysData] = useState(null);

  function handleResponse(response) {
    setNextDaysData(response.data.daily);
    setReady(true);
  }

  if (ready) {
    return (
      <div className="nextDaysForecast">
        <div className="row">
          <div className="col-2">
            <Days data={nextDaysData[1]} />
          </div>
          <div className="col-2">
            <Days data={nextDaysData[2]} />
          </div>
          <div className="col-2">
            <Days data={nextDaysData[3]} />
          </div>
          <div className="col-2">
            <Days data={nextDaysData[4]} />
          </div>
          <div className="col-2">
            <Days data={nextDaysData[5]} />
          </div>
          <div className="col-2">
            <Days data={nextDaysData[6]} />
          </div>
        </div>
      </div>
    );
  } else {
    let apiKey = "a367566821d5256a1c920a360eab8e9e";
    let latitude = props.coordinates.lat;
    let longitude = props.coordinates.lon;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);

    return null;
  }
}
