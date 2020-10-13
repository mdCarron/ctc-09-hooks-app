import React from "react";
import ReactDOM from "react-dom";
// import HooksApp from "./HooksApp";
// import CounterApp from "./components/01-useState/CounterApp";
import CounterWithCustomHook from "./components/01-useState/CounterWithCustomHook";

ReactDOM.render(
  <React.StrictMode>
    <CounterWithCustomHook />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
