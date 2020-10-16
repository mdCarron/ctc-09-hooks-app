import React, { useRef } from "react";

const FocusScreen = () => {
  const inputRef = useRef();

  const handleInputChange = () => {
    inputRef.current.select();
  };

  return (
    <div className="container mt-5">
      <h1>FocusScreen</h1>
      <hr />

      <input className="form-control" placeholder="Su Nombre" ref={inputRef} />
      <button
        className="btn btn-outline-primary mt-3"
        onClick={handleInputChange}
      >
        Focus
      </button>
    </div>
  );
};

export default FocusScreen;
