import {
  FETCH_PRODUCTS,
  FILTER_PRODUCTS,
  FETCH_PRODUCT_DETAILS,
  ADD_TO_CART,
  FETCH_CART_ITEMS,
} from '../constants/actionTypes';

const initialState = {
  filters: {
    brandFilter: [],
    priceFilter: []
  },
  products: [],
  productDetails: {}
  cart: [],
  cartProducts: []
}

export default (state = initialState, { type, filters, products, cart, productID }) => {
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
    case FETCH_PRODUCT_DETAILS:
      return Object.assign(
        {},
        state,
        { productDetails: state.products.filter(product => product.productID === productID).pop() }
      )
    case ADD_TO_CART:
      return Object.assign(
        {},
        state,
        { cart: [ ...state.cart, productID ] }
      )
    default:
      return state;
  }
}
