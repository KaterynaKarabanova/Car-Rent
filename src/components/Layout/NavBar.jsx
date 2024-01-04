import { StyledBack } from 'pages/Catalog/Catalog.styled';

import { StyledNsvLink } from './Layout.styled';
import LanguageSwitcher from './LanguageSwitcher';
import { useTranslation } from 'react-i18next';

export const NavBar = () => {
  const { t } = useTranslation();
  return (
    <StyledBack
      style={{
        padding: '20px 10px',
      }}
    >
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
    </StyledBack>
  );
};
