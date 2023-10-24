import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const StyledMain = styled.main`
  background-color: white;
  height: 70px;
`;

export const StyledNsvLink = styled(NavLink)`
  padding: 5px;
  margin: 20px 30px;
  font-size: 25px;
  font-weight: 600;

  text-decoration: none;
  color: black;

  &.active {
    border-bottom: 2px solid black;
    /* color: white; */
  }
  &:hover:not(.active) {
    border-bottom: 2px solid #7185f65e;
  }
`;
