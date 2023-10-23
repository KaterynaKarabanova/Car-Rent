import React from 'react';
import { Outlet } from 'react-router-dom';
import { NavBar } from './NavBar';
import { StyledMain } from './Layout.styled';

export const Layout = () => {
  return (
    <main>
      <StyledMain>
        <NavBar />
      </StyledMain>
      <div>
        <Outlet />
      </div>
    </main>
  );
};
