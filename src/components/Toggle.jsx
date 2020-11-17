import React from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

const Toggle = ({ primaryToggle, secondaryToggle }) => {
  return (
    <div className="toggle">
      <NavLink
        tabIndex={0}
        to={primaryToggle.link}
        activeClassName="toggle--active"
        className="toggle__menu"
      >
        {primaryToggle.title.toUpperCase()}
      </NavLink>
      <NavLink
        tabIndex={0}
        to={secondaryToggle.link}
        activeClassName="toggle--active"
        className="toggle__menu"
      >
        {secondaryToggle.title.toUpperCase()}
      </NavLink>
    </div>
  );
};

Toggle.propTypes = {
  primaryToggle: PropTypes.shape({
    title: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
  }).isRequired,
  secondaryToggle: PropTypes.shape({
    title: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
  }).isRequired,
};

export default Toggle;
