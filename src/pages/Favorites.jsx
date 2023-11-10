import { useDispatch, useSelector } from 'react-redux';
import { getCars, getFav } from 'redux/selectors';
import { deleteCarFav } from 'redux/CarSlice';
import Modal from 'components/Modal/Modal';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import {
  StyledList,
  StyledItem,
  StyledImg,
  StyledBtn,
  StyledInfoDiv,
  StyledInfoText,
  StyledSvg,
  StyledText,
  StyledSpan,
  StyledBack,
  StyledFavImg,
  StyledFavDiv,
} from './Catalog/Catalog.styled';
import { StyledLink } from './Home/Home.styled';
import { useNavigate } from 'react-router-dom';

const Favorites = () => {
  const cars = useSelector(getCars);
  const favourite = useSelector(getFav);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const [currentEl, setCurrentEl] = useState('');
  const { t } = useTranslation();
  const getCurrentEl = () => {
    return cars.find(({ id }) => id === currentEl);
  };

  const onLearnMoreClick = e => {
    setShowModal(true);
    document.body.style.overflow = 'hidden';
    setCurrentEl(e.target.closest('li').id);
  };

  const getFavCars = () => {
    return cars.filter(({ id }) => {
      return favourite.includes(id);
    });
  };

  const onDeleteClick = e => {
    const elId = e.target.closest('li').id;
    dispatch(deleteCarFav(elId));
  };

  return (
    <StyledBack>
      <div>
        {!getFavCars().length && (
          <StyledFavDiv>
            <p>{t('noFavCars')}</p>
            <StyledFavImg
              src="https://static.vecteezy.com/system/resources/thumbnails/009/379/748/small/racing-flag-clipart-design-illustration-free-png.png"
              alt="car"
            />
            <p>{t('addFavCars')}</p>
            <StyledLink
              style={{
                width: '100%',
                marginLeft: '0',
              }}
              onClick={() => navigate('/catalog')}
            >
              {t('submit')}
            </StyledLink>
          </StyledFavDiv>
        )}
        <StyledList>
          {getFavCars().map(
            ({
              id,
              year,
              make,
              model,
              type,
              img,
              description,
              fuelConsumption,
              engineSize,
              accessories,
              functionalities,
              rentalPrice,
              rentalCompany,
              address,
              rentalConditions,
              mileage,
              photoLink,
            }) => {
              return (
                <StyledItem key={id} id={id}>
                  <StyledImg
                    src={
                      img ||
                      photoLink ||
                      'https://img.freepik.com/free-vector/abstract-grunge-style-coming-soon-with-black-splatter_1017-26690.jpg?q=10&h=200'
                    }
                    alt={make + model}
                    width={200}
                    height={200}
                    onError={e => {
                      e.target.src =
                        'https://img.freepik.com/premium-photo/front-view-part-black-modern-car-closeup-black-background-headlights-detail_34008-337.jpg';
                    }}
                  />

                  <StyledText>
                    {make + ','}
                    <StyledSpan>{model + ','}</StyledSpan>
                    {year}
                    <span
                      style={{
                        position: 'absolute',
                        top: '0',
                        right: '10px',
                      }}
                    >
                      {rentalPrice}
                    </span>
                  </StyledText>
                  <StyledInfoDiv>
                    <StyledInfoText>{address.split(',')[1]}</StyledInfoText>
                    <StyledInfoText>{address.split(',')[2]}</StyledInfoText>
                    <StyledInfoText>{rentalCompany}</StyledInfoText>
                    <StyledInfoText>{type}</StyledInfoText>
                    <StyledInfoText> {functionalities[1]}</StyledInfoText>
                    <StyledInfoText>{mileage}</StyledInfoText>
                    <StyledInfoText>{accessories[1]}</StyledInfoText>
                  </StyledInfoDiv>
                  <StyledBtn type="button" onClick={e => onLearnMoreClick(e)}>
                    Learn More
                  </StyledBtn>

                  <StyledSvg
                    width="24"
                    height="24"
                    viewBox="0 0 34 34"
                    onClick={e => onDeleteClick(e)}
                  >
                    <path
                      fill="none"
                      stroke="#fdfdff"
                      strokeLinejoin="round"
                      strokeLinecap="round"
                      strokeMiterlimit="4"
                      strokeWidth="2.6667"
                      d="M21.333 8v-1.067c0-1.493 0-2.24-0.291-2.811-0.256-0.502-0.664-0.91-1.165-1.165-0.57-0.291-1.317-0.291-2.811-0.291h-2.133c-1.493 0-2.24 0-2.811 0.291-0.502 0.256-0.91 0.664-1.165 1.165-0.291 0.57-0.291 1.317-0.291 2.811v1.067M13.333 15.333v6.667M18.667 15.333v6.667M4 8h24M25.333 8v14.933c0 2.24 0 3.36-0.436 4.216-0.383 0.753-0.995 1.365-1.748 1.748-0.856 0.436-1.976 0.436-4.216 0.436h-5.867c-2.24 0-3.36 0-4.216-0.436-0.753-0.383-1.365-0.995-1.748-1.748-0.436-0.856-0.436-1.976-0.436-4.216v-14.933"
                    ></path>
                  </StyledSvg>
                </StyledItem>
              );
            }
          )}
        </StyledList>
      </div>
      {showModal && (
        <Modal
          showModal={showModal}
          setShowModal={setShowModal}
          element={getCurrentEl()}
        />
      )}
    </StyledBack>
  );
};
export default Favorites;
