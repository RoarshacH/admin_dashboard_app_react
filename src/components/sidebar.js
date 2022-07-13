import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightToBracket, faToolbox, faHome, faChalkboard, faLineChart } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export default function sidebar() {
  return (
    <>
      <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 mt-5 bg-dark">
        <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
          <a href="/" className="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none">
            <span className="fs-5 d-none d-sm-inline mt-2 mb-2">User Dashboard</span>
          </a>
          <ul className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" id="menu">
            <li>
              <Link to={"/dashboard"} className="nav-link align-middle px-0 dashboard-sidebar-hover">
                <FontAwesomeIcon className="fs4" icon={faChalkboard} /> <span className="ms-1 d-none d-sm-inline">Dashboard</span>
              </Link>
            </li>

            <li>
              <Link to={"/weather"} className="nav-link align-middle px-0 dashboard-sidebar-hover">
                <FontAwesomeIcon className="fs4" icon={faToolbox} /> <span className="ms-1 d-none d-sm-inline">Weather</span>
              </Link>
            </li>

            <li>
              <Link to={"/weather"} className="nav-link align-middle px-0 dashboard-sidebar-hover">
                <FontAwesomeIcon className="fs4" icon={faLineChart} /> <span className="ms-1 d-none d-sm-inline">Stocks</span>
              </Link>
            </li>

            <li>
              <Link to={"/"} className="nav-link align-middle px-0 dashboard-sidebar-hover">
                <FontAwesomeIcon className="fs4" icon={faRightToBracket} /> <span className="ms-1 d-none d-sm-inline">Sign Out</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
