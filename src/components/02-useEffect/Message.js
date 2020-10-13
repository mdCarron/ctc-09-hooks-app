import React, { useEffect } from "react";

const Messaje = () => {
  useEffect(() => {
    console.log("componente Message montado");
    return () => {
      console.log("componente desmontado");
    };
  }, []);

  return (
    <div>
      <h3>Mensaje desde Messaje.js</h3>
    </div>
  );
};

export default Messaje;
