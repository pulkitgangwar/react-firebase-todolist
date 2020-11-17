import React from "react";
import PropTypes from "prop-types";

const Input = ({ type, label, placeholder, value, onInputChange, error }) => {
  return (
    <div className="input">
      <label htmlFor={`input__element--${label}`} className="input__label">
        {label}
      </label>
      <input
        id={`input__element--${label}`}
        className="input__input"
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={onInputChange}
      />
      {error && (
        <div className="input__error-box">
          <p>{error}</p>
        </div>
      )}
    </div>
  );
};

Input.propTypes = {
  type: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onInputChange: PropTypes.func.isRequired,
  error: PropTypes.string,
};

export default Input;
