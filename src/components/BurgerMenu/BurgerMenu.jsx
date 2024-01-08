import LanguageSwitcher from 'components/LanguageSwitcher/LanguageSwitcher';
import { StyledNsvLink } from 'components/Layout/Layout.styled';
import { useTranslation } from 'react-i18next';
import { StyledMenuDiv, StyledMenuImg } from './BurgerMenu.styled';
import { StyleSvg } from 'components/Modal/Modal.styled';

const BurgerMenu = ({ setOpenMenu }) => {
  const { t } = useTranslation();
  return (
    <StyledMenuDiv>
      <StyleSvg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        onClick={() => setOpenMenu(false)}
      >
        <path
          d="M18 6L6 18"
          stroke="#121417"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M6 6L18 18"
          stroke="#121417"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </StyleSvg>
      <StyledMenuImg
        src="https://static.vecteezy.com/system/resources/previews/013/923/537/original/red-car-vehicle-auto-detailing-logo-png.png"
        alt=""
      />
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
    </StyledMenuDiv>
  );
};

export default BurgerMenu;
