import React from 'react';
import PropTypes from 'prop-types';
import './checkbox.css';

const Checkbox = ({ value, name, isChecked, handleChange }) => (
  <div className="checkbox">
    <input
      id={value}
      className="checkbox__input"
      type="checkbox"
      value={value}
      name={name}
      checked={isChecked(`${name}Filter`, value)}
      onChange={handleChange} />
    <label className="checkbox__label" htmlFor={value}>{value}</label>
  </div>
)

Checkbox.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  isChecked: PropTypes.func.isRequired,
}

export default Checkbox;
