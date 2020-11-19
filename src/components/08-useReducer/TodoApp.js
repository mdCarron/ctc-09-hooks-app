import React, { useEffect, useReducer } from "react";
import { todoReducer } from "./todoReducer";
import "./TodoApp.css";
import useForm from "../../hooks/useForm";

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
    console.log(todoId);

    // crear la action
    const action = {
      type: "delete",
      payload: todoId,
    };
    // dispatch
    dispatch(action);
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
            <button type="submit" className="btn btn -success btn-block my-2">
              Agregar
            </button>
          </form>
        </div>
        <div className="col-sm-12 col-md-8">
          <ul className="list-group list-group-flush">
            {todos.map((todo, i) => (
              <li
                key={todo.id}
                className="list-group-item d-flex justify-content-between align-items-center"
              >
                <p className="">
                  <b>{i + 1}.</b> {todo.desc}
                </p>
                <button
                  className="btn btn-outline-danger"
                  onClick={() => handleDelete(todo.id)}
                >
                  Borrar
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TodoApp;
