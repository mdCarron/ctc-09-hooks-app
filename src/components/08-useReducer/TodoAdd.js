import React from "react";
import useForm from "../../hooks/useForm";

const TodoAdd = ({ handleAddTodo }) => {
  const [{ description }, handleInputChange, reset] = useForm({
    description: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (description.trim() <= 1) {
      return;
    }

    const newTodo = {
      id: new Date().getTime(),
      desc: description,
      done: false,
    };

    handleAddTodo(newTodo);
    reset();
  };

  return (
    <>
      <h3>Agregar Tarea</h3>
      <hr />
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="description"
          placeholder="Nueva Tarea..."
          autoComplete="off"
          className="form-control my-2"
          onChange={handleInputChange}
          value={description}
        />
        <button type="submit" className="btn btn-success btn-block my-2">
          Agregar
        </button>
      </form>
    </>
  );
};

export default TodoAdd;
