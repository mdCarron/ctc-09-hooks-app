import React, { useContext } from "react";
import UserContext from "./UserContext";

const LoginScreen = () => {
  const { setUser } = useContext(UserContext);

  const user = {
    id: "ckW20d",
    name: "Sopita",
    email: "info@sopita.com",
  };

  return (
    <div className="container mt-5">
      <h1>LoginScreen</h1>
      <hr />
      <button
        className="btn btn-success"
        onClick={() => {
          setUser(user);
        }}
      >
        Login
      </button>
    </div>
  );
};

export default LoginScreen;
