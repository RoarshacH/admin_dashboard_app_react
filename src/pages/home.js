import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";
import Header from "../components/header";
import Footer from "../components/footer";

export default function Home() {
  return (
    <>
      <header className="jumbotron-custom">
        <div className="container px-4 px-lg-5 h-100">
          <div className="row gx-4 gx-lg-5 h-100 align-items-center justify-content-center text-center">
            <div className="col-lg-8 align-self-end">
              <h1 className="font-weight-bold header-animated">Welcome</h1>
            </div>
            <div className="col-lg-8 align-self-baseline">
              <p className="text-jumbo mb-5"></p>
              <a className="" href="#about">
                <i className="fa-solid fa-circle-chevron-down fs-1"></i>
              </a>
            </div>
          </div>
        </div>
      </header>
      <Footer />
    </>
  );
}
