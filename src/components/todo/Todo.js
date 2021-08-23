import React from "react";

const Todo = ({ todo, toggleComplete, removeTodo }) => {
  const handleCheckboxClick = () => {
    toggleComplete(todo.id);
  };

  const handleRemoveClick = () => {
    removeTodo(todo.id);
  };
  const isChecked = {
    textDecoration: todo.completed ? "line-through" : "none",
  };

  return (
    <div>
      <input
        className="checkComp"
        type="checkbox"
        defaultChecked={false}
        onClick={handleCheckboxClick}
      />
      <li style={isChecked}>{todo.task}</li>
      <button onClick={handleRemoveClick}>X</button>
    </div>
  );
};

export default Todo;
