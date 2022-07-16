import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, useNavigate } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightToBracket, faHome, faUser, faChartColumn, faUserPlus } from "@fortawesome/free-solid-svg-icons";
import { useAuth } from "../context/authContext";

function Header(props) {
  const { logout, currentUser } = useAuth();
  const navigate = useNavigate();

  // Call the Logout Function from AuthContext and logs out the user from firebase and redirect them to Home
  async function handleLogout() {
    try {
      await logout();
      navigate("/login");
    } catch (e) {
      console.log(e);
    }
  }

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
            {/* Check if a user is logged in then show Dashboard or else show sign in Link */}
            {currentUser ? (
              <Nav.Link>
                <Link to={"/dashboard"} className="link-text">
                  <FontAwesomeIcon className="fs4" icon={faChartColumn} /> <span className="ms-1 d-none d-sm-inline"> </span> Dashboard
                </Link>
              </Nav.Link>
            ) : (
              <Nav.Link>
                <Link to={"/signin"} className="link-text">
                  <FontAwesomeIcon className="fs4" icon={faUser} /> <span className="ms-1 d-none d-sm-inline"> </span> Login
                </Link>
              </Nav.Link>
            )}

            {/* Check if a user is logged in then show Nothing or else show Register Link */}
            {currentUser ? (
              ""
            ) : (
              <Nav.Link>
                <Link to={"/register"} className="link-text">
                  <FontAwesomeIcon className="fs4" icon={faUserPlus} /> <span className="ms-1 d-none d-sm-inline"> </span> Register
                </Link>
              </Nav.Link>
            )}
          </Nav>
          {/* Check if a user is logged in Show the Signout Link */}
          {currentUser ? (
            <div className="navbar-nav">
              <div className="nav-item text-nowrap">
                <li class="nav-item text-nowrap">
                  <div className="nav-link link-text" onClick={handleLogout} style={{ color: " #96f2a9", cursor: "pointer" }}>
                    <FontAwesomeIcon className="fs4" icon={faRightToBracket} /> <span className="ms-1 d-none d-sm-inline"> </span> SignOut
                  </div>
                </li>
              </div>
            </div>
          ) : (
            ""
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
