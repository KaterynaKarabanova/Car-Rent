import { StyledBack } from 'pages/Catalog/Catalog.styled';
import styled from 'styled-components';
export const StyledDiv = styled.div`
  margin-right: 170px;
  padding-top: 100px;
  border-left: 2px solid black;

  padding-left: 50px;
`;

export const StyledTitle = styled.h2`
  font-size: 45px;
  margin: 0;
  text-decoration: overline;
  padding: 10px;
  margin-bottom: 70px;
`;
export const StyledMainTitle = styled.h1`
  font-size: 25px;
  margin: 0;

  padding: 10px;
`;
export const StyledText = styled.p`
  font-size: 20px;
  margin: 0;
  line-height: 1.3;
  letter-spacing: 1px;
  font-weight: 500;
  width: 490px;
  padding: 10px;
  margin-bottom: 40px;
`;

export const StyledLink = styled.button`
  width: 200px;
  height: 60px;
  color: black;
  font-size: 20px;
  font-weight: 600;
  text-decoration: none;
  margin-left: 10px;
  margin-top: 30px;
  border: 10px double black;
  background-color: white;
  transition: 0.55s;
  letter-spacing: 1.3px;

  &:hover,
  &:focus {
    background-color: black;
    color: #fff;
    border-color: white;
  }
`;
export const StyledSvgDiv = styled.div`
  position: absolute;
  top: 600px;
  left: 200px;
  width: 100px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const StyledSwipeText = styled.p`
  font-size: 17px;
  margin: 0;
  line-height: 1.3;
  letter-spacing: 1px;
  font-weight: 500;
  color: white;
`;
export const StyledSwipePrice = styled.p`
  position: absolute;
  right: 50px;
  top: -80px;
  font-size: 24px;
  margin: 0;
  line-height: 1.3;
  letter-spacing: 1px;
  font-weight: 500;
`;
export const StyledSwipeModel = styled.p`
  font-size: 20px;
  margin: 0;
  line-height: 1.3;
  letter-spacing: 4px;
  font-weight: 400;
  color: white;
  position: absolute;
  right: 400px;
  top: 400px;
`;
export const StyledHomeBack = styled(StyledBack)`
  height: calc(100vh - 70px);
  display: flex;
  position: relative;
`;
export const StyledSvg = styled.svg`
  height: 30px;
  width: 30px;
`;
