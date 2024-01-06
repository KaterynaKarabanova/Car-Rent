import styled from 'styled-components';
import { StyledForm } from 'components/AddAccessories/AddAccessories.styled';
export const StyledMainForm = styled(StyledForm)`
  @media (min-width: 768px) {
    display: flex;
    flex-wrap: wrap;
    column-gap: 70px;
  }
`;
export const StyledCarInfoDiv = styled.div`
  margin-top: 30px;
  @media (min-width: 768px) {
    margin-top: 10px;
    display: flex;

    align-items: center;
    column-gap: 70px;
  }
`;
export const StyledFileInput = styled.input`
  display: none;
`;
export const StyledInput = styled.input`
  display: block;
  width: 215px;
  height: 30px;
  outline: none;
  border: 1px solid black;
  border-radius: 10px;
  background-color: transparent;
  padding: 0 10px;
  @media (min-width: 768px) {
    width: 310px;
  }
`;
export const StyledLabel = styled.label`
  display: flex;
  flex-direction: column;
  gap: 1px;
  padding-top: 7px;
  font-weight: 400;
  font-size: 14px;
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
  @media (min-width: 768px) {
    width: 330px;
    height: 310px;
    margin-bottom: 0px;
  }
  @media (min-width: 1280px) {
  }
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

export const Styles = {
  control: (baseStyles, state) => ({
    ...baseStyles,
    minWidth: 240,
    maxWidth: 240,
    height: 30,
    borderRadius: '10px',
    border: '2px solid black',
    background: ' #FFF',
    '@media only screen and (min-width:768px)': {
      ...Styles['@media only screen and (min-width: 768px)'],
      minWidth: 332,
      maxWidth: 332,
      minHeight: 38,
    },
  }),
  option: (styles, state) => ({
    ...styles,
    backgroundColor: 'white',
    color: state.isSelected ? 'red' : 'rgba(18, 20, 23, 0.50)',
    ':hover': {
      background: 'DDE7FF',
      color: 'red',
    },
  }),

  menuList: base => ({
    ...base,

    '::-webkit-scrollbar': {
      width: '4px',
      height: '0px',
    },
    '::-webkit-scrollbar-track': {
      background: '#88b5f9',
    },
    '::-webkit-scrollbar-thumb': {
      background: '#880d00',
    },
    '::-webkit-scrollbar-thumb:hover': {
      background: '#0a0a65',
    },
  }),
};
export const StylesAccess = {
  ...Styles,
  control: (Styles, state) => ({
    ...Styles,
    minWidth: 240,
    maxWidth: 240,
    height: 30,
    borderRadius: '10px',
    border: '2px solid black',
    background: ' #FFF',
    '@media only screen and (min-width:768px)': {
      ...Styles['@media only screen and (min-width: 768px)'],
      minWidth: 450,
      maxWidth: 450,
      minHeight: 38,
    },
  }),
};
