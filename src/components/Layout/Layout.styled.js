import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const StyledMain = styled.main`
  background-color: white;
  height: 70px;
`;

export const StyledNsvLink = styled(NavLink)`
  padding: 5px;
  margin: 0;
  margin-right: 15px;
  font-size: 16px;
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
  @media (min-width: 768px) {
    font-size: 21px;
    margin: 0;
    margin-right: 30px;
  }
  @media (min-width: 1280px) {
    font-size: 25px;
  }
`;
