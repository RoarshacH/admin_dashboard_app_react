import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee, faBook, faComputer, faAnchor } from "@fortawesome/free-solid-svg-icons";

export default function register() {
  return (
    <>
      <main className="form-signin text-center mt-5">
        <form>
          <h1 className="h3 mb-3 mt-5 fw-normal">Register Here</h1>

          <div className="form-floating">
            <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
            <label for="floatingInput">Email address</label>
          </div>
          <div className="form-floating">
            <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
            <label for="floatingPassword">Password</label>
          </div>
          <div className="form-floating">
            <input type="password" className="form-control" id="floatingConPassword" placeholder="Confirm Password" />
            <label for="floatingConPassword">Confirm Password</label>
          </div>

          <div className="checkbox mb-3">
            <label>
              <input type="checkbox" value="remember-me" /> Remember me
            </label>
          </div>
          <button className="w-100 btn btn-lg btn-primary" type="submit">
            Sign in
          </button>
          <p className="mt-5 mb-3 text-muted">&copy; 2017–2021</p>
        </form>
      </main>
    </>
  );
}
