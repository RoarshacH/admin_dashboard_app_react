import React, { useState } from "react";
import Calendar from "react-calendar";

export default function CalanderWidget() {
  // Use react calander to render the calander widget
  // Added only the relevent css styles from recomended stlylings to App.css because recomendedd styles render the component with block stylings
  const [value, onChange] = useState(new Date());

  return (
    <div className="col-md-4 card" style={{ marginTop: "1rem" }}>
      <h4 className="font-weight-bold header-animated my-2" style={{ marginBottom: "0rem" }}>
        Calander Widget
      </h4>
      <Calendar onChange={onChange} value={value} />
    </div>
  );
}
