import React from 'react';
import {
  withRouter,
} from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as ShopActions from './actions';
import Routes from './Routes';
import Header from './components/header/Header';
import './App.css';

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(ShopActions, dispatch)
});

const mapStateToProps = state => {
  const { products, cart } = state;
  return {
    products,
    cart,
    cartCount: cart.length,
  }
 }

const App = ({ cartCount, actions, ...rest }) => {
  const childProps = {...rest};
  return <main>
    <Header cartCount={cartCount}/>
    <Routes actions={actions} childProps={childProps} />
  </main>;
}
const connectedApp = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

export default withRouter(connectedApp);
