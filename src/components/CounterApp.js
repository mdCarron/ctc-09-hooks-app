import React, { useState } from "react";

const CounterApp = () => {
  const [state, setState] = useState({
    counter01: 10,
    counter02: 20,
    counter03: 30,
    counter04: 40,
  });
  const { counter01, counter02 } = state;

  return (
    <div className="container mt-5">
      <h1>Counter - {counter01}</h1>
      <h1>Counter - {counter02}</h1>
      <hr />
      <button
        className="btn btn-primary mt-5"
        onClick={() => {
          setState({
            ...state,
            counter01: counter01 + 1,
          });
        }}
      >
        +1
      </button>
    </div>
  );
};

export default CounterApp;
