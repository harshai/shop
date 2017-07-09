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
      <NavLink
        activeClassName="link--highlight"
        className="link link--shake"
        to="/cart">Cart ({cartCount})
      </NavLink>
    </nav>
  <style>{`
    /*
      * Doing a quick and dirty animation inline instead on loading something bloated like CSSAnimationGroup
      * Will probably go for a full blown animation library in a real life project.
    */
    .link--shake {
      animation-name: shake-${cartCount || 'x'}; /* don't animate empty cart */
      animation-duration: 500ms;
    }

    @keyframes shake-${cartCount} {
      10%, 90% {
        transform: translate3d(-1px, 0, 0);
      }

      20%, 80% {
        transform: translate3d(2px, 0, 0);
      }

      30%, 50%, 70% {
        transform: translate3d(-4px, 0, 0);
      }

      40%, 60% {
        transform: translate3d(4px, 0, 0);
      }
    }
  `} </style>
  </header>
);

Header.PropTypes = {
  cartCount: PropTypes.number.isRequired,
};

export default Header;
