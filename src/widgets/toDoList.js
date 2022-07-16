import React, { useState, useRef } from "react";
import Todo from "../components/toDo";
import { Button } from "react-bootstrap";
import Error from "../components/error";

export default function ToDoList() {
  // Reference to the text input
  const todoNameRef = useRef();
  const [toDoList, setToDos] = useState([]);
  const [error, showError] = useState(false);

  // When the new todo is smubmitted add it to the exsisting array
  const handleSubmit = () => {
    const newValue = todoNameRef.current.value;
    showError(false);
    if (newValue === "") {
      showError(true);
      return;
    }
    setToDos([...toDoList, { text: newValue, completed: false }]);
    todoNameRef.value = null;
    document.getElementById("textInputField").value = "";
  };

  // Remove a todo item from array by index
  const removeItem = (index) => {
    const newToDoList = [...toDoList];
    newToDoList.splice(index, 1);
    setToDos(newToDoList);
  };

  // Get the todo by index and toggle its "completed" property
  const toggleComplete = (index) => {
    const newToDoList = [...toDoList];
    newToDoList[index].completed = !newToDoList[index].completed;
    setToDos(newToDoList);
  };

  return (
    <>
      <div className="card col-md-4 todoMain" style={{ marginTop: "4rem" }}>
        <h4 className="font-weight-bold header-animated mt-2" style={{ marginBottom: "0rem" }}>
          To Do Widget
        </h4>
        {/* Check if the ToDolist array is empty */}
        {toDoList.length === 0 && <p>No to do task available</p>}
        {/* use map array to serve ToDo componets for each ToDo item in the array */}
        {toDoList.map((toDo, index) => (
          <Todo key={index} toDo={toDo} index={index} toggleTodos={toggleComplete} removeToDo={removeItem} />
        ))}
        <div className="addInputItems">
          <input id="textInputField" className="form-control" ref={todoNameRef} type="text" />
          <Button variant="primary" className="mt-4" onClick={handleSubmit}>
            Add ToDo
          </Button>
        </div>
        {/* If there is a error show the error using the Error components */}
        <Error showError={showError} error={error} />
      </div>
    </>
  );
}
