import React, { useEffect, useReducer } from "react";
import { todoReducer } from "./todoReducer";
import TodoList from "./TodoList";
import TodoAdd from "./TodoAdd";
import "./TodoApp.css";

const init = () => {
  return JSON.parse(localStorage.getItem("todos")) || [];
};

const TodoApp = () => {
  const [todos, dispatch] = useReducer(todoReducer, [], init);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleDelete = (todoId) => {
    const action = {
      type: "delete",
      payload: todoId,
    };
    dispatch(action);
  };

  const handleToggle = (todoId) => {
    dispatch({
      type: "toggle",
      payload: todoId,
    });
  };

  const handleAddTodo = (newTodo) => {
    dispatch({
      type: "add",
      payload: newTodo,
    });
  };

  return (
    <div className="container">
      <h1 className="mt-5">TodoApp ({todos.length})</h1>
      <hr />
      <div className="row">
        <div className="col-sm-12 col-md-4">
          <TodoAdd handleAddTodo={handleAddTodo} />
        </div>
        <div className="col-sm-12 col-md-8">
          <TodoList
            todos={todos}
            handleToggle={handleToggle}
            handleDelete={handleDelete}
          />
        </div>
      </div>
    </div>
  );
};

export default TodoApp;
