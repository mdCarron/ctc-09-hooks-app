import React, { useState } from "react";
import { useCounter } from "../../hooks/useCounter";
import Small from "./Small";

const Memorize = () => {
  const { counter, increment } = useCounter(10);
  const [show, setShow] = useState(false);

  return (
    <div className="container mt-5">
      <h1>Memorize</h1>
      <hr />

      <h2>
        Counter: <Small value={counter} />
      </h2>

      <button
        className="btn btn-success m-2"
        onClick={() => {
          increment();
        }}
      >
        +1
      </button>
      <button
        className="btn btn-outline-success m-2"
        onClick={() => {
          setShow(!show);
        }}
      >
        Show / Hide ({JSON.stringify(show)})
      </button>
    </div>
  );
};

export default Memorize;
