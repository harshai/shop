import React, { Component } from 'react';
import PropTypes from 'prop-types';
import mockFetch from '../../utils/mockFetch';
import LoadingIndicator from '../../components/loadingIndicator/LoadingIndicator';
import Filters from '../../components/filters/Filters';

class ProductListings extends Component {
  static propTypes = {
    filteredProducts: PropTypes.array.isRequired,
    filters: PropTypes.object.isRequired,
    fetchProducts: PropTypes.func.isRequired,
    setFilters: PropTypes.func.isRequired,
  }

  componentWillMount() {
    this.fetchData();
  }

  fetchData() {
    mockFetch().then(({products, filters}) => {
      console.log(products, filters);
      this.props.fetchProducts(products, false);
    })
  }

  render() {
    return (
      <section>
        <Filters filters={this.props.filters} setFilters={this.props.setFilters}/>
        {this.props.isFetchingProducts ?
          <LoadingIndicator isLoading pastDelay/> :
          `Products shown: ${this.props.filteredProducts.length}`
        }
      </section>
    );
  }
}

export default ProductListings;
