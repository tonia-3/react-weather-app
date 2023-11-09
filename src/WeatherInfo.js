import React from "react";
import FormartedDate from "./FormatedDate";
import WeatherIcon from "./WeatherIcon";

export default function WeatherInfo(props) {
  return (
    <div>
      <h1>{props.data.city}</h1>
      <ul>
        <li>
          <FormartedDate date={props.data.date} />
        </li>
        <li className="text-capitalize">{props.data.description}</li>
      </ul>
      <div className="row">
        <div className="col-6">
          <WeatherIcon code={props.data.icon} />
          {Math.round(props.data.temperature)}°C
        </div>
        <div className="col-6">
          <ul>
            <li>Humidity {props.data.humidity}%</li>
            <li>Wind {props.data.wind}km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
