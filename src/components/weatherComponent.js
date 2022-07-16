import React from "react";
import { Card } from "react-bootstrap";
import Error from "../components/error";

export default function WeatherComponentCard({ weatherData, error, showError }) {
  return (
    <>
      {typeof weatherData.main != "undefined" ? (
        <>
          {showError(false)}
          <div class="alert col row justify-content-center" role="alert">
            <Card className="text-center col-md-5 m-2 p-4">
              <Card.Header>Main Data</Card.Header>
              <Card.Text>
                Temprature: {weatherData.main.temp} &deg;C <br />
                Feels Like: {weatherData.main.feels_like} <br />
                Sunrise: {new Date(weatherData.sys.sunrise * 1000).toLocaleTimeString("en-IN")} <br />
                Sunset: {new Date(weatherData.sys.sunset * 1000).toLocaleTimeString("en-IN")} <br />
              </Card.Text>
            </Card>
            <Card className="text-center col-md-5 m-2 p-4">
              <Card.Header>Sky Data</Card.Header>
              <Card.Text>
                Sky : {weatherData.weather[0].main} <br />
                Wind Direction: {weatherData.wind.deg} <br />
                Wind Speed: {weatherData.wind.speed} <br />
                Humidity: {weatherData.main.humidity} %
              </Card.Text>
            </Card>
          </div>
        </>
      ) : (
        <>{showError(true)}</>
      )}
      <Error showError={showError} error={error} />
    </>
  );
}
