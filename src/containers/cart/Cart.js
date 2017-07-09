import React, { Component } from 'react';
import PropTypes from 'prop-types';
import mockFetch from '../../utils/mockFetch';
import { getCartProducts } from '../../utils/shopUtils';
import LoadingIndicator from '../../components/loadingIndicator/LoadingIndicator';
import Products from '../../components/products/Products';

class Cart extends Component {
  static propTypes = {
    cartProducts: PropTypes.array.isRequired,
    isFetchingCartProducts: PropTypes.bool.isRequired,
    fetchCartProducts: PropTypes.func.isRequired,
    cart: PropTypes.array.isRequired,
  }

  componentWillMount() {
    this.fetchData();
  }

  componentWillUnmount() {
    // Clear cart products from state and fetch them anew
    this.props.fetchCartProducts();
  }

  fetchData() {
    mockFetch().then(({ products }) => {
      const cartProducts = getCartProducts(this.props.cart, products)
      this.props.fetchCartProducts(cartProducts, false);
    })
  }

  render() {
    if (this.props.isFetchingCartProducts) {
      return <LoadingIndicator isLoading pastDelay/>
    }
    return (
      <section className="section cart">
        <Products products={this.props.cartProducts} />
      </section>
    )
  }
}

export default Cart;
