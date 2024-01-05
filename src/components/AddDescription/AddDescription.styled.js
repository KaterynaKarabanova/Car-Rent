import styled from 'styled-components';
export const StyledTextarea = styled.textarea`
  width: 270px;
  height: 100px;
  resize: none;
  border: 2px solid black;
  border-radius: 10px;
  margin-top: 10px;
  @media (min-width: 768px) {
    width: 520px;
    height: 150px;
  }
`;
