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
  StyledSpan,
  StyledDiv,
} from './CarInsideView.styled';
const CarInsideView = () => {
  const [actualCar, setActualCar] = useState('PORSCHE');
  const [actualLandscape, setActualLandscape] = useState('NIGHT');
  return (
    <StyledMain>
      <StyledList>
        <li>
          {' '}
          <StyledButton onClick={() => setActualCar('TESLA')}>
            Tesla
          </StyledButton>
        </li>
        <li>
          <StyledButton onClick={() => setActualCar('MERCEDEZ')}>
            Mercedez
          </StyledButton>
        </li>
        <li>
          {' '}
          <StyledButton onClick={() => setActualCar('PORSCHE')}>
            Porsche
          </StyledButton>
        </li>
      </StyledList>

      <StyledDiv
        style={{
          position: 'relative',
          height: '300px',
          width: '600px',
          overflow: 'hidden',
        }}
      >
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
          <StyledButton onClick={() => setActualLandscape('NIGHT')}>
            Night Road
          </StyledButton>
        </li>
        <li>
          <StyledButton onClick={() => setActualLandscape('TONNEL')}>
            Tonnel
          </StyledButton>
        </li>
        <li>
          <StyledButton onClick={() => setActualLandscape('PINK')}>
            <StyledSpan>Pink Sunset</StyledSpan>
          </StyledButton>
        </li>
      </StyledList>
    </StyledMain>
  );
};
export default CarInsideView;
