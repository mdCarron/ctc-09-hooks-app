import React, { useEffect, useState } from "react";

const Messaje = () => {
  const [{ x, y }, setCoors] = useState({ x: 0, y: 0 });

  const mouseMove = (e) => {
    const coors = { x: e.x, y: e.y };
    setCoors(coors);
  };

  useEffect(() => {
    window.addEventListener("mousemove", mouseMove);
    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  return (
    <div>
      <h3>Mensaje desde Messaje.js</h3>
      <p>
        Coordenadas: X: {x} - Y: {y}
      </p>
    </div>
  );
};

export default Messaje;
