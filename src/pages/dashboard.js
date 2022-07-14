import React from "react";
import Sidebar from "../components/sidebar";
import WeatherWidget from "../widgets/weatherWidget";
import ToDoListWidget from "../widgets/toDoList";
import CalanderWidget from "../widgets/calanderWidget";
import TriviaWidget from "../widgets/triviaWidget";

export default function dashboard() {
  return (
    <>
      <div className="container-fluid">
        <div className="col-auto row flex-nowrap">
          <Sidebar />
          <div className="col col-md-8 col-sm-9 py-3">
            <h1 className="h2 mt-5 header-animated">Dashboard</h1>
            <div className="container">
              <div className="row col-md-12 ">
                <ToDoListWidget />
                <WeatherWidget />
              </div>
              <div className="row col-md-12 ">
                <CalanderWidget />
              </div>
              <div className="row col-md-12 "></div>
              <TriviaWidget />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
