import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <form>
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              placeholder="Enter City"
              className="form-control"
            ></input>
          </div>
          <div className="col-3">
            <input
              type="submit"
              value="Search"
              className="btn-btn-primary w-100"
            ></input>
          </div>
        </div>
      </form>
      <h1>Nairobi</h1>
      <ul>
        <li> Thursday 01:17</li>
        <li>Mostly cloudy</li>
      </ul>
      <div className="row">
        <div className="col-6">
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
            alt="Mostly Cloudy"
          />
          6°C
        </div>
        <div className="col-6">
          <ul>
            <li>Precipitation 15%</li>
            <li>Humidity 72%</li>
            <li>Wind 13km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
