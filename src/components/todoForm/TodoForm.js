import Todo from "components/todo/Todo";
import React, { useState } from "react";

const TodoForm = ({ addTodo }) => {
  const [todo, setTodo] = useState({
    id: "",
    task: "",
    completed: false,
  });

  const handleTaskInputChange = (e) => {
    setTodo({ ...todo, task: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (todo.task.trim()) {
      addTodo({ ...todo, id: Math.floor(Math.random() * 10000) });
      setTodo({ ...Todo, task: "" });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="task"
        type="text"
        onChange={handleTaskInputChange}
        value={todo.task}
      />
      <button type="submit"> ADD </button>
    </form>
  );
};

export default TodoForm;
