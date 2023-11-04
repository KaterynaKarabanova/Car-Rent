import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { useNavigate } from 'react-router-dom';
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

const Home = () => {
  const navigate = useNavigate();
  const swiperParams = {
    direction: 'horizontal',
    slidesPerView: 1,
    spaceBetween: 10,
    breakpoints: {
      // when window width is >= 640px
      0: {
        width: 140,
      },
      640: {
        width: 440,
        height: 540,
      },
      // when window width is >= 768px
      1280: {
        width: 580,
      },
    },
  };

  return (
    <div
      style={{
        background: "url('https://wallpaperaccess.com/full/1079100.jpg') ",
        backgroundSize: 'cover',
        backgroundPosition: 'bottom',
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
      </StyledHomeBack>
    </div>
  );
};

export default Home;
