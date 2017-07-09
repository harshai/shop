import * as types from '../constants/actionTypes';

export const addToCart = productID => ({
  type: types.ADD_TO_CART,
  productID
});

export const fetchProductDetails = (productDetails = {}, isFetchingProductDetails = true) => ({
  type: types.FETCH_PRODUCT_DETAILS,
  productDetails,
  isFetchingProductDetails
})

export const fetchProducts = (products = [], isFetchingProducts = true) => ({
  type: types.FETCH_PRODUCTS,
  products,
  isFetchingProducts
});


export const fetchCartProducts = (cartProducts = [], isFetchingCartProducts = true) => ({
  type: types.FETCH_CART_PRODUCTS,
  cartProducts,
  isFetchingCartProducts
});

export const fetchFiltersMeta = (filtersMeta = [], isFetchingFilters = true) => ({
  type: types.FETCH_FILTERS_META,
  filtersMeta,
  isFetchingFilters
});

export const setFilters = ({ brandFilter = '', priceFilter = '' }) => ({
  type: types.SET_FILTERS,
  brandFilter,
  priceFilter
});
