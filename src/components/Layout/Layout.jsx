import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { NavBar } from './NavBar';
import {
  StyledImg,
  StyledMain,
  StyledMenu,
  StyledNavLinkDiv,
} from './Layout.styled';
import { Suspense } from 'react';
import BurgerMenu from 'components/BurgerMenu/BurgerMenu';

import ContactUs from 'components/ContactUs/ContactUs';
import { StyledFooter } from 'components/ContactUs/ContactUs.styled';

const Layout = () => {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <main>
      <StyledMain>
        <StyledMenu onClick={() => setOpenMenu(!openMenu)}>
          <StyledImg
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/1024px-Hamburger_icon.svg.png"
            alt=""
          />
        </StyledMenu>
        {openMenu && <BurgerMenu setOpenMenu={setOpenMenu} />}
        <StyledNavLinkDiv>
          <NavBar setOpenMenu={setOpenMenu} />
        </StyledNavLinkDiv>
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

      <StyledFooter>
        <ContactUs />
      </StyledFooter>
    </main>
  );
};
export default Layout;
