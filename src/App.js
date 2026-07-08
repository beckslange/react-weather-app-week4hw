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
  }
}
