import styled from 'styled-components';

export const StyledLabel = styled.label`
  display: block;
  width: 250px;
  height: 20px;
  text-align: center;
  font-weight: 500;
  border: 2px solid #ba000d;
  border-radius: 10px;
  padding: 10px 10px;
  margin-bottom: 15px;
  background-color: ${({ isChecked }) => (isChecked ? '#ba000d' : 'white')};
  color: ${({ isChecked }) => (isChecked ? 'white' : '#ba000d')};
  text-align: center;
`;
export const StyledCheckbox = styled.input`
  display: none;
`;
export const StyledCheckboxAge = styled(StyledLabel)`
  width: 20px;
  height: 20px;
  display: inline-block;
`;
export const StyledDiv = styled.div`
  display: flex;
  justify-content: space-around;
`;
export const StyledText = styled.p`
  font-size: 20px;
  font-weight: 500;
`;
