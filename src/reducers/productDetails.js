import { FETCH_PRODUCT_DETAILS } from '../constants/actionTypes';

export default (state = [], { type, productID }) => {
  switch (type) {
    case FETCH_PRODUCT_DETAILS:
      return state.filter(product => product.productID === productID).pop()
    default:
      return {};
  }
}
