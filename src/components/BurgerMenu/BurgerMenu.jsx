import { StyledMenuDiv, StyledMenuImg } from './BurgerMenu.styled';
import { StyleSvg } from 'components/Modal/Modal.styled';
import { NavBar } from 'components/Layout/NavBar';

const BurgerMenu = ({ setOpenMenu }) => {
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
      <NavBar setOpenMenu={setOpenMenu}></NavBar>
    </StyledMenuDiv>
  );
};

export default BurgerMenu;
