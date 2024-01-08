import { StyledBack } from 'pages/Catalog/Catalog.styled';

import {
  StyledImg,
  StyledMenu,
  StyledNavLinkDiv,
  StyledNsvLink,
} from './Layout.styled';
import LanguageSwitcher from '../LanguageSwitcher/LanguageSwitcher';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import BurgerMenu from 'components/BurgerMenu/BurgerMenu';

export const NavBar = () => {
  const { t } = useTranslation();
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <StyledBack
      style={{
        padding: '20px 10px',
      }}
    >
      <StyledMenu onClick={() => setOpenMenu(!openMenu)}>
        <StyledImg
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/1024px-Hamburger_icon.svg.png"
          alt=""
        />
      </StyledMenu>
      {openMenu && <BurgerMenu setOpenMenu={setOpenMenu} />}
      <StyledNavLinkDiv>
        <StyledNsvLink key={'/'} to={'/'}>
          {t('navHome')}
        </StyledNsvLink>

        <StyledNsvLink key={'/catalog'} to={'/catalog'}>
          {t('navCatalog')}
        </StyledNsvLink>

        <StyledNsvLink key={'/favorites'} to={'/favorites'}>
          {t('navFav')}
        </StyledNsvLink>

        <StyledNsvLink key={'/cooperation'} to={'/cooperation'}>
          {t('cooperation')}
        </StyledNsvLink>
        <LanguageSwitcher />
      </StyledNavLinkDiv>
    </StyledBack>
  );
};
