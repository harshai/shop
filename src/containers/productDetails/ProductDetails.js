import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router';

class ProductDetails extends Component {
  static propTypes = {
    match: PropTypes.object.isRequired,
    productDetails: PropTypes.func.isRequired,
    addToCart: PropTypes.func.isRequired
  };

  componentWillMount() {
    this.product = this.props.productDetails(parseInt(this.props.match.params.id, 10))
  }

  render() {
    if (!this.product) {
      return <Redirect to="/not-found" />
    }
    return (
      <section className="product-details">
        <dl>
        {Object.keys(this.product).map(detail => ([
          <dt>{detail}</dt>,
          <dd>{this.product[detail]}</dd>,
        ]))}
        </dl>
        <button onClick={this.props.addToCart.bind(null, this.product.id)}>Add to Cart</button>
      </section>
    )
  }
}

export default ProductDetails;
