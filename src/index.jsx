import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { render } from "react-dom";
import App from "./App";
import "./styles/main.scss";
import { AuthProvider } from "./context/auth.context";

render(
  <AuthProvider>
    <Router>
      <App />
    </Router>
  </AuthProvider>,
  document.getElementById("root")
);
