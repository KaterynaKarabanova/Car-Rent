import { StyledBack } from 'pages/Catalog/Catalog.styled';
import { NavLink } from 'react-router-dom';
import { StyledNsvLink } from './Layout.styled';

export const NavBar = () => {
  return (
    <StyledBack
      style={{
        padding: '20px 10px',
      }}
    >
      <StyledNsvLink key={'/'} to={'/'}>
        Home
      </StyledNsvLink>

      <StyledNsvLink key={'/catalog'} to={'/catalog'}>
        Catalog
      </StyledNsvLink>

      <StyledNsvLink key={'/favorites'} to={'/favorites'}>
        Favorites
      </StyledNsvLink>
    </StyledBack>
  );
};
