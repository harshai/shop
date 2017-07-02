import * as types from '../constants/actionTypes';

export const addToCart = productID => ({
  type: types.ADD_TO_CART,
  productID
});

export const fetchCartItems = (cartItems = []) => ({
  type: types.FETCH_CART_ITEMS,
  cartItems
});

export const fetchProducts = (products = []) => ({
  type: types.FETCH_PRODUCTS,
  products
});

export const filterProducts = (brandFilter = [], priceFilter = []) => ({
  type: types.FILTER_PRODUCTS,
  brandFilter,
  priceFilter
});

export const fetchProductDetails = productID => ({
  type: types.FETCH_PRODUCT_DETAILS,
  productID
});
