import Todo from "components/todo/Todo";
import React from "react";

const TodoList = ({ todos, toggleComplete, removeTodo }) => {
  return (
    <ul>
      {todos.map((todo) => (
        <Todo
          key={todo.id}
          todo={todo}
          toggleComplete={toggleComplete}
          removeTodo={removeTodo}
        />
      ))}
    </ul>
  );
};

export default TodoList;
