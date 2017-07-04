import React from 'react';
import PropTypes from 'prop-types';
import Products from '../../components/products/Products';

const Cart = ({ cartProducts }) => (
  // TODO: make stateful component, fetch own data
  <section className="cart">
    <Products products={cartProducts} />
  </section>
)
Cart.PropTypes = {
  cartProducts: PropTypes.object.isRequired
};

export default Cart;
