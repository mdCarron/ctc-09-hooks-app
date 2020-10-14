import React from "react";
import useForm from "../../hooks/useForm";

const FormWithCustomHook = () => {
  const [formValues, handleInputChange] = useForm({
    name: "",
    email: "",
    password: "",
  });
  const { name, email, password } = formValues;

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formValues);
  };

  return (
    <div className="container mt-5">
      <h1>FormWithCustomHook</h1>
      <h2 className="mb-5">useEffect</h2>

      <form onSubmit={handleSubmit}>
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
        <div className="form-group">
          <input
            type="password"
            name="password"
            value={password}
            autoComplete="off"
            placeholder="Contraseña"
            onChange={handleInputChange}
            className="form-control"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Enviar
        </button>
      </form>
    </div>
  );
};

export default FormWithCustomHook;
