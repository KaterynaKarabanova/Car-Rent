import styled from 'styled-components';

export const StyledBtn = styled.button`
  box-sizing: border-box;
  display: block;
  height: 40px;
  /* width: 50%; */
  background-color: #ba000d;
  text-align: center;
  pad: 10px;
  color: white;
  font-size: 18px;
  font-weight: 500;
  letter-spacing: 0.7px;
  border-radius: 10px;
  border: none;
  padding: 10px 30px;
  margin-top: 20px;
  @media (min-width: 768px) {
    font-size: 20px;
    padding: 10px 50px;
  }
`;

export const StyledTitle = styled.h2`
  font-size: 27px;
  color: #880d00;
  letter-spacing: 0.6px;
  @media (min-width: 768px) {
    font-size: 32px;
  }
  @media (min-width: 1280px) {
    font-size: 40px;
  }
`;
export const StyledUnderTitle = styled(StyledTitle)`
  text-decoration: overline;
`;
export const StyledText = styled.p`
  font-size: 14px;
  letter-spacing: 0.3px;
  font-weight: 500;
  @media (min-width: 768px) {
    font-size: 20px;
    max-width: 600px;
  }
  @media (min-width: 1280px) {
    font-size: 25px;
    max-width: 900px;
  }
`;
