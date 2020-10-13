import React, { useState, useEffect } from "react";

const SimpleForm = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
  });
  const { name, email } = formState;

  useEffect(() => {
    console.log("se actualizo el useEffect!");
  }, []);

  const handleInputChange = ({ target }) => {
    setFormState({
      ...formState,
      [target.name]: target.value,
    });
  };

  return (
    <div className="container mt-5">
      <h1>Simple Form</h1>
      <h2 className="mb-5">useEffect</h2>

      <div className="form-group">
        <input
          type="text"
          name="name"
          value={name}
          autoComplete="off"
          placeholder="Tu Nombre"
          onChange={handleInputChange}
          className="form-control"
        />
      </div>
      <div className="form-group">
        <input
          type="email"
          name="email"
          value={email}
          autoComplete="off"
          placeholder="Tu dirección de email"
          onChange={handleInputChange}
          className="form-control"
        />
      </div>
    </div>
  );
};

export default SimpleForm;
