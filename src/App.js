import React from "react";
import Weather from "./Weather";
import "./index.css";

export default function App() {
  return (
    <div className="container">
      <Weather defaultCity="New York" />

      <footer>
        Coded by{" "}
        <a
          href="https://github.com/beckslange"
          target="_blank"
          rel="noreferrer"
        >
          Rebecca Lange
        </a>
        , open sourced on{" "}
        <a
          href="https://github.com/beckslange/vanilla-weather-search-homework"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>
        , and hosted on{" "}
        <a
          href="https://app.netlify.com/projects/weeksevenweatherapphomework/overview"
          target="_blank"
          rel="noreferrer"
        >
          Netlify
        </a>
      </footer>
    </div>
  );
}
