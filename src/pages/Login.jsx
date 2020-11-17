import React, { useState } from "react";
import { Link } from "react-router-dom";
import LoginForm from "../components/LoginForm";
import Toggle from "../components/Toggle";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  const onSubmit = (e) => {
    e.preventDefault();
    const emailRegex = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;

    if (!email) {
      setErrors({
        email: "*email is required field",
        password: "",
      });
    } else if (!password) {
      setErrors({
        email: "",
        password: "*password is required field",
      });
    } else if (!emailRegex.test(email)) {
      setErrors({
        email: "*invalid email",
        password: "",
      });
    } else if (password.length <= 6) {
      setErrors({
        email: "",
        password: "*password should be atleast of 8 letters",
      });
    } else {
      setErrors({
        email: "",
        password: "",
      });
      console.log(email, password);
    }
  };

  return (
    <div className="login">
      <div className="login__card">
        <div className="login__toggle">
          <Toggle
            primaryToggle={{ link: "/register", title: "Register" }}
            secondaryToggle={{ link: "/login", title: "Login" }}
          />
        </div>
        <h1 className="login__title">Login</h1>
        <LoginForm
          email={email}
          setEmail={(e) => {
            setEmail(e.target.value);
          }}
          password={password}
          setPassword={(e) => setPassword(e.target.value)}
          errors={errors}
          onSubmit={onSubmit}
        />
        <div className="login__link--wrapper">
          <Link className="login__link" to="/forgot-password">
            Forgot Password?
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;