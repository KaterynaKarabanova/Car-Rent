import { useDispatch, useSelector } from 'react-redux';
import { getCars, getCurrent, getFav } from 'redux/selectors';
import styles from './Catalog.module.css';
import { addCarFav, deleteCarFav } from 'redux/CarSlice';
import { useEffect, useState } from 'react';
import {
  StyledList,
  StyledItem,
  StyledImg,
  StyledBack,
  StyledBtn,
  StyledInfoDiv,
  StyledInfoText,
  StyledSvg,
  StyledText,
  StyledSpan,
  StyledInput,
  StyledPlaceH,
  Styles,
  StylesPrice,
  StyledSearchText,
  StyledResetBtn,
  StyledSerachBar,
  StyledForm,
  StyledInputTo,
  StyledMilesDiv,
} from './Catalog.styled';
import Modal from 'components/Modal/Modal';
import LoadMore from '../../components/LoadMore/LoadMore';
import Select from 'react-select';
import { optionsModel, optionsPrice } from './helpers';
import BackToTop from 'components/ButtonBackToTop/BackToTop';
import { useTranslation } from 'react-i18next';
const Catalog = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const cars = useSelector(getCars);
  const currentCars = useSelector(getCurrent);
  const favourite = useSelector(getFav);

  const [actualCars, setActualCars] = useState(currentCars);
  const [currentPrice, setCurrentPrice] = useState({
    value: 10000,
    label: 'All price',
  });
  const [currentPage, setCurrentPage] = useState(2);
  const [showModal, setShowModal] = useState(false);
  const [currentEl, setCurrentEl] = useState('');
  const [currentModel, setCurrentModel] = useState({
    value: 'All marks',
    label: 'All marks',
  });
  const [fromMiles, setFromMiles] = useState(0);
  const [toMiles, setToMiles] = useState(100000);

  useEffect(() => {
    let filteredCars = cars;
    if (currentModel.value !== 'All marks') {
      filteredCars = filteredCars.filter(el => el.make === currentModel.value);
    }
    if (currentPrice.label !== 'All price') {
      filteredCars = filteredCars.filter(
        el =>
          Number(el.rentalPrice.split('').slice(1).join('')) <=
          currentPrice.value
      );
    }
    if (fromMiles !== 0 || toMiles !== 0) {
      filteredCars = filteredCars.filter(
        ({ mileage }) =>
          Number(fromMiles) < mileage && mileage < Number(toMiles)
      );
    }
    if (filteredCars.length === cars.length) {
      setActualCars(currentCars);
      setCurrentPage(Math.max(currentCars.length / 12) + 1);
    } else {
      setActualCars(filteredCars);
    }
  }, [currentModel, currentPrice, cars, currentCars, fromMiles, toMiles]);

  const onModelChange = model => {
    setCurrentModel(model);
  };

  const onPriceChange = price => {
    setCurrentPrice(price);
  };

  const onHeartClick = e => {
    const elId = e.target.closest('li').id;
    if (!e.target.closest('li>svg').classList.contains(`${styles.disabled}`)) {
      dispatch(addCarFav(elId));
    } else {
      dispatch(deleteCarFav(elId));
    }
  };

  const isFav = id => {
    return favourite.includes(id);
  };

  const onLearnMoreClick = e => {
    setShowModal(true);
    document.body.style.overflow = 'hidden';
    setCurrentEl(e.target.closest('li').id);
  };

  const getCurrentEl = () => {
    return cars.find(({ id }) => id === currentEl);
  };

  const onSubmit = e => {
    e.preventDefault();
    const from = e.target.elements[0].value;
    const to = e.target.elements[1].value;
    setFromMiles(from);
    setToMiles(to);
    let filteredData;
    if (
      currentPrice.label === 'All price' &&
      currentModel.value === 'All marks'
    ) {
      filteredData = cars;
    } else {
      filteredData = actualCars;
    }
    const filteredCars = filteredData.filter(
      ({ mileage }) => Number(from) < mileage && mileage < Number(to)
    );

    setActualCars(filteredCars);
    e.target.reset();
  };

  const onMilesReset = () => {
    setFromMiles(0);
    setToMiles(100000);
  };

  return (
    <StyledBack>
      <BackToTop />
      <div style={showModal ? { pointerEvents: 'none' } : {}}>
        <StyledSerachBar>
          <div>
            <StyledSearchText> {t('сarBrand')}</StyledSearchText>
            <Select
              styles={Styles}
              value={currentModel}
              onChange={value => onModelChange(value)}
              options={optionsModel}
              placeholder={currentModel}
            />
          </div>
          <div>
            <StyledSearchText>{t('price')}</StyledSearchText>
            <Select
              styles={StylesPrice}
              value={currentPrice}
              onChange={value => onPriceChange(value)}
              options={optionsPrice}
              placeholder={currentPrice}
            />
          </div>
          <div>
            <StyledSearchText>{t('mileage')}</StyledSearchText>
            <StyledForm onSubmit={e => onSubmit(e)}>
              <StyledInput type="number" />
              <StyledPlaceH>{t('from')}</StyledPlaceH>
              <StyledInputTo type="number" />
              <StyledPlaceH
                style={{
                  left: '190px',
                }}
              >
                {t('to')}
              </StyledPlaceH>
              <StyledResetBtn type="button" onClick={() => onMilesReset()}>
                {t('reset')}
              </StyledResetBtn>

              <StyledBtn
                style={{
                  width: '136px',
                  padding: '14px 44px',
                }}
                type="submit"
              >
                {t('submit')}
              </StyledBtn>
              {fromMiles !== 0 || toMiles !== 100000 ? (
                <StyledMilesDiv>
                  <StyledSearchText>
                    {t('from')}: {fromMiles} / km
                  </StyledSearchText>
                  <StyledSearchText>
                    {t('to')}: {toMiles} / km
                  </StyledSearchText>
                </StyledMilesDiv>
              ) : (
                ''
              )}
            </StyledForm>
          </div>
        </StyledSerachBar>
        <StyledList>
          {actualCars.map(
            (
              {
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
              },
              index
            ) => {
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

                  <StyledText
                    style={{
                      maxWidth: '260px',
                    }}
                  >
                    {make}
                    <StyledSpan>{model + ','}</StyledSpan>
                    {year}
                    <span
                      style={{
                        position: 'absolute',
                        top: '0',
                        right: '-5px',
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
                  <StyledSvg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    onClick={e => onHeartClick(e)}
                    className={isFav(id) ? styles.disabled : styles.active}
                  >
                    <path
                      d="M20.8404 4.60987C20.3296 4.09888 19.7232 3.69352 19.0557 3.41696C18.3883 3.14039 17.6729 2.99805 16.9504 2.99805C16.2279 2.99805 15.5125 3.14039 14.845 3.41696C14.1776 3.69352 13.5711 4.09888 13.0604 4.60987L12.0004 5.66987L10.9404 4.60987C9.90867 3.57818 8.5094 2.99858 7.05036 2.99858C5.59133 2.99858 4.19206 3.57818 3.16036 4.60987C2.12867 5.64157 1.54907 7.04084 1.54907 8.49987C1.54907 9.95891 2.12867 11.3582 3.16036 12.3899L4.22036 13.4499L12.0004 21.2299L19.7804 13.4499L20.8404 12.3899C21.3514 11.8791 21.7567 11.2727 22.0333 10.6052C22.3098 9.93777 22.4522 9.22236 22.4522 8.49987C22.4522 7.77739 22.3098 7.06198 22.0333 6.39452C21.7567 5.72706 21.3514 5.12063 20.8404 4.60987Z"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </StyledSvg>
                  <StyledBtn type="button" onClick={e => onLearnMoreClick(e)}>
                    {t('learnMore')}
                  </StyledBtn>
                </StyledItem>
              );
            }
          )}
        </StyledList>
        {Math.floor(actualCars.length / 12) >= currentPage - 1 &&
        cars.length > currentCars.length &&
        actualCars.length === currentCars.length ? (
          <LoadMore setCurrentPage={setCurrentPage} currentPage={currentPage} />
        ) : null}
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
export default Catalog;
