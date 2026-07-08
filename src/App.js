import React, { useState } from "react";
import Weather from "./Weather";
import axios from "axios";
import "./App.css";

export default function App() {
  const [city, setCity] = useState("New York");
  const [weatherData, setWeatherData] = useState(null);

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
      description: response.data.temperature.humidity,
      wind: Math.round(response.data.wind.speed),
      temperature: Math.round(response.data.temperature.current),
      iconURL: response.data.condition.icon_URL,
    });
  }
}
