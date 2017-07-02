import React from 'react';
import PropTypes from 'prop-types';
import {
  NavLink,
} from 'react-router-dom';
import './header.css';

const Header = ({ cartCount }) => (
  <header className="header">
    <nav className="header__nav">
      <NavLink exact activeClassName="link--highlight" className="link" to="/">Home</NavLink>
      <NavLink activeClassName="link--highlight" className="link" to="/cart">Cart ({cartCount})</NavLink>
    </nav>
  </header>
);

Header.PropTypes = {
  cartCount: PropTypes.number.isRequired,
};

export default Header;
