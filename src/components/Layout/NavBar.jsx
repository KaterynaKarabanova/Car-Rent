import { StyledNsvLink } from './Layout.styled';
import LanguageSwitcher from '../LanguageSwitcher/LanguageSwitcher';
import { useTranslation } from 'react-i18next';

export const NavBar = ({ setOpenMenu }) => {
  const { t } = useTranslation();
  return (
    <>
      <StyledNsvLink key={'/'} to={'/'} onClick={() => setOpenMenu(false)}>
        {t('navHome')}
      </StyledNsvLink>

      <StyledNsvLink
        key={'/catalog'}
        to={'/catalog'}
        onClick={() => setOpenMenu(false)}
      >
        {t('navCatalog')}
      </StyledNsvLink>

      <StyledNsvLink
        key={'/favorites'}
        to={'/favorites'}
        onClick={() => setOpenMenu(false)}
      >
        {t('navFav')}
      </StyledNsvLink>

      <StyledNsvLink
        key={'/cooperation'}
        to={'/cooperation'}
        onClick={() => setOpenMenu(false)}
      >
        {t('cooperation')}
      </StyledNsvLink>
      <LanguageSwitcher />
    </>
  );
};
