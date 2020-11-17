import React from "react";
import PropTypes from "prop-types";

const Button = ({ children, onButtonClick, buttonType }) => {
  return (
    <button
      className="button"
      onClick={onButtonClick || null}
      type={buttonType || "button"}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.string.isRequired,
  onButtonClick: PropTypes.func,
  buttonType: PropTypes.oneOf(["submit", "button", "reset"]),
};

export default Button;
