import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Outlet, NavLink } from 'react-router-dom';
import Navbar from './Navbar';

const SharedLayout = () => {
  const navbar = {
    padding: '1rem',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: '8rem auto',
    width: '50%',
    maxWidth: '80%',
  };
  return (
    <>
      <div style={navbar}>
        <h1>
          <NavLink to="/" className="heading">
            Math magicians
          </NavLink>
        </h1>
        <Navbar />
      </div>
      <Outlet />
    </>
  );
};

export default SharedLayout;
