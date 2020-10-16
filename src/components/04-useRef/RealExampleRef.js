import React, { useState } from "react";
import MultipleCustomHooks from "../03-examples/MultipleCustomHooks";

const RealExampleRef = () => {
  const [show, setShow] = useState(false);

  return (
    <div className="container mt-5">
      <h1>Real Example Ref</h1>
      <hr />

      {show && <MultipleCustomHooks />}
      <button
        className="btn btn-outline-primary mt-5"
        onClick={() => {
          setShow(!show);
        }}
      >
        Show / Hide
      </button>
    </div>
  );
};

export default RealExampleRef;
