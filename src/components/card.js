import React from "react";

export default function card() {
  return (
    <div className="col">
      <div className="card shadow-sm">
        <img src={require("../assests/card2.jpg")} className="card-img-top rounded" alt="" height="250" />

        <div className="card-body">
          <p className="card-text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo recusandae vel odio nulla. Fugiat, dolores obcaecati, consectetur consequuntur deserunt non magnam sit nisi vitae nihil cupiditate, quam minus nam voluptatum.</p>
        </div>
        <div className="pb-3 mx-3 d-flex justify-content-between align-items-center">
          <div className="btn-group" role="group">
            <button type="button" className="btn btn-outline-secondary">
              Left
            </button>
            <button type="button" className="btn btn-outline-secondary">
              Middle
            </button>
            <button type="button" className="btn btn-outline-secondary">
              Right
            </button>
          </div>
          <small className="text-muted">2 Days Ago</small>
        </div>
      </div>
    </div>
  );
}
