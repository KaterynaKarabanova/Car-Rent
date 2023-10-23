import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const StyledMain = styled.main`
  background-color: #d4e1ff;
  height: 70px;
`;

export const StyledNsvLink = styled(NavLink)`
  padding: 5px;
  margin: 20px 30px;
  font-size: 25px;
  font-weight: 600;
  border-radius: 4px;
  text-decoration: none;
  color: black;

  &.active {
    background-color: #4864ff;
    color: white;
  }
  &:hover:not(.active) {
    background-color: #7185f65e;
  }
`;
