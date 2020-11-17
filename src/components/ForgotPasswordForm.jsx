import React from "react";
import PropTypes from "prop-types";
import Input from "../components/Input";
import Button from "../components/Button";

const LoginForm = ({ email, setEmail, onSubmit, disabled, errors }) => {
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

      <Button buttonType="submit">Forgot Password</Button>
    </form>
  );
};

LoginForm.propTypes = {
  email: PropTypes.string.isRequired,
  setEmail: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  errors: PropTypes.shape({
    email: PropTypes.string.isRequired,
  }),
};

export default LoginForm;
