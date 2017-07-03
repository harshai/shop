import React from 'react';
import PropTypes from 'prop-types';

const Filters = (props) => {
  const handleChange = (ev) => {
    const { name, value } = ev.target;
    props.setFilters({
      [name]: value
    })
  }

  const isChecked = (kind, value) => props.filters[kind].includes(value)

  return <form>
    <label htmlFor="NutriWell">NutriWell</label>
    <input
      id="NutriWell"
      type="checkbox"
      value="NutriWell"
      name="brandFilter"
      checked={isChecked('brandFilter', 'NutriWell')}
      onChange={handleChange} />

    <label htmlFor="MARIGOLD">MARIGOLD</label>
    <input
      id="MARIGOLD"
      type="checkbox"
      value="MARIGOLD"
      name="brandFilter"
      checked={isChecked('brandFilter', 'MARIGOLD')}
      onChange={handleChange} />

    <label htmlFor="Marigold">Marigold</label>
    <input
      id="Marigold"
      type="checkbox"
      value="Marigold"
      name="brandFilter"
      checked={isChecked('brandFilter', 'Marigold')}
      onChange={handleChange} />

    <label htmlFor="Meiji">Meiji</label>
    <input
      id="Meiji"
      type="checkbox"
      value="Meiji"
      name="brandFilter"
      checked={isChecked('brandFilter', 'Meiji')}
      onChange={handleChange} />

    <label htmlFor="0-0.99">0-0.99</label>
    <input
      id="0-0.99"
      type="checkbox"
      value="0-0.99"
      name="priceFilter"
      checked={isChecked('priceFilter', '0-0.99')}
      onChange={handleChange} />
    <label htmlFor="1-1.99">1-1.99</label>
    <input
      id="1-1.99"
      type="checkbox"
      value="1-1.99"
      name="priceFilter"
      checked={isChecked('priceFilter', '1-1.99')}
      onChange={handleChange} />
    <label htmlFor="2-2.99">2-2.99</label>
    <input
      id="2-2.99"
      type="checkbox"
      value="2-2.99"
      name="priceFilter"
      checked={isChecked('priceFilter', '2-2.99')}
      onChange={handleChange} />
  </form>
}

Filters.propTypes = {
  setFilters: PropTypes.func.isRequired,
  filters: PropTypes.shape({
    brandFilter: PropTypes.array,
    priceFilter: PropTypes.array
  }).isRequired
};

export default Filters;
