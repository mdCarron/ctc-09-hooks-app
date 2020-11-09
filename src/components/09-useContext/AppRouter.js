import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import AboutScreen from "./AboutScreen";
import HomeScreen from "./HomeScreen";
import LoginScreen from "./LoginScreen";
import NavBar from "./NavBar";

const AppRouter = () => {
  return (
    <Router>
      <div>
        <NavBar />
        <Switch>
          <Route component={HomeScreen} exact path="/" />
          <Route component={LoginScreen} path="/login" />
          <Route component={AboutScreen} path="/about" />
          <Redirect component={HomeScreen} />
        </Switch>
      </div>
    </Router>
  );
};

export default AppRouter;
