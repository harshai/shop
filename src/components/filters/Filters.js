import React from 'react';
import PropTypes from 'prop-types';
import Checkbox from '../checkbox/Checkbox';

const Filters = (props) => {
  const handleChange = (ev) => {
    const { name, value } = ev.target;
    props.setFilters({
      [`${name}Filter`]: value
    })
  }
  const isChecked = (kind, value) => props.filters[kind].includes(value)

  return (
    <form>
        {props.filtersMeta.map(({name, values}) => (
          <fieldset key={name}>
            <legend>{name}</legend>
            {values.map(value =>
              <Checkbox
                key={value}
                name={name}
                value={value}
                isChecked={isChecked}
                handleChange={handleChange}/>
            )}
        </fieldset>
      ))}
    </form>
  )
}

Filters.propTypes = {
  setFilters: PropTypes.func.isRequired,
  filters: PropTypes.shape({
    brandFilter: PropTypes.array,
    priceFilter: PropTypes.array
  }).isRequired
};

export default Filters;
