import { StyledBack } from '../Catalog/Catalog.styled';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { useNavigate } from 'react-router-dom';
import {
  StyledDiv,
  StyledLink,
  StyledMainTitle,
  StyledSvgDiv,
  StyledSwipeModel,
  StyledSwipePrice,
  StyledSwipeText,
  StyledText,
  StyledTitle,
} from './Home.styled';

const Home = () => {
  const navigate = useNavigate();
  const swiperParams = {
    direction: 'horizontal',
    slidesPerView: 1,
    spaceBetween: 20,
  };

  return (
    <div
      style={{
        background:
          'linear-gradient(0deg, rgba(105,141,214,1) 18%, #ffffff 60%)',
      }}
    >
      <StyledBack
        style={{
          height: 'calc(100vh - 70px)',
          display: 'flex',
          position: 'relative',
        }}
      >
        <Swiper
          {...swiperParams}
          style={{
            padding: '9% 0  ',
          }}
        >
          <SwiperSlide>
            <StyledSwipePrice>$75/Day</StyledSwipePrice>
            <img
              src="https://vehicle-images.dealerinspire.com/stock-images/thumbnails/large/chrome/a3beff21bedf52cfc388c50960d1b188.png"
              alt="hhh"
              style={{
                width: '550px',
              }}
            />
            <StyledSwipeModel>Mercedes-Benz </StyledSwipeModel>
          </SwiperSlide>
          <SwiperSlide>
            <StyledSwipePrice>$90/Day</StyledSwipePrice>
            <img
              src="https://pngimg.com/d/porsche_PNG10611.png"
              alt="hhh"
              style={{ width: '550px', marginLeft: '50px' }}
            />
            <StyledSwipeModel>Porsche Cayenne</StyledSwipeModel>
          </SwiperSlide>
          <SwiperSlide>
            <StyledSwipePrice>$150/Day</StyledSwipePrice>
            <img
              src="https://images.iconfigurators.app/images/vehicles/reference/Bentley-Azure-Mark-II-2006_2010.png"
              alt="hhh"
              style={{
                width: '700px',
                marginTop: '30px',
              }}
            />
            <StyledSwipeModel>Bentley Azure</StyledSwipeModel>
          </SwiperSlide>
          <SwiperSlide>
            <StyledSwipePrice>$75/Day</StyledSwipePrice>
            <img
              src="https://www.pngall.com/wp-content/uploads/11/White-Tesla-Model-S-PNG-Pic.png"
              alt="hhh"
              style={{ width: '600px' }}
            />
            <StyledSwipeModel>Tesla Model 3</StyledSwipeModel>
          </SwiperSlide>
        </Swiper>
        <StyledSvgDiv>
          <svg
            style={{
              height: '30px',
              width: '30px',
            }}
          >
            <path d="M1 16l15 15v-9h16v-12h-16v-9z"></path>
          </svg>
          <StyledSwipeText>Swipe</StyledSwipeText>
        </StyledSvgDiv>
        <StyledDiv>
          <StyledMainTitle>Choose with Comfort</StyledMainTitle>
          <StyledTitle>Drive with Comfort</StyledTitle>
          <StyledText>
            Our application presents more than 30 cars of different classes,
            sizes and years of production that can be rented. You can choose a
            car, contact the owner and plan your comfortable trip. Do not delay
            and choose a car in the Catalog section.
          </StyledText>
          <StyledLink onClick={() => navigate('/catalog')}>Catalog</StyledLink>
        </StyledDiv>
      </StyledBack>
    </div>
  );
};

export default Home;
