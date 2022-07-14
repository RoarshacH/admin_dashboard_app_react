import React from "react";
import { Button, Alert } from "react-bootstrap";

export default function Todo({ toDo, index, removeToDo }) {
  function handleRemove() {
    removeToDo(index);
  }
  return (
    <div className="row align-items-center justify-content-center">
      <Alert variant="success" style={{ width: "25rem" }}>
        <Alert.Heading>{toDo.text}</Alert.Heading>
        <Button size="sm" variant="outline-danger" onClick={handleRemove}>
          Clear
        </Button>
      </Alert>
    </div>
  );
}
