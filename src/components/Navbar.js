import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const navbar = {
    display: 'flex',
    gap: '1rem',
    fontSize: '1.7rem',
  };
  return (
    <nav style={navbar}>
      <NavLink
        to="/"
        style={({ isActive }) => ({ color: isActive ? 'red' : 'grey' })}
      >
        Home
      </NavLink>

      <span>|</span>

      <NavLink
        to="/calculator"
        style={({ isActive }) => ({ color: isActive ? 'red' : 'grey' })}
      >
        Calculator
      </NavLink>

      <span>|</span>

      <NavLink
        to="/quotes"
        style={({ isActive }) => ({ color: isActive ? 'red' : 'grey' })}
      >
        Quotes
      </NavLink>
    </nav>
  );
};

export default Navbar;
