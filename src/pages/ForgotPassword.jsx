import React, { useState } from "react";
import { Link } from "react-router-dom";
import ForgotPasswordForm from "../components/ForgotPasswordForm";
import { useAuth } from "../context/auth.context";

const ForgotPassword = ({ history: { push } }) => {
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState({
    email: "",
    server: "",
  });
  const [success, setSuccess] = useState(null);
  const { forgotPassword } = useAuth();

  const onSubmit = async (e) => {
    e.preventDefault();
    const emailRegex = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;

    setSuccess("");
    if (!email) {
      setErrors({
        email: "*email is required field",
        server: "",
      });
    } else if (!emailRegex.test(email)) {
      setErrors({
        email: "*invalid email",
        server: "",
      });
    } else {
      setErrors({
        email: "",
        server: "",
      });

      await forgotPassword({ email }).catch((err) => {
        setErrors({
          email: "",
          server: err.message,
        });
      });

      setSuccess("Password reset url sent to email");
    }
  };

  return (
    <div className="forgotpassword">
      <div className="forgotpassword__card">
        <h1 className="forgotpassword__title">Forgot Password</h1>
        {errors.server && (
          <div className="forgotpassword__error-box">
            <p>{errors.server}</p>
          </div>
        )}

        {success && (
          <div className="forgotpassword__success-box">
            <p>{success}</p>
          </div>
        )}

        <ForgotPasswordForm
          email={email}
          setEmail={(e) => setEmail(e.target.value)}
          onSubmit={onSubmit}
          errors={errors}
        />
        <div className="forgotpassword__link--wrapper">
          <Link className="forgotpassword__link" to="/login">
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
