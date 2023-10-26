import { useEffect } from 'react';
import {
  StyledBack,
  StyledDiv,
  StyledRentalDiv,
  StyledTitle,
  StyleRentalP,
  StyleRentalSpan,
  StyleSvg,
  StyledLink,
} from './Modal.styled';
import {
  StyledInfoDiv,
  StyledInfoText,
  StyledSpan,
  StyledText,
} from 'pages/Catalog/Catalog.styled';

const Modal = ({ element, showModal, setShowModal }) => {
  useEffect(() => {
    const keyDown = e => {
      if (e.code === 'Escape') {
        document.body.style.overflow = 'auto';
        setShowModal(false);
      }
      if (!showModal) {
        window.removeEventListener('keydown', keyDown);
        document.body.style.overflow = 'auto';
      }
    };
    window.addEventListener('keydown', keyDown);
    return () => {
      window.removeEventListener('keydown', keyDown);
    };
  }, [showModal, setShowModal]);

  const onBackClick = e => {
    if (e.target === e.currentTarget) {
      document.body.style.overflow = 'auto';
      setShowModal(false);
    }
  };
  const onSvgClick = () => {
    document.body.style.overflow = 'auto';
    setShowModal(false);
  };

  return (
    <StyledBack onClick={e => onBackClick(e)}>
      <StyledDiv>
        <StyleSvg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          onClick={() => onSvgClick()}
        >
          <path
            d="M18 6L6 18"
            stroke="#121417"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M6 6L18 18"
            stroke="#121417"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </StyleSvg>
        <img
          src={
            element.img || element.photoLink
              ? element.img || element.photoLink
              : 'https://img.freepik.com/free-vector/abstract-grunge-style-coming-soon-with-black-splatter_1017-26690.jpg?q=10&h=200'
          }
          onError={e => {
            e.target.src =
              'https://img.freepik.com/free-vector/abstract-grunge-style-coming-soon-with-black-splatter_1017-26690.jpg?q=10&h=200';
          }}
          alt={element.make + element.model}
          width={469}
          height={280}
          style={{
            borderRadius: '16px',
            marginBottom: '16px',
          }}
        />
        <StyledText>
          {element.make}
          <StyledSpan>{element.model + ','}</StyledSpan>
          {element.year}
        </StyledText>
        <div
          style={{
            display: 'flex',

            flexWrap: 'wrap',
          }}
        >
          <StyledInfoText>{element.address.split(',')[1]}</StyledInfoText>
          <StyledInfoText>{element.address.split(',')[2]}</StyledInfoText>
          <StyledInfoText>Id: {element.id}</StyledInfoText>
          <StyledInfoText>Year: {element.year}</StyledInfoText>
          <StyledInfoText>Type: {element.type}</StyledInfoText>
          <StyledInfoText>
            Fuel Consumption:
            {element.fuelConsumption}
          </StyledInfoText>
          <StyledInfoText> Engine Size: {element.engineSize}</StyledInfoText>
        </div>
        <StyledInfoDiv
          style={{
            margin: '14px 0 8px 0 ',
            fontSize: '14px',
          }}
        >
          {element.description}
        </StyledInfoDiv>
        <div
          style={{
            display: 'flex',
            marginBottom: '20px',
            flexWrap: 'wrap',
          }}
        >
          <StyledTitle
            style={{
              width: '100%',
              margin: '0 0 8px 0 ',
              padding: '0',
            }}
          >
            Accessories and functionalities:
          </StyledTitle>

          {element.accessories.map(el => (
            <StyledInfoText>{el}</StyledInfoText>
          ))}
          {element.functionalities.map(el => (
            <StyledInfoText>{el}</StyledInfoText>
          ))}
        </div>
        <div
          style={{
            display: 'flex',

            flexWrap: 'wrap',
          }}
        >
          <StyledTitle
            style={{
              width: '100%',
              margin: '0',
            }}
          >
            Rental Conditions:
          </StyledTitle>
          <StyledRentalDiv>
            {element.rentalConditions.split('\n').map(el =>
              el.includes(':') ? (
                <StyleRentalP>
                  {el.split(':')[0]}
                  <StyleRentalSpan>:{el.split(':')[1]}</StyleRentalSpan>
                </StyleRentalP>
              ) : (
                <StyleRentalP>{el}</StyleRentalP>
              )
            )}
          </StyledRentalDiv>
        </div>

        <StyledLink href="tel:+380730000000">Rental Car</StyledLink>
      </StyledDiv>
    </StyledBack>
  );
};
export default Modal;
