import { AnimateKeyframes } from 'react-simple-animate';
import { StyledBack } from './Catalog/Catalog.styled';

const Home = () => {
  return (
    <StyledBack>
      <div>
        <AnimateKeyframes
          play={true}
          pause={false}
          iterationCount="infinite"
          direction="alternate"
          duration={20}
          keyframes={[
            'transform: rotateX(0) rotateY(0) rotateZ(0)',
            'transform: rotateX(360deg) rotateY(360deg) rotateZ(360deg)',
          ]}
        >
          <img
            src="https://www.kia.com/content/dam/kia/us/en/home2-0/mtf-carousel/sedan/k5/kia_k5_2024_large-middle.png"
            alt="hhh"
            width={200}
            height={200}
          />
        </AnimateKeyframes>
      </div>
    </StyledBack>
  );
};
export default Home;
