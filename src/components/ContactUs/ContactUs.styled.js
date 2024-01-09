import styled from 'styled-components';
export const StyledDiv = styled.div`
  display: none;
  box-sizing: border-box;
  @media (min-width: 1280px) {
    display: block;
    position: fixed;
    height: 100vw;
    z-index: 2;
    width: 350px;
    right: 5%;
    background-color: #ba000d;
    top: 0;
    color: white;
    padding: 180px 15px;
    text-align: center;
  }
`;
export const StyledFooter = styled.footer`
  box-sizing: border-box;
  background: #880d00;
  width: 100%;
  text-align: center;
  color: white;
  border-top: 2px solid black;
  margin-top: 60px;
`;
export const StyledFooterDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5px 10px;
  @media (min-width: 768px) {
    align-items: flex-start;
    flex-direction: row;
    justify-content: space-between;
    height: 270px;
    padding: 15px 40px;
  }
`;
export const StyledLink = styled.a`
  width: 40px;
  height: 40px;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  &:hover {
    background-color: #f1ff97;
  }
  @media (min-width: 768px) {
    width: 50px;
    height: 50px;
  }
  @media (min-width: 1280px) {
    width: 70px;
    height: 70px;
  }
`;
export const StyledImage = styled.img`
  width: 20px;
  height: 20px;
  @media (min-width: 768px) {
    width: 30px;
    height: 30px;
  }
  @media (min-width: 1280px) {
    width: 50px;
    height: 50px;
  }
`;

export const StyledLinkDiv = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
export const StyledText = styled.p`
  font-size: 14px;
  font-weight: 500;
  margin-bottom: 10px;
  @media (min-width: 768px) {
    font-size: 17px;
    font-weight: 500;
    margin-bottom: 20px;
  }
  @media (min-width: 1280px) {
    font-size: 20px;
    font-weight: 500;
    margin-bottom: 20px;
  }
`;

export const StyledList = styled.ul`
  margin-bottom: 15px;
  padding: 0 30px;
  font-size: 14px;
  letter-spacing: 0.7px;
  display: flex;
  flex-direction: column;
  gap: 5px;
  @media (min-width: 768px) {
    font-size: 16px;
    margin-bottom: 30px;
  }
  @media (min-width: 1280px) {
    font-size: 18px;
  }
`;
export const StyledFollowDiv = styled.div`
  @media (min-width: 768px) {
    max-width: 300px;
  }
  @media (min-width: 1280px) {
    max-width: 600px;
  }
`;
export const StyledTitle = styled.h3`
  font-size: 20px;
  @media (min-width: 768px) {
    font-size: 25px;
  }
  @media (min-width: 1280px) {
    font-size: 30px;
  }
`;
