import { StyledInfoDiv } from 'pages/Catalog/Catalog.styled';
import styled from 'styled-components';

export const StyledBack = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: rgba(18, 20, 23, 0.5);
`;

export const StyledDiv = styled.div`
  border-radius: 24px;
  background: #fff;
  width: 469px;
  padding: 37px;
  height: 680px;
  position: relative;
  margin: auto;
  margin-top: calc((100vh - 670px - 70px) / 2);
`;

export const StyleSvg = styled.svg`
  position: absolute;
  right: 15px;
  top: 15px;
  height: 24px;
  width: 24px;
`;

export const StyleImg = styled.img`
  border-radius: 16px;
  margin-bottom: 16px;
  width: 469px;
  height: 280px;
`;

export const StyleRentalP = styled.p`
  color: #363535;
  margin: 0;
  font-size: 12px;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: -0.24px;
  display: flex;
  padding: 7px 14px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 35px;
  background: #f9f9f9;
`;

export const StyleRentalSpan = styled.span`
  color: #3470ff;
  font-weight: 600;
`;

export const StyledRentalDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin: 0;
`;
export const StyledModalDiv = styled(StyledInfoDiv)`
  max-height: 55px;
`;
export const StyledTitle = styled.h2`
  color: #121417;
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  width: 100%;
  margin: 0;
  padding: 0;
`;

export const StyledLink = styled.a`
  text-decoration: none;
  font-size: 14px;
  font-weight: 600;
  line-height: 20px;
  width: 68px;
  height: 20px;
  border-radius: 12px;
  background: #3470ff;
  color: white;
  outline: none;
  display: block;

  border-color: transparent;
  padding: 12px 40px;
`;
