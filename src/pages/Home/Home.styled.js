import { StyledBack } from 'pages/Catalog/Catalog.styled';
import styled from 'styled-components';
export const StyledHomeBack = styled(StyledBack)`
  height: 520px;
  display: block;
  position: relative;
  padding: 0;

  &::before {
    content: '';
    display: block;

    width: 100%;
    height: 220px;
    background-color: white;
    position: absolute;
    top: 320px;
    left: 0px;
    border-radius: 10rem 10rem 0 0;
  }
  @media (min-width: 768px) {
    &::before {
      display: none;
    }

    height: auto;
    padding: 0 0 100px 0;
  }
  @media (min-width: 1280px) {
    display: flex;
    height: calc(100vh - 70px);
  }
`;
export const StyledSwiperDiv = styled.div`
  position: absolute;
  width: 100%;
  overflow-x: hidden;
  top: 315px;
  left: 42px;
  @media (min-width: 768px) {
    top: 120px;
    left: 310px;
  }
  @media (min-width: 1280px) {
    position: relative;
    padding-top: 190px;
    top: 0px;
    left: 0px;
  }
  @media (min-width: 1480px) {
    padding-top: 120px;
  }
`;
export const StyledSwiperImg = styled.img`
  width: 160px;
  margin-top: 10px;
  margin-left: 10px;
  @media (min-width: 768px) {
    width: 460px;
    margin: 0;
  }
  @media (min-width: 1280px) {
    width: 500px;
  }
  @media (min-width: 1480px) {
    width: 590px;
  }
`;
export const StyledDiv = styled.div`
  background-color: white;
  width: 350px;
  padding-bottom: 20px;
  @media (min-width: 768px) {
    height: 400px;
  }
  @media (min-width: 1280px) {
    height: 900px;
    padding-right: 150px;
    padding-top: 100px;
    border-left: 2px solid black;
    width: 510px;
    background-color: white;
    padding-left: 20px;
  }
`;

export const StyledTitle = styled.h2`
  font-size: 20px;
  margin: 0;
  text-decoration: overline;
  padding: 10px;

  @media (min-width: 768px) {
    font-size: 30px;
    margin-bottom: 15px;
  }
  @media (min-width: 1280px) {
    font-size: 45px;
    margin-bottom: 70px;
  }
`;
export const StyledMainTitle = styled.h1`
  font-size: 16px;
  margin: 0;

  padding: 10px;
  @media (min-width: 768px) {
    font-size: 18px;
  }
  @media (min-width: 1280px) {
    font-size: 25px;
  }
`;
export const StyledText = styled.p`
  font-size: 13px;
  margin: 0;
  line-height: 1.3;
  letter-spacing: 0.7px;
  font-weight: 500;
  width: 240px;
  padding: 10px;
  @media (min-width: 768px) {
    font-size: 14px;
    width: 250px;
  }
  @media (min-width: 1280px) {
    font-size: 20px;
    width: 490px;
    margin-bottom: 40px;
    letter-spacing: 1px;
  }
`;

export const StyledLink = styled.button`
  width: 210px;
  height: 45px;
  color: black;
  font-size: 15px;
  font-weight: 600;
  text-decoration: none;
  margin-left: 10px;
  margin-top: 20px;
  border: 10px double black;
  background-color: white;
  transition: 0.55s;
  letter-spacing: 1.3px;
  display: block;
  &:hover,
  &:focus {
    background-color: black;
    color: #fff;
    border-color: white;
  }
  @media (min-width: 768px) {
    width: 200px;
    height: 50px;
    font-size: 18px;
    margin-top: 10px;
  }
  @media (min-width: 1280px) {
    width: 200px;
    height: 60px;
    font-size: 20px;
  }
`;
export const StyledSvgDiv = styled.div`
  position: absolute;
  top: 480px;
  left: 70px;
  width: 100px;

  display: flex;
  align-items: center;
  justify-content: space-between;
  @media (min-width: 768px) {
    top: 459px;
    left: 35px;
    width: 140px;
  }
  @media (min-width: 1280px) {
    top: 510px;
    left: 150px;
    width: 100px;
  }
  @media (min-width: 1480px) {
    left: 220px;
    top: 700px;
  }
`;
export const StyledSwipeText = styled.p`
  font-size: 18px;
  margin: 0;
  line-height: 1.3;
  letter-spacing: 3px;

  font-weight: 700;
  color: black;
  @media (min-width: 768px) {
    font-size: 30px;
    color: white;
    font-weight: 600;
  }
  @media (min-width: 1280px) {
    font-size: 17px;
    font-weight: 500;
    letter-spacing: 1px;
  }
  @media (min-width: 1480px) {
    font-size: 22px;
  }
`;
export const StyledSwipePrice = styled.p`
  position: absolute;
  right: 310px;
  top: 0px;
  font-size: 15px;
  margin: 0;
  line-height: 1.3;
  letter-spacing: 1px;
  font-weight: 700;
  @media (min-width: 768px) {
    right: 30px;
    top: 0px;
    font-size: 20px;
    font-weight: 600;
    color: white;
  }
  @media (min-width: 1280px) {
    right: 80px;
    top: 0px;
    font-size: 24px;
    color: white;
  }
`;
export const StyledSwipeModel = styled.p`
  font-size: 15px;
  margin: 0;
  line-height: 1.3;
  letter-spacing: 3px;
  font-weight: 500;
  color: black;
  position: absolute;
  left: 20px;
  top: 110px;
  @media (min-width: 768px) {
    left: 150px;
    color: white;
    top: 290px;
    font-size: 20px;
  }
  @media (min-width: 1280px) {
    top: 360px;
    left: 120px;
    color: white;
    font-weight: 400;
  }
  @media (min-width: 1480px) {
    top: 450px;
    left: 180px;
    font-size: 25px;
    letter-spacing: 4px;
  }
`;

export const StyledSvg = styled.svg`
  height: 30px;
  width: 30px;
`;
