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
  StyleImg,
  StyledModalDiv,
} from './Modal.styled';
import {
  StyledInfoDiv,
  StyledInfoText,
  StyledSpan,
  StyledText,
} from 'pages/Catalog/Catalog.styled';
import { useTranslation } from 'react-i18next';

const Modal = ({ element, showModal, setShowModal }) => {
  const { t } = useTranslation();
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
        <StyleImg
          src={
            element.img || element.photoLink
              ? element.img || element.photoLink
              : 'https://img.freepik.com/free-vector/abstract-grunge-style-coming-soon-with-black-splatter_1017-26690.jpg?q=10&h=200'
          }
          onError={e => {
            e.target.src =
              'https://img.freepik.com/premium-photo/front-view-part-black-modern-car-closeup-black-background-headlights-detail_34008-337.jpg';
          }}
          alt={element.make + element.model}
        />
        <StyledText>
          {element.make}
          <StyledSpan>{element.model + ','}</StyledSpan>
          {element.year}
        </StyledText>
        <StyledModalDiv>
          <StyledInfoText>{element.address.split(',')[1]}</StyledInfoText>
          <StyledInfoText>{element.address.split(',')[2]}</StyledInfoText>
          <StyledInfoText>Id: {element.id}</StyledInfoText>
          <StyledInfoText>
            {t('year')}: {element.year}
          </StyledInfoText>
          <StyledInfoText>
            {t('type')}: {element.type}
          </StyledInfoText>
          <StyledInfoText>
            {t('fuelCons')}:{element.fuelConsumption}
          </StyledInfoText>
          <StyledInfoText>
            {t('engineSize')}: {element.engineSize}
          </StyledInfoText>
        </StyledModalDiv>
        <StyledInfoDiv>{element.description}</StyledInfoDiv>

        <StyledTitle>{t('acesories')}:</StyledTitle>
        <StyledModalDiv>
          {element.accessories.map((el, index) => (
            <StyledInfoText key={index}>{el}</StyledInfoText>
          ))}
          {element.functionalities.map((el, index) => (
            <StyledInfoText key={index}>{el}</StyledInfoText>
          ))}
        </StyledModalDiv>

        <StyledTitle>{t('tentalConditions')}:</StyledTitle>
        <StyledRentalDiv>
          {element.rentalConditions.split('\n').map((el, index) =>
            el.includes(':') ? (
              <StyleRentalP key={index}>
                {el.split(':')[0]}
                <StyleRentalSpan key={index}>
                  :{el.split(':')[1]}
                </StyleRentalSpan>
              </StyleRentalP>
            ) : (
              <StyleRentalP>{el}</StyleRentalP>
            )
          )}
        </StyledRentalDiv>

        <StyledLink href="tel:+380730000000">{t('rentCar')}</StyledLink>
      </StyledDiv>
    </StyledBack>
  );
};
export default Modal;
