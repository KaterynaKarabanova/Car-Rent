import night from '../assets/highway-driving.gif';
import tonnel from '../assets/U8mq.gif';
import pink from '../assets/pink.gif';
import porsche from '../assets/newPorsche.png';
import mercedez from '../assets/newMercedes.png';
import tesla from '../assets/tesla.png';
import { useState } from 'react';
// import { StyledMain } from './CarInsideView.styled';
const CarInsideView = () => {
  const [actualCar, setActualCar] = useState('PORSCHE');
  const [actualLandscape, setActualLandscape] = useState('NIGHT');
  return (
    <div>
      <div
        style={{
          listStyle: 'none',
        }}
      >
        <button onClick={() => setActualCar('TESLA')}>Tesla</button>
        <button onClick={() => setActualCar('MERCEDEZ')}>Mercedez</button>
        <button onClick={() => setActualCar('PORSCHE')}>Porsche</button>
      </div>

      <div
        style={{
          position: 'relative',
          height: '400px',
          overflow: 'hidden',
        }}
      >
        {actualLandscape === 'NIGHT' && (
          <img
            src={night}
            alt=""
            style={{
              width: '800px',
              position: 'absolute',
              top: '-430px',
            }}
          />
        )}
        {actualLandscape === 'TONNEL' && (
          <img
            src={tonnel}
            alt=""
            style={{
              width: '800px',
              position: 'absolute',
              top: '-220px',
            }}
          />
        )}
        {actualLandscape === 'PINK' && (
          <img
            src={pink}
            alt=""
            style={{
              width: '800px',
              position: 'absolute',
              top: '-460px',
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
              width: '800px',
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
              width: '800px',
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
              width: '800px',
            }}
          />
        )}
      </div>
      <div>
        <button onClick={() => setActualLandscape('NIGHT')}>Night Road</button>
        <button onClick={() => setActualLandscape('TONNEL')}>Tonnel</button>
        <button onClick={() => setActualLandscape('PINK')}>Pink Sunset</button>
      </div>
    </div>
  );
};
export default CarInsideView;
