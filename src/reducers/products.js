import { FETCH_PRODUCTS, FILTER_PRODUCTS } from '../constants/actionTypes';

const initialState = {
  filters: {
    brandFilter: [],
    priceFilter: []
  },
  products: []
}
export default (state = initialState, { type, filters, products }) => {
  switch (type) {
    case FETCH_PRODUCTS:
      return Object.assign(
        {},
        state,
        { products }
      )
    case FILTER_PRODUCTS:
      const filteredProducts = products
        .filter(product => {
          if (filters.brandFilter.length === 0) {
            return true;
          }
          return filters.brandFilter.includes(product.brand)
        })
        .filter(product => {
          if (filters.priceFilter.length === 0) {
            return true;
          }
          return filters.priceFilter.reduce((acc, curr) => {
            return acc || (product.price > curr[0] && product.price < curr[1])
          }, false)
        })

      return Object.assign(
        {},
        state,
        { products: filteredProducts }
      )
    default:
      return state;
  }
}
