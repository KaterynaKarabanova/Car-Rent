import React from 'react';
import { Outlet } from 'react-router-dom';
import { NavBar } from './NavBar';

export const Layout = () => {
  return (
    <main>
      <main>
        <NavBar />
      </main>
      <div>
        <Outlet />
      </div>
    </main>
  );
};
