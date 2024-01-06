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

export const StyledLink = styled.a`
  width: 50px;
  height: 50px;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  &:hover {
    background-color: #f1ff97;
  }
`;
export const StyledImage = styled.img`
  width: 30px;
  height: 30px;
`;

export const StyledLinkDiv = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
export const StyledText = styled.div`
  font-size: 18px;
  font-weight: 500;
  margin-bottom: 20px;
`;

export const StyledList = styled.ul`
  margin-bottom: 30px;
  padding: 0 80px;
  font-size: 16px;
  letter-spacing: 0.7px;
  display: flex;
  flex-direction: column;
  gap: 5px;
`;
