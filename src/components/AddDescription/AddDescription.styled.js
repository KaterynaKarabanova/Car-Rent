import { StyledValidation } from 'components/AddCarInfo/AddCarInfo.styled';
import styled from 'styled-components';
export const StyledTextarea = styled.textarea`
  width: 250px;
  height: 100px;
  resize: none;
  border: 2px solid black;
  border-radius: 10px;
  margin-top: 10px;
  font-family: inherit;
  padding: 10px;
  position: relative;
  @media (min-width: 768px) {
    width: 520px;
    height: 150px;
  }
`;
export const StyledForm = styled.form`
  position: relative;
`;

export const StyledDescValid = styled(StyledValidation)`
  left: 0;
  top: 15px;
  font-size: 16px;
  font-weight: 500;
  color: red;
`;
