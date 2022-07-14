import React, { useState, useEffect, useRef } from "react";
import Todo from "../components/toDo";
import { Button } from "react-bootstrap";
import Error from "../components/error";

export default function ToDoList() {
  const todoNameRef = useRef();
  const [toDoList, setToDos] = useState([]);
  const [error, showError] = useState(false);

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

  const removeItem = (index) => {
    const newToDoList = [...toDoList];
    newToDoList.splice(index, 1);
    setToDos(newToDoList);
  };

  const toggleComplete = (index) => {
    const newToDoList = [...toDoList];
    newToDoList[index].completed = !newToDoList[index].completed;
    setToDos(newToDoList);
  };

  return (
    <>
      <div className="card col-md-6 todoMain" style={{ marginTop: "4rem" }}>
        <h4 className="font-weight-bold header-animated" style={{ marginBottom: "0rem" }}>
          To Do Widget
        </h4>
        {toDoList.length === 0 && <p>No to do task available</p>}
        {toDoList.map((toDo, index) => (
          <Todo key={index} toDo={toDo} index={index} toggleTodos={toggleComplete} removeToDo={removeItem} />
        ))}
        <div className="addInputItems">
          <input id="textInputField" className="form-control" ref={todoNameRef} type="text" />
          <Button variant="primary" className=" my-1" onClick={handleSubmit}>
            Add ToDo
          </Button>
        </div>
        <Error showError={showError} error={error} />
      </div>
    </>
  );
}
