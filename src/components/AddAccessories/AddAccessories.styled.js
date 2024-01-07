import styled from 'styled-components';

export const StyledBtnDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  font-weight: 500;
  font-size: 22px;
  color: black;
`;

export const StyledAddBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  border-radius: 10px;
  background-color: #ba000d;
  color: white;
`;
export const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const StyledAccessoriesDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  @media (min-width: 768px) {
    justify-content: flex-start;
    gap: 50px;
  }
`;
export const StyledValid = styled.p`
  position: absolute;
  top: -20px;
  left: 5px;
  font-size: 25px;
  color: red;
  z-index: 5;
`;
export const StyledTitle = styled.h2`
  font-size: 22px;
  margin: 0;
  padding: 0;
  color: black;
  font-weight: 600;
`;

export const StyledForm = styled.form`
  padding: 20px 0;
`;
