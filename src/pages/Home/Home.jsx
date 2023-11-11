import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { useNavigate } from 'react-router-dom';
import night from '../../components/assets/highway-driving.gif';
import tonnel from '../../components/assets/U8mq.gif';
import pink from '../../components/assets/pink.gif';
import porsche from '../../components/assets/newPorsche.png';
import mercedez from '../../components/assets/newMercedes.png';
import tesla from '../../components/assets/tesla.png';
import {
  StyledDiv,
  StyledHomeBack,
  StyledLink,
  StyledMainTitle,
  StyledSvg,
  StyledSvgDiv,
  StyledSwipeModel,
  StyledSwipePrice,
  StyledSwipeText,
  StyledSwiperDiv,
  StyledSwiperImg,
  StyledText,
  StyledTitle,
} from './Home.styled';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';
const Home = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const [actualCar, setActualCar] = useState('PORSCHE');
  const [actualLandscape, setActualLandscape] = useState('NIGHT');
  const swiperParams = {
    direction: 'horizontal',
    slidesPerView: 1,
    spaceBetween: 10,
    breakpoints: {
      // when window width is >= 640px
      0: {
        width: 220,
      },
      640: {
        width: 440,
        height: 540,
      },
      // when window width is >= 768px
      1280: {
        width: 580,
      },
      1480: {
        width: 780,
      },
    },
  };

  return (
    <div>
      <div
        style={{
          backgroundSize: 'cover',
          background: 'linear-gradient(to right, #000000, #e74c3c)',
        }}
      >
        <StyledHomeBack>
          <StyledSwiperDiv>
            <Swiper
              {...swiperParams}
              style={{
                padding: '7% 0  ',
              }}
            >
              <SwiperSlide>
                <StyledSwipePrice>$75/Day</StyledSwipePrice>
                <StyledSwiperImg
                  src="https://vehicle-images.dealerinspire.com/stock-images/thumbnails/large/chrome/a3beff21bedf52cfc388c50960d1b188.png"
                  alt="Mercedes-Benz"
                />
                <StyledSwipeModel>Mercedes-Benz </StyledSwipeModel>
              </SwiperSlide>
              <SwiperSlide>
                <StyledSwipePrice>$90/Day</StyledSwipePrice>
                <StyledSwiperImg
                  src="https://pngimg.com/d/porsche_PNG10611.png"
                  alt="Porsche Cayenne"
                />
                <StyledSwipeModel>Porsche Cayenne</StyledSwipeModel>
              </SwiperSlide>

              <SwiperSlide>
                <StyledSwipePrice>$75/Day</StyledSwipePrice>
                <StyledSwiperImg
                  src="https://www.pngall.com/wp-content/uploads/11/White-Tesla-Model-S-PNG-Pic.png"
                  alt="Tesla Model 3"
                />
                <StyledSwipeModel>Tesla Model 3</StyledSwipeModel>
              </SwiperSlide>
            </Swiper>
          </StyledSwiperDiv>
          <StyledSvgDiv>
            <StyledSvg>
              <path d="M1 16l15 15v-9h16v-12h-16v-9z"></path>
            </StyledSvg>
            <StyledSwipeText>Swipe</StyledSwipeText>
          </StyledSvgDiv>
          <StyledDiv>
            <StyledMainTitle>{t('homeTitleChoose')}</StyledMainTitle>
            <StyledTitle>{t('homeTitleDrive')}</StyledTitle>
            <StyledText>{t('homeText')}</StyledText>
            <StyledLink onClick={() => navigate('/catalog')}>
              {t('catalog')}
            </StyledLink>
          </StyledDiv>
        </StyledHomeBack>
      </div>
      <div>
        <div
          style={{
            display: 'flex',
            listStyle: 'none',
            gap: '20px',
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
                top: '10px',
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
          <button onClick={() => setActualLandscape('NIGHT')}>
            Night Road
          </button>
          <button onClick={() => setActualLandscape('TONNEL')}>Tonnel</button>
          <button onClick={() => setActualLandscape('PINK')}>
            Pink Sunset
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
