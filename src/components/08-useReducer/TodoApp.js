import React, { useEffect, useReducer } from "react";
import { todoReducer } from "./todoReducer";
import useForm from "../../hooks/useForm";
import TodoList from "./TodoList";
import "./TodoApp.css";

const init = () => {
  return JSON.parse(localStorage.getItem("todos")) || [];
};

const TodoApp = () => {
  const [todos, dispatch] = useReducer(todoReducer, [], init);
  const [{ description }, handleInputChange, reset] = useForm({
    description: "",
  });

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

  const handleSubmit = (e) => {
    e.preventDefault();

    if (description.trim() <= 1) {
      return;
    }

    const newTodo = {
      id: new Date().getTime(),
      desc: description,
      done: false,
    };

    const action = {
      type: "add",
      payload: newTodo,
    };

    dispatch(action);
    reset();
  };

  return (
    <div className="container">
      <h1 className="mt-5">TodoApp ({todos.length})</h1>
      <hr />
      <div className="row">
        <div className="col-sm-12 col-md-4">
          <h3>Agregar Tarea</h3>
          <hr />
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="description"
              placeholder="Nueva Tarea..."
              autoComplete="off"
              className="form-control my-2"
              onChange={handleInputChange}
              value={description}
            />
            <button type="submit" className="btn btn-success btn-block my-2">
              Agregar
            </button>
          </form>
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
