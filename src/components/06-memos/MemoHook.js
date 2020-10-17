import React, { useState, useMemo } from "react";
import { procesoPesado } from "../../helpers/procesoPesado";
import { useCounter } from "../../hooks/useCounter";

const MemoHook = () => {
  const { counter, increment } = useCounter(1000);
  const [show, setShow] = useState(false);
  const memoProcesoPesado = useMemo(() => procesoPesado(counter), [counter]);

  return (
    <div className="container mt-5">
      <h1>MemoHook</h1>
      <h2>
        Counter: <small>{counter}</small>
      </h2>
      <hr />
      <p>{memoProcesoPesado}</p>

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

export default MemoHook;
