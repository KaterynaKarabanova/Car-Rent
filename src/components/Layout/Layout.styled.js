import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const StyledMain = styled.main`
  box-sizing: border-box;
  background-color: white;
  height: 70px;
  padding: 20px 40px;
  border-bottom: 2px solid #ba000d;
`;

export const StyledNsvLink = styled(NavLink)`
  padding: 5px;
  margin: 0;
  margin-right: 15px;
  font-size: 15px;
  font-weight: 600;
  color: black;
  text-decoration: none;
  &.active {
    border-bottom: 2px solid black;
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

export const StyledMenu = styled.button`
  height: 30px;
  width: 30px;
  padding: 0;
  border: none;
  background-color: transparent;
  position: absolute;
  right: 10px;
  @media (min-width: 1280px) {
    display: none;
  }
`;
export const StyledImg = styled.img`
  object-fit: contain;
  height: 30px;
  width: 30px;
`;
export const StyledNavlink = styled(NavLink)`
  @media (min-width: 1280px) {
    display: none;
  }
`;
export const StyledNavlinkImg = styled.img`
  position: absolute;
  left: 20px;
  top: -8px;
`;

export const StyledNavLinkDiv = styled.div`
  display: none;
  @media (min-width: 1280px) {
    display: block;
    color: black;
  }
`;
