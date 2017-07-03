import React, { Component } from 'react';
import PropTypes from 'prop-types';
import mockFetch from '../../utils/mockFetch';
import LoadingIndicator from '../../components/loadingIndicator/LoadingIndicator';
import Filters from '../../components/filters/Filters';

class ProductListings extends Component {
  static propTypes = {
    filteredProducts: PropTypes.array.isRequired,
    filters: PropTypes.object.isRequired,
    filtersMeta: PropTypes.array.isRequired,
    isFetchingFilters: PropTypes.bool.isRequired,
    setFilters: PropTypes.func.isRequired,
    fetchProducts: PropTypes.func.isRequired,
    fetchFiltersMeta: PropTypes.func.isRequired,
  }

  componentWillMount() {
    this.fetchData();
  }

  fetchData() {
    mockFetch().then(({products, filters}) => {
      this.props.fetchProducts(products, false);
      this.props.fetchFiltersMeta(filters, false);
    })
  }

  render() {
    return (
      <section>
        {this.props.isFetchingProducts && this.props.isFetchingFilters ?
          <LoadingIndicator isLoading pastDelay/> :
            <div>
              <Filters
                filters={this.props.filters}
                setFilters={this.props.setFilters}
                filtersMeta={this.props.filtersMeta} />
              <div>Products shown: {this.props.filteredProducts.length}</div>
            </div>
        }
      </section>
    );
  }
}

export default ProductListings;
