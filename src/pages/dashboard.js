import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee, faBook, faComputer, faAnchor } from "@fortawesome/free-solid-svg-icons";
import Sidebar from "../components/sidebar";
import WeatherWidget from "../widgets/weatherWidget";

export default function dashboard() {
  return (
    <>
      <div className="container-fluid">
        <div className="row flex-nowrap">
          <Sidebar />
          <div className="col py-3">
            <h1 className="h2">Dashboard</h1>
            <div className="row">
              <WeatherWidget />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
