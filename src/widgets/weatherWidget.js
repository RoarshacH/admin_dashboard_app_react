import React, { useState, useEffect } from "react";
import WeatherCard from "../components/weatherCard";

export default function WeatherWidget() {
  const [data, setData] = useState([]);
  const [weathError, showWeathError] = useState(false);

  // Fetch Data from the weather API and set it to the data state variable
  // Code OnlyRuns on page load
  useEffect(() => {
    showWeathError(false);
    const fetchData = async () => {
      await fetch(`https://api.openweathermap.org/data/2.5/weather/?lat=44.389355&lon=-79.690331&units=metric&APPID=92ad8d24c25849a4bd4e688a9a31031e`)
        .then((res) => res.json())
        .then((result) => {
          setData(result);
        });
    };
    fetchData();
  }, []);

  return (
    <>
      <div className="col-md-5 card" style={{ marginTop: "4rem" }}>
        <h4 className="font-weight-bold header-animated pb-4" style={{ marginBottom: "0rem" }}>
          Weather Widget
        </h4>
        <div className="align-items-center justify-content-center">
          <WeatherCard weatherData={data} showError={showWeathError} error={weathError} />
        </div>
      </div>
    </>
  );
}
