import React from 'react';
import PropTypes from 'prop-types';
import './button.css';

const Button = props => <button className="button" {...props}>{props.children}</button>

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  children: PropTypes.string.isRequired,
}

export default Button;
