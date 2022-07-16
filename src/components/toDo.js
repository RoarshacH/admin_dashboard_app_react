import React from "react";
import { Button, Alert } from "react-bootstrap";

export default function Todo({ toDo, index, removeToDo }) {
  // Renders 1 ToDo Item
  // when user clicks delete button this function runs to call remove toDo from ToDoWidget Component
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
