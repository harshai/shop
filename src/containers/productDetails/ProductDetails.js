import React, { Component } from 'react';
import PropTypes from 'prop-types';
import mockFetch from '../../utils/mockFetch';
import { getProductDetails } from '../../utils/shopUtils';
import { Redirect } from 'react-router';
import LoadingIndicator from '../../components/loadingIndicator/LoadingIndicator';

class ProductDetails extends Component {
  static propTypes = {
    match: PropTypes.object.isRequired,
    addToCart: PropTypes.func.isRequired,
    isFetchingProductDetails: PropTypes.bool.isRequired,
    productDetails: PropTypes.object.isRequired
  };

  componentDidMount() {
    this.fetchData();
  }

  componentWillUnmount() {
    // Clear product details from state and fetch details anew
    this.props.fetchProductDetails();
  }

  fetchData() {
    mockFetch().then(({ products }) => {
      const product = getProductDetails(parseInt(this.props.match.params.id, 10), products)
      this.props.fetchProductDetails(product, false);
    })
  }

  render() {
    if (this.props.isFetchingProductDetails) {
      return <LoadingIndicator isLoading pastDelay/>
    }

    if (Object.keys(this.props.productDetails).length === 0) {
      return <Redirect to="/not-found" />
    }

    return (
      <section className="product-details">
        {<div>
          <dl>
          {Object.keys(this.props.productDetails).map(detail => ([
            <dt>{detail}</dt>,
            <dd>{this.props.productDetails[detail]}</dd>,
          ]))}
          </dl>
          <button onClick={this.props.addToCart.bind(null, this.props.productDetails.id)}>Add to Cart</button>
        </div>}
      </section>
    )
  }
}

export default ProductDetails;
