import { StyledBack } from './Catalog/Catalog.styled';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';

const Home = () => {
  const swiperParams = {
    direction: 'horizontal', // Set the direction to horizontal
    slidesPerView: 1, // Display one slide at a time
    spaceBetween: 20, // Adjust the space between slides as needed
  };

  return (
    <StyledBack>
      <Swiper {...swiperParams}>
        <SwiperSlide>
          <img
            src="https://pngimg.com/d/mercedes_PNG80188.png"
            alt="hhh"
            style={{ width: '80%' }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://pngimg.com/d/mercedes_PNG80135.png"
            alt="hhh"
            style={{ width: '80%' }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://www.kia.com/content/dam/kia/us/en/home2-0/mtf-carousel/sedan/k5/kia_k5_2024_large-middle.png"
            alt="hhh"
            style={{ width: '80%' }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://images.carprices.com/pricebooks_data/usa/colorized/2022/Mercedes-Benz/View2/GLS/GLS_450/GLS450W4_040.png"
            alt="hhh"
            style={{ width: '80%' }}
          />
        </SwiperSlide>
      </Swiper>
    </StyledBack>
  );
};

export default Home;
