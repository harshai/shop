import React, { Component } from 'react';
import PropTypes from 'prop-types';
import mockFetch from '../../utils/mockFetch';
import { getProductDetails } from '../../utils/shopUtils';
import { Redirect } from 'react-router';
import Button from '../../components/button/Button';
import LoadingIndicator from '../../components/loadingIndicator/LoadingIndicator';
import './productDetails.css';

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
    const {
      name,
      image,
      price,
      measurement,
      desc
    } = this.props.productDetails;
    return (
      <section className="section product-details">
        <h1 className="product-details__title">{name}</h1>
        <img className="product-details__image" src={require(`../../assets/${image}`)} alt={name} />
        <div className="product-details__specs">
          <h3>{measurement}</h3>
          <h2>${price}</h2>
          <p>{desc}</p>
          <Button onClick={this.props.addToCart.bind(null, this.props.productDetails.id)}>Add to Cart</Button>
        </div>
      </section>
    )
  }
}

export default ProductDetails;
