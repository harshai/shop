import {
  FETCH_PRODUCTS,
  SET_FILTERS,
  ADD_TO_CART,
} from '../constants/actionTypes';

import { toggleArrElement } from '../utils/shopUtils';
const initialState = {
  filters: {
    brandFilter: [],
    priceFilter: []
  },
  products: [],
  isFetchingProducts: true,
  cart: [],
}

export default (state = initialState, actions) => {
  const {
    priceFilter,
    brandFilter,
    products,
    productID,
    isFetchingProducts,
    type,
  } = actions;

  switch (type) {
    case FETCH_PRODUCTS:
      return Object.assign(
        {},
        state,
        { products, isFetchingProducts }
      )
    case SET_FILTERS:
      return Object.assign(
        {},
        state,
        {
          filters: {
            brandFilter: toggleArrElement(brandFilter, state.filters.brandFilter),
            priceFilter: toggleArrElement(priceFilter, state.filters.priceFilter)
          }
        }
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
