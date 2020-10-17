import React from "react";

const ShowIncrement = React.memo(({ increment }) => {
  console.log("me volvi a renderizar ...");
  return (
    <button className="btn btn-success" onClick={() => increment(5)}>
      +1
    </button>
  );
});

export default ShowIncrement;
