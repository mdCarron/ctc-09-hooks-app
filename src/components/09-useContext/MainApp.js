import React, { useState } from "react";
import UserContext from "./UserContext";
import AppRouter from "./AppRouter";

const MainApp = () => {
  const [user, setUser] = useState({});

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <AppRouter />
    </UserContext.Provider>
  );
};

export default MainApp;
