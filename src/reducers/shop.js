import {
  FETCH_PRODUCTS,
  SET_FILTERS,
  ADD_TO_CART,
  FETCH_FILTERS_META,
  FETCH_PRODUCT_DETAILS,
  FETCH_CART_PRODUCTS,
} from '../constants/actionTypes';

import { toggleArrElement } from '../utils/shopUtils';
const initialState = {
  // TODO: Remove flags from state
  filters: {
    brandFilter: [],
    priceFilter: []
  },
  filtersMeta: [],
  isFetchingFilters: true,
  products: [],
  isFetchingProducts: true,
  productDetails: {},
  isFetchingProductDetails: true,
  cart: [],
  cartProducts: [],
  isFetchingCartProducts: true
}

export default (state = initialState, actions) => {
  // TODO: remove unncecessary items from state, abstract is<> flags to mockAjax
  const {
    filtersMeta,
    isFetchingFilters,
    priceFilter,
    brandFilter,
    products,
    productID,
    isFetchingProducts,
    productDetails,
    isFetchingProductDetails,
    cartProducts,
    isFetchingCartProducts,
    type,
  } = actions;

  switch (type) {
    case FETCH_PRODUCTS:
      return Object.assign(
        {},
        state,
        { products, isFetchingProducts }
      )
    case FETCH_PRODUCT_DETAILS:
      return Object.assign(
        {},
        state,
        { productDetails, isFetchingProductDetails }
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
    case FETCH_CART_PRODUCTS:
      return Object.assign(
        {},
        state,
        { cartProducts, isFetchingCartProducts }
      )
    case ADD_TO_CART:
      return Object.assign(
        {},
        state,
        // Allow only unique elements in cart
        { cart: Array.from(new Set([ ...state.cart, productID ])) }
      )
    default:
      return state;
  }
}
