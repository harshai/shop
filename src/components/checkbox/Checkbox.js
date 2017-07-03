import React from 'react';
import PropTypes from 'prop-types';

const Checkbox = ({ value, name, isChecked, handleChange }) => (
  <div>
    <label htmlFor={value}>{value}</label>
    <input
      id={value}
      type="checkbox"
      value={value}
      name={name}
      checked={isChecked(`${name}Filter`, value)}
      onChange={handleChange} />
  </div>
)

Checkbox.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  isChecked: PropTypes.func.isRequired,
}

export default Checkbox;
