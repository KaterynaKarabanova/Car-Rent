import React, { useState, useEffect } from 'react';
import { StyledButton, StyledDiv } from './BackToTop.styled';

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', onScroll);

    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <StyledDiv>
      {isVisible && (
        <StyledButton
          onClick={scrollToTop}
          className="back-to-top-button"
        ></StyledButton>
      )}
    </StyledDiv>
  );
};

export default BackToTop;
