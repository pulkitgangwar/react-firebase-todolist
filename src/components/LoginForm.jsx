import React from "react";
import PropTypes from "prop-types";
import Input from "../components/Input";
import Button from "../components/Button";

const LoginForm = ({
  email,
  setEmail,
  password,
  setPassword,
  onSubmit,
  disabled,
  errors,
}) => {
  return (
    <form className="loginform" onSubmit={onSubmit}>
      <Input
        value={email}
        placeholder="Enter your email"
        onInputChange={setEmail}
        label="Email"
        type="text"
        error={errors.email}
      />
      <Input
        value={password}
        placeholder="Enter your password"
        onInputChange={setPassword}
        label="Password"
        type="password"
        error={errors.password}
      />
      <Button buttonType="submit">Login</Button>
    </form>
  );
};

LoginForm.propTypes = {
  email: PropTypes.string.isRequired,
  setEmail: PropTypes.func.isRequired,
  password: PropTypes.string.isRequired,
  setPassword: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  errors: PropTypes.shape({
    email: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
  }),
};

export default LoginForm;
