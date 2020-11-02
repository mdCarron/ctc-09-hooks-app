import React, { useReducer } from "react";
import { todoReducer } from "./todoReducer";

const initialState = [
  {
    id: new Date().getTime(),
    description: "aprender react js",
    done: false,
  },
];

const TodoApp = () => {
  const [todos] = useReducer(todoReducer, initialState);

  console.log(todos);

  return (
    <div className="container">
      <h1 className="mt-5">TodoApp</h1>
      <hr />

      <ul>
        <li>Mesclar masa madre</li>
        <li>Cocinar pan</li>
        <li>Comprar dulce de leche</li>
      </ul>
    </div>
  );
};

export default TodoApp;
