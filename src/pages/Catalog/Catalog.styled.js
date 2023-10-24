import styled from 'styled-components';
export const StyledBack = styled.div`
  margin: 0 auto;
  width: 1480px;
`;
export const StyledList = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  list-style: none;
  padding: 20px;
  column-gap: 10px;
  row-gap: 50px;
`;
export const StyledItem = styled.li`
  width: 274px;
  padding: 0;
  height: 450px;
  position: relative;
  border-radius: 14px;
`;
export const StyledImg = styled.img`
  width: 100%;
  height: 268px;
  border-radius: 16px;
`;
export const StyledBtn = styled.button`
  display: flex;
  width: 274px;
  height: 44px;
  padding: 12px 90px;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  background: #3470ff;
  color: white;
  outline: none;
  border-color: transparent;
  font-size: 14px;
  font-weight: 600;
  line-height: 20px;
`;
export const StyledInfoDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  flex-wrap: wrap;
  overflow-y: scroll;
  display: flex;
  height: 55px;
  align-items: flex-start;
  gap: 4px;
  margin-bottom: 28px;
  &::-webkit-scrollbar-thumb {
    background-color: #3470ff;
  }
  &::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  }
  &::-webkit-scrollbar {
    width: 0em;
  }
`;
export const StyledInfoText = styled.p`
  margin: 0;
  padding: 0;
  color: rgba(18, 20, 23, 0.5);
  font-size: 12px;
  font-weight: 400;
  line-height: 18px;
  &::after {
    content: '';
    display: inline-block;
    width: 1px;
    height: 16px;
    background-color: rgba(18, 20, 23, 0.1);
    margin: 0 6px;
  }
`;
export const StyledSvg = styled.svg`
  position: absolute;
  right: 20px;
  top: 10px;
`;
export const StyledText = styled.p`
  margin: 0;
  padding: 0;
  color: #121417;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  margin-bottom: 8px;
  position: relative;
`;
export const StyledSpan = styled.span`
  color: #3470ff;
  margin: 0 3px;
`;
export const StyledInput = styled.input`
  max-width: 80px;
  height: 20px;
  padding: 14px 10px 14px 74px;
  outline: none;
  border-color: transparent;
  position: relative;
  background: #f7f7fb;
  font-size: 16px;
`;
export const StyledPlaceH = styled.p`
  position: absolute;
  top: -3px;
  left: 24px;
  color: #121417;

  font-size: 18px;

  font-weight: 500;
`;
