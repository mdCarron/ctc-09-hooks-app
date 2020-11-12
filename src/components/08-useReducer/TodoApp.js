import React, { useReducer } from "react";
import { todoReducer } from "./todoReducer";
import "./TodoApp.css";

const initialState = [
  {
    id: new Date().getTime(),
    description: "aprender react js",
    done: false,
  },
];

const TodoApp = () => {
  const [todos, dispatch] = useReducer(todoReducer, initialState);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newTodo = {
      id: new Date().getTime(),
      description: "terminar lección 11 de cero a experto",
      done: false,
    };

    const action = {
      type: "add",
      payload: newTodo,
    };

    dispatch(action);
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
            />
            <button
              type="submit"
              className="btn btn-outline-success btn-block my-2"
            >
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
                  <b>{i + 1}.</b> {todo.description}
                </p>
                <button className="btn btn-danger">Borrar</button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TodoApp;
