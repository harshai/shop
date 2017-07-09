import React, { Component } from 'react';
import PropTypes from 'prop-types';
import mockFetch from '../../utils/mockFetch';
import LoadingIndicator from '../../components/loadingIndicator/LoadingIndicator';
import Filters from '../../components/filters/Filters';
import Products from '../../components/products/Products';
import './productListings.css';

class ProductListings extends Component {
  static propTypes = {
    filteredProducts: PropTypes.array.isRequired,
    filters: PropTypes.object.isRequired,
    filtersMeta: PropTypes.array.isRequired,
    isFetchingFilters: PropTypes.bool.isRequired,
    setFilters: PropTypes.func.isRequired,
    fetchProducts: PropTypes.func.isRequired,
    fetchFiltersMeta: PropTypes.func.isRequired,
    addToCart: PropTypes.func.isRequired,
  }

  componentDidMount() {
    this.fetchData();
    document.title = 'Shop | Home';
  }

  componentWillUnmount() {
    this.props.fetchProducts();
    this.props.fetchFiltersMeta();
  }

  fetchData() {
    mockFetch().then(({products, filters}) => {
      this.props.fetchProducts(products, false);
      this.props.fetchFiltersMeta(filters, false);
    })
  }

  render() {
    if (this.props.isFetchingProducts && this.props.isFetchingFilters) {
      return <LoadingIndicator isLoading pastDelay/>
    }
    return (
      <section className="section listings">
        <Filters
          filters={this.props.filters}
          setFilters={this.props.setFilters}
          filtersMeta={this.props.filtersMeta} />
      <Products
        products={this.props.filteredProducts}
        addToCart={this.props.addToCart} />
      </section>
    );
  }
}

export default ProductListings;
