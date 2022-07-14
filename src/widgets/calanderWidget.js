import React, { useState } from "react";
import Calendar from "react-calendar";
// import "react-calendar/dist/Calendar.css";
import "../App.css";

export default function CalanderWidget() {
  const [value, onChange] = useState(new Date());

  return (
    <div>
      <div className="col-md-6 card" style={{ marginTop: "1rem" }}>
        <h4 className="font-weight-bold header-animated my-2" style={{ marginBottom: "0rem" }}>
          Calander Widget
        </h4>
        <Calendar onChange={onChange} value={value} />
      </div>
    </div>
  );
}
