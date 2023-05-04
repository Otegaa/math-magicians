import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { NavLink } from 'react-router-dom';

const Navbar = () => (
  <nav className="navbar">
    <NavLink to="/">Home</NavLink>
    <NavLink to="/">Calculator</NavLink>
    <NavLink to="/">Quotes</NavLink>
  </nav>
);

export default Navbar;
