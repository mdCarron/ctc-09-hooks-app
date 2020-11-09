import React, { useContext } from "react";
import UserContext from "./UserContext";

const HomeScreen = () => {
  const userContext = useContext(UserContext);
  console.log(userContext);

  return (
    <div className="container mt-5">
      <h1>HomeScreen</h1>
      <hr />
    </div>
  );
};

export default HomeScreen;
