import React from "react";
import Sidebar from "../components/sidebar";
import WeatherWidget from "../widgets/weatherWidget";
import ToDoListWidget from "../widgets/toDoList";
import CalanderWidget from "../widgets/calanderWidget";
import TriviaWidget from "../widgets/triviaWidget";
import BitcoinWidget from "../widgets/bitcoinWidget";
import UserProfileWidget from "../widgets/userProfileWidget";
import UsersListWidget from "../widgets/usersListWidget";

import Footer from "../components/footer";

export default function dashboard() {
  return (
    <>
      <div className="container-fluid ">
        <div className="col-auto row flex-nowrap">
          <Sidebar />
          <div className="col col-md-10 col-sm-10 pl-3">
            <h1 className="h2 mt-5 header-animated">Dashboard</h1>
            <div className="container">
              <div className="row col-md-12 h-100 align-items-baseline">
                <ToDoListWidget />
                <WeatherWidget />
                <UserProfileWidget />
              </div>
              <div className="row col-md-12 h-100 align-items-baseline ">
                <CalanderWidget />
                <TriviaWidget />
                <UsersListWidget />
              </div>
              <div className="row col-md-12 ">
                <BitcoinWidget />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
