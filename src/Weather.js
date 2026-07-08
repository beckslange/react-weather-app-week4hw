import React, { useState } from "react";
import axios from "axios";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState(null);
  const [city, setCity] = useState(props.defaultCity);

  function formatDate(timestamp) {
    let date = new Date(timestamp * 1000);

    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];

    let day = days[date.getDay()];
    let hours = date.getHours();
    let minutes = date.getMinutes();

    if (minutes < 10) {
      minutes = `0${minutes}`;
    }

    let ampm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12;
    hours = hours ? hours : 12;

    return `${day} ${hours}:${minutes} ${ampm}`;
  }

  function refreshWeather(response) {
    setWeatherData({
      city: response.data.city,
      time: formatDate(response.data.time),
      description: response.data.condition.description,
      humidity: response.data.temperature.humidity,
      wind: Math.round(response.data.wind.speed),
      temperature: Math.round(response.data.temperature.current),
      iconUrl: response.data.condition.icon_url,
    });
  }

  function searchCity(city) {
    let apiKey = "tfo33b89af42954f2d60430a801e1b3c";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=imperial`;

    axios.get(apiUrl).then(refreshWeather);
  }

  function handleSubmit(event) {
    event.preventDefault();
    searchCity(city);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  if (weatherData === null) {
    searchCity(props.defaultCity);
    return <p>Loading...</p>;
  }

  return (
    <div>
      <header>
        <form onSubmit={handleSubmit}>
          <input
            type="search"
            placeholder="Enter a city..."
            required
            className="search-form"
            onChange={updateCity}
          />
          <input type="submit" value="search" className="search-button" />
        </form>
      </header>

      <main>
        <div className="app-data">
          <div>
            <h1 className="city-name">{weatherData.city}</h1>
            <p>
              <span>{weatherData.time}</span>
              <span className="divider"> | </span>
              <span>{weatherData.description}</span>
              <br />
              Humidity: <strong>{weatherData.humidity}%</strong>
              <span className="divider"> | </span>
              Wind: <strong>{weatherData.wind} mph</strong>
            </p>
          </div>

          <div className="temp-container">
            <div className="temp-icon">
              <img
                src={weatherData.iconUrl}
                alt={weatherData.description}
                className="weather-icon"
              />
            </div>
            <div className="temp">{weatherData.temperature}</div>
            <div className="temp-unit">°F</div>
          </div>
        </div>
      </main>
    </div>
  );
}
