import React from 'react';
import Loadable from 'react-loadable';
import LoadingIndicator from './components/loadingIndicator/LoadingIndicator';
import { Route, Switch } from 'react-router-dom';

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

const Routes = ({ childProps }) => (
  <Switch>
    <AppliedRoute exact path="/" component={AsyncProductsListing} props={childProps} />
    <AppliedRoute exact path="/cart" component={AsyncCart} props={childProps} />
    <AppliedRoute exact path="/products/:id" component={AsyncProductDetails} props={childProps} />
    <Route component={AsyncNotFound} />
  </Switch>
);

export default Routes;
