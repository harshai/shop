import { combineReducers } from 'redux';
import products from './products';
import cart from './cart';

const shop = combineReducers({
  products,
  cart,
});

export default shop;
