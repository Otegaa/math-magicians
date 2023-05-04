import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { NavLink } from 'react-router-dom';

const Navbar = () => (
  <nav className="navbar">
    <NavLink to="/">Home</NavLink>
    <NavLink to="/calculator">Calculator</NavLink>
    <NavLink to="/quotes">Quotes</NavLink>
  </nav>
);

export default Navbar;
