import React from "react";
import { Switch, Route } from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";
import ForgotPassword from "./pages/ForgotPassword";

const App = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/forgot-password" component={ForgotPassword} />
        <Route exact render={(routeProps) => <h1>404</h1>} />
      </Switch>
    </div>
  );
};

export default App;
