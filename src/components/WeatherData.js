import React from "react";

function WeatherData({ temp, img, state, city, region }) {
  return (
    <div className="data_container">
      <div className="first">
        <img src={img} alt="" className="left_img" />
        <h1>{Math.floor(parseFloat(temp) - 273.15) + " °C"}</h1>
        <img src={img} alt="" className="right_img" />
      </div>
      <div className="second">
        <h1>{state}</h1>
      </div>
      <p className="city">{city + " , " + region}</p>
    </div>
  );
}

export default WeatherData;
