import night from '../assets/highway-driving.gif';
import tonnel from '../assets/U8mq.gif';
import pink from '../assets/pink.gif';
import porsche from '../assets/newPorsche.png';
import mercedez from '../assets/newMercedes.png';
import tesla from '../assets/tesla.png';
import { useState } from 'react';
import {
  StyledMain,
  StyledList,
  StyledButton,
  StyledDiv,
  StyledActiveCar,
  StyledWrapper,
  StyledDesc,
  StyledCarText,
} from './CarInsideView.styled';
import { useTranslation } from 'react-i18next';
import { StyledMainTitle, StyledTitle } from 'pages/Home/Home.styled';
const CarInsideView = () => {
  const { t } = useTranslation();
  const [actualCar, setActualCar] = useState('PORSCHE');
  const [actualLandscape, setActualLandscape] = useState('NIGHT');
  return (
    <StyledMain>
      <StyledDesc>
        <StyledMainTitle>{t('just')}</StyledMainTitle>
        <StyledTitle>{t('imagine')}</StyledTitle>
        <StyledCarText>{t('insideText')}</StyledCarText>
      </StyledDesc>
      <StyledWrapper>
        <StyledList>
          <li>
            {actualCar === 'TESLA' ? (
              <StyledActiveCar>Tesla</StyledActiveCar>
            ) : (
              <StyledButton onClick={() => setActualCar('TESLA')}>
                Tesla
              </StyledButton>
            )}
          </li>
          <li>
            {actualCar === 'MERCEDEZ' ? (
              <StyledActiveCar>Mercedez</StyledActiveCar>
            ) : (
              <StyledButton onClick={() => setActualCar('MERCEDEZ')}>
                Mercedez
              </StyledButton>
            )}
          </li>
          <li>
            {actualCar === 'PORSCHE' ? (
              <StyledActiveCar>Porsche</StyledActiveCar>
            ) : (
              <StyledButton onClick={() => setActualCar('PORSCHE')}>
                Porsche
              </StyledButton>
            )}
          </li>
        </StyledList>

        <StyledDiv>
          {actualLandscape === 'NIGHT' && (
            <img
              src={night}
              alt=""
              style={{
                width: '600px',
                position: 'absolute',
                top: '-360px',
              }}
            />
          )}
          {actualLandscape === 'TONNEL' && (
            <img
              src={tonnel}
              alt=""
              style={{
                width: '600px',
                position: 'absolute',
                top: '-190px',
              }}
            />
          )}
          {actualLandscape === 'PINK' && (
            <img
              src={pink}
              alt=""
              style={{
                width: '600px',
                position: 'absolute',
                top: '-370px',
              }}
            />
          )}

          {actualCar === 'PORSCHE' && (
            <img
              src={porsche}
              alt=""
              style={{
                position: 'absolute',
                left: '0',
                top: '0px',
                width: '600px',
              }}
            />
          )}
          {actualCar === 'MERCEDEZ' && (
            <img
              src={mercedez}
              alt=""
              style={{
                position: 'absolute',
                left: '0',
                top: '-10px',
                width: '600px',
              }}
            />
          )}
          {actualCar === 'TESLA' && (
            <img
              src={tesla}
              alt=""
              style={{
                position: 'absolute',
                left: '0',
                top: '-90px',
                width: '600px',
              }}
            />
          )}
        </StyledDiv>
        <StyledList>
          <li>
            {actualLandscape === 'NIGHT' ? (
              <StyledActiveCar>Night Road</StyledActiveCar>
            ) : (
              <StyledButton onClick={() => setActualLandscape('NIGHT')}>
                Night Road
              </StyledButton>
            )}
          </li>
          <li>
            {actualLandscape === 'TONNEL' ? (
              <StyledActiveCar>Tonnel</StyledActiveCar>
            ) : (
              <StyledButton onClick={() => setActualLandscape('TONNEL')}>
                Tonnel
              </StyledButton>
            )}
          </li>
          <li>
            {actualLandscape === 'PINK' ? (
              <StyledActiveCar>Pink Sunset</StyledActiveCar>
            ) : (
              <StyledButton onClick={() => setActualLandscape('PINK')}>
                Pink Sunset
              </StyledButton>
            )}
          </li>
        </StyledList>
      </StyledWrapper>
    </StyledMain>
  );
};
export default CarInsideView;
