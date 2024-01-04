import styled from 'styled-components';
export const StyledFileInput = styled.input`
  display: none;
`;

export const StyledFileLabel = styled.label`
  position: relative;
  z-index: 1;

  width: 274px;
  height: 230px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  background-color: beige;
  margin-bottom: 40px;
  background-repeat: no-repeat;
  background-size: cover;
`;

export const StyledFileDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const StyledFileTextPlus = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  border-radius: 6px;
  background: white;
  font-size: 45px;
  color: black;
  padding: 11px;
  margin-bottom: 18px;
`;
export const StyledFileTextAdd = styled.p`
  color: var(--white);
  font-size: 16px;
  font-weight: 500;
  line-height: 20px;
`;
