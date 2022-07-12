import React from "react";
import Container from "react-bootstrap/Container";
import {} from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightToBracket, faToolbox, faHome, faChalkboard, faUser, faChartColumn, faUserPlus } from "@fortawesome/free-solid-svg-icons";

function Header(props) {
  return (
    <Navbar className="fixed-top" bg="dark" variant="dark" expand="lg">
      <Container fluid className="mx-3">
        <Navbar.Brand>My React App</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link>
              <Link to={"/"} className="link-text">
                <FontAwesomeIcon className="fs4" icon={faHome} /> <span className="ms-1 d-none d-sm-inline"> </span> Home
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link to={"/signin"} className="link-text">
                <FontAwesomeIcon className="fs4" icon={faUser} /> <span className="ms-1 d-none d-sm-inline"> </span> Login
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link to={"/register"} className="link-text">
                <FontAwesomeIcon className="fs4" icon={faUserPlus} /> <span className="ms-1 d-none d-sm-inline"> </span> Register
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link to={"/dashboard"} className="link-text">
                <FontAwesomeIcon className="fs4" icon={faChartColumn} /> <span className="ms-1 d-none d-sm-inline"> </span> Dashboard
              </Link>
            </Nav.Link>
          </Nav>
          <div className="navbar-nav">
            <div className="nav-item text-nowrap">
              <Nav.Link>
                <Link to={"/"} className="link-text">
                  <FontAwesomeIcon className="fs4" icon={faRightToBracket} /> <span className="ms-1 d-none d-sm-inline"> </span> SignOut
                </Link>
              </Nav.Link>
            </div>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
