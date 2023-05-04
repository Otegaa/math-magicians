import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';

const SharedLayout = () => (
  <>
    <div className="shared-layout">
      <h1>Math magicians</h1>
      <Navbar />
    </div>
    <Outlet />
  </>
);

export default SharedLayout;
