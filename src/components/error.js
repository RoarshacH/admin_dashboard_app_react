import React from "react";
import { Alert, Button } from "react-bootstrap";

export default function Error({ showError, error }) {
  return (
    <div className=" mt-4 row align-items-center justify-content-center">
      {/* Alert */}
      <Alert show={error} variant="warning" style={{ width: "25rem" }}>
        <p>Error Adding A New Item Plese Check if you typed any text in the text box</p>
        <hr />
        <div className="d-flex justify-content-center">
          <Button onClick={() => showError(false)} variant="outline-danger">
            Close Alert
          </Button>
        </div>
      </Alert>
    </div>
  );
}
