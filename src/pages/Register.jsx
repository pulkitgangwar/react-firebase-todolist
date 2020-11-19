import React, { useState } from "react";
import { Link } from "react-router-dom";
import RegisterForm from "../components/RegisterForm";
import Toggle from "../components/Toggle";
import { useAuth } from "../context/auth.context";

const Register = ({ history: { push } }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({
    server: "",
    email: "",
    password: "",
  });
  const { register } = useAuth();

  const onSubmit = async (e) => {
    e.preventDefault();
    const emailRegex = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;

    if (!email) {
      setErrors({
        email: "*email is required field",
        password: "",
        server: "",
      });
    } else if (!password) {
      setErrors({
        email: "",
        password: "*password is required field",
        server: "",
      });
    } else if (!emailRegex.test(email)) {
      setErrors({
        email: "*invalid email",
        password: "",
        server: "",
      });
    } else if (password.length <= 6) {
      setErrors({
        email: "",
        password: "*password should be atleast of 8 letters",
        server: "",
      });
    } else {
      setErrors({
        email: "",
        password: "",
        server: "",
      });

      const response = await register({
        email: email.trim(),
        password: password.trim(),
      }).catch((err) => {
        setErrors({
          email: "",
          password: "",
          server: err.message,
        });
      });

      if (response) {
        push("/");
      }
    }
  };

  return (
    <div className="register">
      <div className="register__card">
        <div className="register__toggle">
          <Toggle
            primaryToggle={{ link: "/register", title: "Register" }}
            secondaryToggle={{ link: "/login", title: "Login" }}
          />
        </div>
        <h1 className="register__title">Register</h1>
        {errors.server && (
          <div className="register__error-box">
            <p>{errors.server}</p>
          </div>
        )}
        <RegisterForm
          email={email}
          setEmail={(e) => {
            setEmail(e.target.value);
          }}
          password={password}
          setPassword={(e) => setPassword(e.target.value)}
          errors={errors}
          onSubmit={onSubmit}
        />
        <div className="register__link--wrapper">
          <Link className="register__link" to="/forgot-password">
            Forgot Password?
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
