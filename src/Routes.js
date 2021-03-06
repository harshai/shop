import React from 'react';
import Loadable from 'react-loadable';
import LoadingIndicator from './components/loadingIndicator/LoadingIndicator';
import { Route, Switch } from 'react-router-dom';
import { Redirect } from 'react-router';

const AsyncProductsListing = Loadable({
  loader: () => import('./containers/productListings/ProductListings'),
  loading: LoadingIndicator,
  delay: 100,
});

const AsyncProductDetails = Loadable({
  loader: () => import('./containers/productDetails/ProductDetails'),
  loading: LoadingIndicator,
  delay: 100,
});

const AsyncCart = Loadable({
  loader: () => import('./containers/cart/Cart'),
  loading: LoadingIndicator,
  delay: 100,
});

const AsyncNotFound = Loadable({
  loader: () => import('./containers/notFound/NotFound'),
  loading: LoadingIndicator,
  delay: 100,
});

const AppliedRoute = ({ component: C, props: cProps, ...rest }) =>  (
  <Route render={ props => <C {...props} {...cProps} /> } {...rest} />
);

const Routes = ({ childProps, actions }) => {
  const productListingProps = {
    filters: childProps.filters,
    filtersMeta: childProps.filtersMeta,
    isFetchingFilters: childProps.isFetchingFilters,
    filteredProducts: childProps.filteredProducts,
    isFetchingProducts: childProps.isFetchingProducts,
    // Actions
    addToCart: actions.addToCart,
    fetchProducts: actions.fetchProducts,
    fetchFiltersMeta: actions.fetchFiltersMeta,
    setFilters: actions.setFilters,
  }
  const cartProps = {
    cart: childProps.cart,
    cartProducts: childProps.cartProducts,
    fetchCartProducts: actions.fetchCartProducts,
    isFetchingCartProducts: childProps.isFetchingCartProducts
  }
  const productDetailsProps = {
    fetchProductDetails: actions.fetchProductDetails,
    isFetchingProductDetails: childProps.isFetchingProductDetails,
    productDetails: childProps.productDetails,
    addToCart: actions.addToCart,
  }
  return(
    <Switch>
      <AppliedRoute exact path="/" component={AsyncProductsListing} props={productListingProps} />
      <AppliedRoute exact path="/cart" component={AsyncCart} props={cartProps} />
      <AppliedRoute exact path="/products/:id" component={AsyncProductDetails} props={productDetailsProps} />
      <AppliedRoute exact path="/not-found" component={AsyncNotFound} />
      <Redirect to="/not-found" component={AsyncNotFound} />
    </Switch>
  )
};

export default Routes;
