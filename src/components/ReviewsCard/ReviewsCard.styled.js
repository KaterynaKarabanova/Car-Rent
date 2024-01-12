import styled from 'styled-components';
export const StyledWrapper = styled.div`
  width: 200px;
  height: 310px;
  overflow: hidden;
  padding: 5px 10px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.15);
  @media (min-width: 1280px) {
    width: 260px;
    height: 320px;
  }
`;
export const StyledImg = styled.img`
  object-fit: cover;
  width: 100%;
  height: 150px;
  @media (min-width: 1280px) {
    height: 180px;
  }
`;
export const StyledDate = styled.p`
  color: gray;
  font-size: 12px;
  font-weight: 500;
`;
export const StyledComment = styled.p`
  font-size: 14px;
`;
