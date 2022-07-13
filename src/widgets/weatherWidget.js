import React, { useState, useEffect } from "react";
import WeatherCard from "../components/weatherCard";

export default function WeatherWidget() {
  const [data, setData] = useState([]);
  const [weathError, showWeathError] = useState(false);

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
      <div className="col-md-4 card" style={{ marginTop: "4rem", marginLeft: "2rem" }}>
        <h4 className="font-weight-bold header-animated" style={{ padding: "1rem", marginBottom: "0rem" }}>
          Weather Widget
        </h4>
        <div className="align-items-center justify-content-center">
          <WeatherCard weatherData={data} showError={showWeathError} error={weathError} />
        </div>
      </div>
    </>
  );
}
