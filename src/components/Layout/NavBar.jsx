import { NavLink } from 'react-router-dom';

export const NavBar = () => {
  return (
    <nav>
      <NavLink key={'/'} to={'/'}>
        Home
      </NavLink>

      <NavLink key={'/catalog'} to={'/catalog'}>
        Catalog
      </NavLink>

      <NavLink key={'/favorites'} to={'/favorites'}>
        Favorites
      </NavLink>
    </nav>
  );
};
