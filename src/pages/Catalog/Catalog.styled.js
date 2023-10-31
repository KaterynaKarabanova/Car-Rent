import styled from 'styled-components';
export const StyledBack = styled.div`
  margin: 0 auto;
  width: 280px;
  overflow: hidden;
  @media (min-width: 768px) {
    width: 730px;
  }
  @media (min-width: 1280px) {
    width: 1280px;
  }
`;
export const StyledSerachBar = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  @media (min-width: 768px) {
    flex-direction: row;
    gap: 10px;
    justify-content: center;
    align-items: end;
    margin: 30px 0;
  }
  @media (min-width: 1280px) {
    gap: 18px;
    margin: 50px 0;
  }
`;
export const StyledForm = styled.form`
  position: relative;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  @media (min-width: 768px) {
    flex-wrap: nowrap;
  }
`;
export const StyledList = styled.ul`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  list-style: none;
  padding: 20px;
  column-gap: 10px;
  row-gap: 50px;
  padding: 0;
  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);

    column-gap: 110px;
  }
  @media (min-width: 1280px) {
    grid-template-columns: repeat(4, 1fr);
    column-gap: 10px;
    padding: 0;
  }
`;
export const StyledItem = styled.li`
  width: 274px;
  padding: 0;
  max-height: 420px;
  position: relative;
  border-radius: 14px;
  box-shadow: rgba(0, 0, 0, 0.15) 3px 10px 10px;
  @media (min-width: 768px) {
    max-height: 450px;
    width: 300px;
  }
  @media (min-width: 1280px) {
    width: 274px;
  }
`;
export const StyledImg = styled.img`
  width: 100%;
  height: 230px;
  border-radius: 16px;
  object-fit: cover;
  @media (min-width: 768px) {
    height: 268px;
  }
  @media (min-width: 1280px) {
    height: 268px;
  }
`;
export const StyledBtn = styled.button`
  display: flex;
  min-width: 274px;
  height: 38px;
  padding: 12px 90px;
  margin-top: 15px;
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
  transition: 0.3s;
  &:hover {
    background-color: #313095;
  }
  @media (min-width: 768px) {
    min-width: 50px;
    width: 300px;
    height: 44px;
    margin-top: 0;
  }
  @media (min-width: 1280px) {
    width: 274px;
    height: 48px;
  }
`;
export const StyledInfoDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  flex-wrap: wrap;
  overflow-y: scroll;
  display: flex;

  height: 55px;
  padding: 0;
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
  height: 40px;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  margin: 8px 0;
  position: relative;
`;
export const StyledSpan = styled.span`
  color: #3470ff;
  margin: 0 3px;
`;
export const StyledInput = styled.input`
  max-width: 48px;
  height: 10px;
  padding: 16px 10px 14px 74px;
  outline: none;
  border-color: transparent;
  position: relative;
  background: #f7f7fb;
  color: #121417;
  font-size: 18px;
  font-weight: 500;
  line-height: 20px;
  border-radius: 14px 0px 0px 14px;
  @media (min-width: 1280px) {
    height: 15px;
  }
  @media (min-width: 1280px) {
    max-width: 74px;
    height: 15px;
    padding: 16px 10px 14px 74px;
  }
`;
export const StyledInputTo = styled(StyledInput)`
  border-radius: 0 14px 14px 0;

  border-left: 1px solid rgba(138, 138, 137, 0.2);
  margin-right: 10px;
  @media (min-width: 1280px) {
    margin-right: 18px;
  }
`;
export const StyledPlaceH = styled.p`
  position: absolute;
  top: -3px;
  left: 24px;
  color: #121417;
  font-size: 18px;
  font-weight: 500;
  line-height: 20px;
`;

export const StyledSearchText = styled.p`
  color: rgba(18, 20, 23, 0.5);

  padding: 0;
  margin: 0 0 8px 0;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 18px;
`;

export const Styles = {
  control: (baseStyles, state) => ({
    ...baseStyles,
    minWidth: 270,
    maxWidth: 270,
    minHeight: 30,
    borderRadius: '14px',
    background: ' #F7F7FB ',
    '@media only screen and (min-width:768px)': {
      ...Styles['@media only screen and (min-width: 768px)'],
      minWidth: 160,
      maxWidth: 160,
      minHeight: 44,
    },
    '@media only screen and (min-width:1280px)': {
      ...Styles['@media only screen and (min-width: 1280px)'],
      minWidth: 224,
      maxWidth: 224,
      minHeight: 48,
    },
  }),
  option: (styles, state) => ({
    ...styles,
    backgroundColor: 'white',
    color: state.isSelected ? '#121417' : 'rgba(18, 20, 23, 0.20)',
    ':hover': {
      background: 'DDE7FF',
      color: '#121417',
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
      background: '#4751e7',
    },
    '::-webkit-scrollbar-thumb:hover': {
      background: '#0a0a65',
    },
  }),
};

export const StylesPrice = {
  control: (baseStyles, state) => ({
    ...baseStyles,
    minWidth: 270,
    maxWidth: 270,
    minHeight: 38,
    borderRadius: '14px',
    background: ' #F7F7FB ',
    '@media only screen and (min-width:768px)': {
      ...Styles['@media only screen and (min-width: 768px)'],
      minWidth: 120,
      maxWidth: 120,
      minHeight: 44,
    },
    '@media only screen and (min-width:1280px)': {
      ...Styles['@media only screen and (min-width: 1280px)'],
      minWidth: 130,
      maxWidth: 130,
      minHeight: 48,
    },
  }),
  option: (styles, state) => ({
    ...styles,
    backgroundColor: 'white',
    color: state.isSelected ? '#121417' : 'rgba(18, 20, 23, 0.20)',
    ':hover': {
      background: 'DDE7FF',
      color: '#121417',
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
      background: '#4751e7',
    },
    '::-webkit-scrollbar-thumb:hover': {
      background: '#0a0a65',
    },
  }),
};

export const StyledResetBtn = styled.button`
  position: absolute;
  height: 20px;
  width: 60px;
  top: -26px;
  left: 210px;
  padding: 0;
  outline: none;
  border: none;
  border-radius: 4px;
  background-color: #e7eeff;
  font-size: 14px;
  font-weight: 600;
  color: rgba(18, 20, 23, 0.8);
  &:hover {
    background-color: black;
    color: #fff;
    border-color: white;
  }
  @media (min-width: 1280px) {
    top: -26px;
    left: 250px;
  }
`;
export const StyledMilesDiv = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  padding: 5px 0;
  gap: 90px;
  width: 360px;
  position: absolute;
  top: 50px;
`;
