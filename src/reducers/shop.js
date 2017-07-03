import {
  FETCH_PRODUCTS,
  SET_FILTERS,
  ADD_TO_CART,
  FETCH_FILTERS_META,
} from '../constants/actionTypes';

import { toggleArrElement } from '../utils/shopUtils';
const initialState = {
  filters: {
    brandFilter: [],
    priceFilter: []
  },
  filtersMeta: [],
  isFetchingFilters: true,
  products: [],
  isFetchingProducts: true,
  cart: [],
}

export default (state = initialState, actions) => {
  const {
    filtersMeta,
    isFetchingFilters,
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
    case FETCH_FILTERS_META:
      return Object.assign(
        {},
        state,
        { filtersMeta, isFetchingFilters }
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
