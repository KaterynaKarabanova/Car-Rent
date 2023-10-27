import React from 'react';
import { Outlet } from 'react-router-dom';
import { NavBar } from './NavBar';
import { StyledMain } from './Layout.styled';
import { Suspense } from 'react';

const Layout = () => {
  return (
    <main>
      <StyledMain>
        <NavBar />
      </StyledMain>
      <div>
        <Suspense
          fallback={
            <div
              style={{
                fontSize: '30px',
                textAlign: 'center',
              }}
            >
              {' '}
              Information is already on its way to you. Please wait...
            </div>
          }
        >
          <Outlet />
        </Suspense>
      </div>
    </main>
  );
};
export default Layout;
