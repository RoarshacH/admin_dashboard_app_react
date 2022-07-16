import React, { useState, useEffect } from "react";
import WeatherComponent from "../components/weatherComponent";
import Sidebar from "../components/sidebar";
import Error from "../components/error";

export default function WeatherPage() {
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
      <div className="container-fluid">
        <div className="row flex-nowrap">
          <Sidebar />
          <div className="col py-3">
            <h1 className="font-weight-bold text-center header-animated mt-5">Weather Data</h1>
            <div className="row">
              <div className="col-md-12" style={{ marginTop: "4rem" }}>
                <div className="align-items-center justify-content-center">
                  <WeatherComponent weatherData={data} showError={showWeathError} error={weathError} />
                </div>
              </div>
            </div>
            <Error showError={showWeathError} error={weathError} />
          </div>
        </div>
      </div>
    </>
  );
}
