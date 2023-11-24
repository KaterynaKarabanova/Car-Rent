import {
  StyledMainTitle,
  StyledText,
  StyledTitle,
} from 'pages/Home/Home.styled';
import styled from 'styled-components';
export const StyledMain = styled.div`
  height: 100vh;
  display: none;
  @media (min-width: 1280px) {
    display: flex;
    gap: 55px;
    width: 1490px;
    margin: 0 auto;
  }
`;
export const StyledWrapper = styled.div`
  display: flex;
  margin-top: 230px;
  height: 400px;
  padding-top: 40px;
  padding-right: 55px;
  position: relative;
  &::after {
    content: '';
    display: block;
    height: 100vh;
    width: 2px;
    background-color: white;
    position: absolute;
    top: -230px;
    right: 0;
  }
`;
export const StyledDesc = styled.div`
  background-color: white;
  position: relative;
  padding: 30px 0 0 30px;
  &::before {
    content: '';
    display: block;
    height: 2px;
    width: 1040px;
    background-color: white;
    position: absolute;
    top: 0;
    left: 450px;
  }
`;
export const StyledDiv = styled.div`
  outline: black 30px solid;
  border-radius: 14px;
  margin: 40px 40px;
`;
export const StyledList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 20px 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const StyledButton = styled.button`
  font-size: 1.2em;
  background-color: #840909;
  display: inline-block;
  cursor: pointer;
  text-decoration: none;
  color: white;
  text-align: center;
  border: #fefefe 4px solid;
  border-radius: 0.25em;
  width: 120px;
  height: 70px;
  text-shadow: 0 0 0.125em rgba(255, 255, 255, 0.55), 0 0 0.5em currentColor;
  margin: 0;
  box-shadow: inset 0 0 0.5em 0 rgb(255 255 255), 0 0 0.5em 0 rgb(255 255 255);
  position: relative;
  &::before {
    pointer-events: none;
    content: '';
    position: absolute;
    background: transparent;
    top: -30px;

    left: -5px;
    width: 100%;
    height: 100%;

    transform: perspective(2em) rotateX(90deg) scale(0.4, 0.8);
    filter: blur(1.15em);
    opacity: 0.7;

    transition: transform 0.15s linear;
  }
  &:hover::before {
    opacity: 1;
    transform: perspective(1em) rotateX(40deg) scale(0.7, 0.3);
    transition: transform 0.5s linear;
    background-color: white;
  }
  &:focus::before {
    opacity: 1;
    transform: perspective(1em) rotateX(40deg) scale(0.7, 0.3);
    transition: transform 0.5s linear;
    background-color: white;
  }
  &::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    box-shadow: 0 0 4em 0.6em rgba(235, 97, 143, 1),
      0 0 1em 0.2em rgba(255, 255, 255, 1);
    opacity: 0;
    background: rgba(235, 97, 143, 1);
    z-index: -1;
    transition: opacity 0.5s linear;
  }
  &:hover::after {
    opacity: 1;
  }
  &:focus::after {
    opacity: 1;
  }
  &:hover {
    color: rgba(1, 1, 1, 1);
    text-shadow: none;
    font-weight: 700;
    font-size: 22px;
  }
  &:focus {
    color: rgba(1, 1, 1, 1);
    text-shadow: none;
    font-weight: 700;
    font-size: 22px;
    background-color: #fefefe;
  }
`;

export const StyledActiveCar = styled(StyledButton)`
  color: rgba(1, 1, 1, 1);
  text-shadow: none;
  font-weight: 700;
  font-size: 22px;
  background-color: #fefefe;
`;

export const StyledMainTitl = styled(StyledMainTitle)``;
export const StyledTitl = styled(StyledTitle)``;
export const StyledCarText = styled(StyledText)`
  width: 410px;
`;
