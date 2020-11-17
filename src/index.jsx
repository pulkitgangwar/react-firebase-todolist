import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { render } from "react-dom";
import App from "./App";
import "./styles/main.scss";

render(
  <Router>
    <App />
  </Router>,
  document.getElementById("root")
);
