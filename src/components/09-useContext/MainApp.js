import React from "react";
import UserContext from "./UserContext";
import AppRouter from "./AppRouter";

const MainApp = () => {
  const user = {
    id: "ckW20d",
    name: "Sopita",
    email: "info@sopita.com",
  };

  return (
    <UserContext.Provider value={user}>
      <AppRouter />
    </UserContext.Provider>
  );
};

export default MainApp;
