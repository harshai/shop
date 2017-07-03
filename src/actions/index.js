import * as types from '../constants/actionTypes';

export const addToCart = productID => ({
  type: types.ADD_TO_CART,
  productID
});

export const fetchProducts = (products = [], isFetchingProducts = true) => ({
  type: types.FETCH_PRODUCTS,
  products,
  isFetchingProducts
});

export const fetchFilters = (filtersMeta = [], isFetchingFilters = true) => ({
  type: types.FETCH_FILTERS,
  filtersMeta,
  isFetchingFilters
});

export const setFilters = ({ brandFilter = '', priceFilter = '' }) => ({
  type: types.SET_FILTERS,
  brandFilter,
  priceFilter
});
