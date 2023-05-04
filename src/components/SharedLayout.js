import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';

const SharedLayout = () => (
  <>
    <Navbar />
    <Outlet />
  </>
);

export default SharedLayout;
