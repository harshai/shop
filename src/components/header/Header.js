import React from 'react';
import PropTypes from 'prop-types';
import {
  NavLink,
} from 'react-router-dom';
import './header.css';

const Header = ({ count }) => (
  <header className="header">
    <nav className="header__nav">
      <NavLink exact activeClassName="link--highlight" className="link" to="/">Home</NavLink>
      <NavLink activeClassName="link--highlight" className="link" to="/cart">Cart ({count})</NavLink>
    </nav>
  </header>
);

Header.PropTypes = {
  count: PropTypes.number.isRequired,
};

export default Header;
