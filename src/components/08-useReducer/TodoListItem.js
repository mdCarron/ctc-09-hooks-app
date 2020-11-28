import React from "react";

const TodoListItem = ({ todo, i, handleToggle, handleDelete }) => {
  return (
    <li
      key={todo.id}
      className="list-group-item d-flex justify-content-between align-items-center"
    >
      <p
        className={`${todo.done && "completed"}`}
        onClick={() => handleToggle(todo.id)}
      >
        {i + 1}. {todo.desc}
      </p>
      <button
        className="btn btn-outline-danger"
        onClick={() => handleDelete(todo.id)}
      >
        Borrar
      </button>
    </li>
  );
};

export default TodoListItem;
