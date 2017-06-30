import React, { Component } from 'react';
import {
  withRouter,
} from 'react-router-dom';
import Routes from './Routes';
import Header from './components/header/Header';
import './App.css';

const childProps = {
  salutation: 'Hello',
  object: 'World'
};

class App extends Component {
  render() {
    return (<main>
      <Header count={1}/>
      <Routes childProps={childProps} />
    </main>);
  }
}

export default withRouter(App);
