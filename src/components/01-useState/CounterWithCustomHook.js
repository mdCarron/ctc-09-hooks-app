import React from "react";
import { useCounter } from "../../hooks/useCounter";

const CounterWithCustomHook = () => {
  const { state, increment, decrement, reset } = useCounter(100);
  let factor = 1;

  return (
    <div className="container mt-5">
      <h1>Counter with Custom Hook: {state}</h1>
      <hr />

      <button
        onClick={() => decrement(factor)}
        className="btn btn-primary mr-2"
      >
        - {factor}
      </button>
      <button
        onClick={() => increment(factor)}
        className="btn btn-primary mr-2"
      >
        + {factor}
      </button>
      <button onClick={reset} className="btn btn-primary mr-2">
        Reset
      </button>
    </div>
  );
};

export default CounterWithCustomHook;
