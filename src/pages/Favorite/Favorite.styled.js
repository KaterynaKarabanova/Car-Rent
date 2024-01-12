import styled from 'styled-components';
export const StyledMainTitle = styled.h2`
  text-align: center;
  font-weight: 500;
  font-size: 24px;
  margin-bottom: 0;
  @media (min-width: 768px) {
    font-size: 28px;
  }
  @media (min-width: 1280px) {
    font-size: 32px;
  }
`;

export const StyledTitle = styled(StyledMainTitle)`
  font-size: 14px;
  letter-spacing: 0.6px;
  margin-bottom: 30px;
  @media (min-width: 768px) {
    font-size: 18px;
  }
  @media (min-width: 1280px) {
    font-size: 22px;
    margin-bottom: 50px;
  }
`;
