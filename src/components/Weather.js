import React, { useState, useRef } from "react";
import WeatherData from "./WeatherData";

const WEATHER_API = "https://api.openweathermap.org/data/2.5/weather?q=";

const API_KEY = "&appid=5e004e84f62a5335894dfdc2c38feeab";

const IMAGE_API = "https://openweathermap.org/img/wn/";

const Weather = () => {
  const location = useRef();

  const [loading, setloading] = useState(false);
  const [data, setData] = useState([]);

  const fetch_data = async (API) => {
    try {
      setloading(true);
      const response = await fetch(API);
      const data = await response.json();
      setData(data);
      setloading(false);
      console.log(data);
    } catch (error) {
      console.log(error);
      setloading(false);
    }
  };

  const SubmitHandler = (e) => {
    e.preventDefault();
    const locationValue = location.current.value;
    const RESULT_API = WEATHER_API + "" + locationValue + "" + API_KEY;

    fetch_data(RESULT_API);

    // console.log(RESULT_API);
  };

  if (loading) {
    return <>loading</>;
  }

  return (
    <div className="weather__container">
      <form onSubmit={SubmitHandler}>
        <input
          type="text"
          placeholder="Search by location"
          className="location"
          ref={location}
        />
      </form>
      <div>
        {data.length != "" ? (
          <WeatherData
            temp={data.main.temp}
            img={
              "https://openweathermap.org/img/wn/" +
              data.weather[0].icon +
              "@2x.png"
            }
            state={data.weather[0].main}
            city={data.name}
            region={data.sys.country}
          />
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Weather;
