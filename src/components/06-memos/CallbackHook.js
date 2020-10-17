import React, { useState, useCallback } from "react";
import ShowIncrement from "./ShowIncrement";

const CallbackHook = () => {
  const [counter, setCounter] = useState(10);
  //   const increment = () => {
  //     setCounter(counter + 1);
  //   };

  const increment = useCallback(
    (value) => {
      setCounter((count) => count + value);
    },
    [setCounter]
  );

  return (
    <div className="container my-5">
      <h1>useCallback Hook</h1>
      <hr />
      <h2>Counter: {counter}</h2>
      <ShowIncrement increment={increment} />
    </div>
  );
};

export default CallbackHook;
