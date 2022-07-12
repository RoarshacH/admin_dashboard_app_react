import React from "react";
import Container from "react-bootstrap/Container";
import {} from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

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
                Home
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link to={"/signin"} className="link-text">
                Sign In
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link to={"/register"} className="link-text">
                Register User
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link to={"/dashboard"} className="link-text">
                Dashboard
              </Link>
            </Nav.Link>
          </Nav>
          <div className="navbar-nav">
            <div className="nav-item text-nowrap">
              <Nav.Link>
                <Link to={"/dashboard"} className="link-text">
                  SignOut
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
